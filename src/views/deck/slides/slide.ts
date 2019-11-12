import SlideEvent from 'src/events/SlideEvent';
import DeckModel from 'src/models/deckModel';
import {default as bus, EventBus} from 'src/events/EventBus';

export interface ISlide {
    id: string;
    index: number;
    el: HTMLElement;
    parent: HTMLElement;
    url: string;

    animIn: Function;
    animOut: Function;
    trigger: Function;

    setParent: Function;
    setCurrent: Function;
};

export default class SlideBasic implements ISlide{
    id: string;
    index: number;
    el: HTMLElement;
    url: string;
    parent: HTMLElement;
    bus: EventBus;
    
    constructor(_index: number, _el: HTMLElement) {
        this.index = _index;
        this.el = _el;
        this.id = _el.getAttribute('id') || `slide${_index}`;
        this.url = `slide/${this.id}`;
        this.bus = bus; //make accessible on slide for extensibility

        _el.classList.add('athena-slide');
    }

    animIn(jump: boolean = false) {
        this.setCurrent(true);
        bus.dispatch(SlideEvent.ANIMIN);
        this.animInComplete();
    }

    animOut(): Promise<any> {
        return new Promise((resolve) => {
            this.setCurrent(false);
            bus.dispatch(SlideEvent.ANIMOUT);
            this.animOutComplete()
            resolve();
        });
    }

    animInComplete() {
        this.setCurrent(true);
        bus.dispatch(SlideEvent.ANIMIN_COMPLETE);
    }

    animOutComplete() {
        this.setCurrent(false);
        bus.dispatch(SlideEvent.ANIMOUT_COMPLETE);
    }

    trigger() {
        bus.dispatch(SlideEvent.NEXT);
    }

    setParent(_parent: HTMLElement) {
        this.parent = _parent;
        _parent.appendChild(this.el);
    }

    setCurrent(_current: boolean) {
        if (_current) {
            DeckModel.currentSlide = this.index;
            this.el.classList.add('current');
        } else {
            this.el.classList.remove('current');
        }
    }

    isCurrent() {
        return DeckModel.currentSlide == this.index;
    }
}