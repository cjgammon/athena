import DeckModel from 'src/models/deckModel';
import SlideBasic from 'src/views/deck/slides/slide';

import {default as bus, EventBus} from 'src/events/EventBus';
import UserEvent from 'src/events/UserEvent';

interface IHudItem {
    number: number,
    name: string
};

export default class Hud{
    container: HTMLElement;
    listContainer: HTMLElement;
    list: Array<IHudItem> = [];
    visible: boolean = false;
    keyDownEvent: any;
    keyUpEvent: any;
    input: HTMLElement;
    selected: number;

    constructor(parent: HTMLElement) {
        this.container = document.createElement('div');
        this.container.className = 'athena-hud';
        parent.appendChild(this.container);

        bus.subscribe(UserEvent.KEYDOWN, (e: KeyboardEvent) => this.checkToggle(e));
    }

    show() {
        this.container.classList.add('visible');
        this.registerEvents();
        this.addSearchInput();
        this.resetList();
        this.populateList();
    }

    hide() {
        this.container.classList.remove('visible');
        this.container.innerHTML = '';
        this.removeEvents();
    }

    toggle() {
        this.visible = !this.visible;
        if (this.visible) {
            this.show();
        } else {
            this.hide();
        }
    }

    private registerEvents() {
        this.keyDownEvent = bus.subscribe(UserEvent.KEYDOWN, (e: KeyboardEvent) => this.keyDown(e));
        this.keyUpEvent = bus.subscribe(UserEvent.KEYUP, (e: KeyboardEvent) => this.keyUp(e));
    }

    private removeEvents() {
        this.keyDownEvent.unsubscribe();
        this.keyUpEvent.unsubscribe();
    }

    private resetList() {
        this.list = [];
        for (let i = 0; i < DeckModel.slides.length; i++){
            let slide: SlideBasic = DeckModel.slides[i];
            let name = slide.id.toUpperCase();
            this.list.push({number: i, name});
        }
    }

    private populateList() {

        if (this.listContainer && this.listContainer.parentNode){
            this.listContainer.parentNode.removeChild(this.listContainer);
        }

        this.listContainer = document.createElement('div');
        this.listContainer.className = 'athena-hud-list';

        for (let i:number = 0; i < this.list.length; i ++ ){
            let slide: IHudItem = this.list[i];
            let item: HTMLElement = document.createElement('div');
            item.className = 'athena-hud-list-item';
            item.innerText = `${slide.number}: ${slide.name}`;
            item.dataset.index = slide.number.toString();
            this.listContainer.appendChild(item);
        }

        this.container.appendChild(this.listContainer);
    }

    private addSearchInput() {
        this.input = document.createElement('div');
        this.input.className = 'athena-hud-input';
        this.input.classList.add('in');
        this.container.appendChild(this.input);
    }

    private typing(_char: string) {
        this.input.innerText = this.input.innerHTML + _char;

        this.search(this.input.innerText);
    }

    private search(term: string) {
        this.list = [];

        let num: number = parseInt(term);
        if (isNaN(num)) {
            this.searchString(term);
        } else {
            this.searchNumber(num);
        }

        this.populateList();
    }

    private searchNumber(num: number) {
        //TODO;;
    }

    private searchString(term: string) {
        
        let slides = DeckModel.slides;
        let j: number = 0;

        for (let i = 0; i < slides.length; i++){
            let slide: SlideBasic = DeckModel.slides[i];
            let name = slide.id.toUpperCase();

            if (name.search(term) === 0) {
                this.list.push({number: i, name});
            } else {
                j++;
            }
        }
    }

    private subtractCharacter() {
        let orig: string = this.input.innerText;
        let newString: string = orig.substr(0, orig.length - 1);
        
        this.input.innerText = newString;

        this.search(this.input.innerText);
    }

    private checkToggle(e: KeyboardEvent) {
        switch(e.code) {
            case 'Escape':
                this.toggle();
                break;
        }
    }

    private keyDown(e: KeyboardEvent) {
        console.log('keydown..', e.code, e.keyCode);

        switch(e.code) {
            case 'Backspace':
                e.preventDefault();
                this.subtractCharacter();
                break;
            case 'Enter':

                break;
            case 'ArrowUp':

                break;
            case 'ArrowDown':

                break;
        }

        if ((e.keyCode > 47 && e.keyCode < 58) ||
            (e.keyCode > 64 && e.keyCode < 91)) 
        {
            this.typing(String.fromCharCode(e.keyCode));
        }

    }

    private keyUp(e: KeyboardEvent) {

    }
}