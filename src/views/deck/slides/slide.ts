import SlideEvent from 'src/events/SlideEvent';
import DeckModel from 'src/models/deckModel';
import {default as bus, EventBus} from 'src/events/EventBus';

export interface ISlide {
    id: string;
    index: number;
    el: HTMLElement;
    parent: HTMLElement;
    url: string;
    in: boolean;

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
    in: boolean;
    
    constructor(_index: number, _el: HTMLElement) {
        this.index = _index;
        this.el = _el;
        this.id = _el.getAttribute('id') || `slide${_index}`;
        this.url = `slide/${this.id}`;
        this.in = false;

        _el.classList.add('athena-slide');
    }

    animIn() {
        this.setCurrent(true);
        bus.dispatch(SlideEvent.ANIMIN);
        
        bus.dispatch(SlideEvent.RESOLVE);
        this.in = true;
    }

    animOut(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.setCurrent(false);
            bus.dispatch(SlideEvent.ANIMOUT);

            bus.dispatch(SlideEvent.DISSOLVE);
            this.in = false;
            resolve();
        });
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
}