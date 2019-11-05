
interface IEvent{
    [id: string]: SubscriptionReference
}

interface IEventTypeList{
    [eventType: string]: IEvent
}

class SubscriptionReference {
    bus: EventBus;
    eventType: string;
    id: number;
    callback: Function;

    constructor(_bus: EventBus, _eventType: string, _id: number, _callback: Function) {
        this.bus = _bus;
        this.eventType = _eventType;
        this.id = _id;
        this.callback = _callback;
    }

    unsubscribe() {
        delete this.bus.subscriptions[this.eventType][this.id];
        if(Object.keys(this.bus.subscriptions[this.eventType]).length === 0) {
            delete this.bus.subscriptions[this.eventType]
        }
    }
}

export class EventBus{
    
    subscriptions: IEventTypeList = {};
    getNextUniqueId: Function = this.getIdGenerator();

    subscribe(_eventType: string, callback: Function) {
        let id: number = this.getNextUniqueId(); //unique id.

        if(!this.subscriptions[_eventType]){
            this.subscriptions[_eventType] = { };
        }

        let subRef = new SubscriptionReference(this, _eventType, id, callback);
        this.subscriptions[_eventType][id] = subRef;
        return subRef;
    }

    unsubscribe(_eventType: string, _id: number) {
        delete this.subscriptions[_eventType][_id];
        if(Object.keys(this.subscriptions[_eventType]).length === 0) {
            delete this.subscriptions[_eventType]
        }
    }
    
    dispatch(_eventType: string, _arg: any = null) {
        if(!this.subscriptions[_eventType]) {
            return;
        }

        for (let id in this.subscriptions[_eventType]) {
            let subRef: SubscriptionReference = this.subscriptions[_eventType][id];
            subRef.callback(_arg);
            //TODO:: if once then destroy
        }
    }

    getIdGenerator() {
        let lastId = 0
        
        return function getNextUniqueId() {
            lastId += 1
            return lastId
        }
    }
}

let bus:EventBus = new EventBus();
export default bus;