import DeckModel from 'src/models/deckModel';
import SlideBasic from 'src/views/deck/slides/slide';

import {default as bus, EventBus} from 'src/events/EventBus';
import UserEvent from 'src/events/UserEvent';
import SlideEvent from 'src/events/SlideEvent';

interface IHudItem {
    listIndex: number,
    slideIndex: number,
    slideId: string,
    slideEl: HTMLElement
};

export default class Hud{
    container: HTMLElement;
    listContainer: HTMLElement;
    list: Array<IHudItem> = [];
    visible: boolean = false;
    keyDownEvent: any;
    keyUpEvent: any;
    input: HTMLElement;
    selected: number = 0;
    shift: boolean = false;

    constructor(parent: HTMLElement) {
        this.container = document.createElement('div');
        this.container.className = 'athena-hud';
        parent.appendChild(this.container);
        bus.subscribe(UserEvent.KEYDOWN, (e: KeyboardEvent) => this.checkToggle(e));
    }

    show() {
        this.container.classList.add('visible');

        this.selected = DeckModel.currentSlide;
        this.registerEvents();
        this.addSearchInput();
        this.resetList();
        this.populateList();
        this.updateSelected();
        this.visible = true;
    }

    hide() {
        this.container.classList.remove('visible');
        this.container.innerHTML = '';
        this.removeEvents();
        this.visible = false;
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
            this.list.push({
                listIndex: i, 
                slideId: slide.id, 
                slideEl: null, 
                slideIndex: slide.index
            });
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
            item.innerText = `${slide.listIndex}: ${slide.slideId}`;
            item.dataset.index = slide.slideId.toString();
            this.listContainer.appendChild(item);
            this.list[i].slideEl = item;
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

        this.searchList(term);

        this.populateList();
        this.selected = 0;
    }

    private searchList(term: string) {
        let slides = DeckModel.slides;

        for (let i = 0; i < slides.length; i++){
            let slide: SlideBasic = DeckModel.slides[i];
            let slideSearchProp: string = slide.id;

            if (!isNaN(parseInt(term))) { // handle search by index
                slideSearchProp = slide.index.toString();
            }

            if (slideSearchProp.search(term) === 0) {
                this.list.push({
                    listIndex: i, 
                    slideId: slide.id, 
                    slideIndex: slide.index, 
                    slideEl: null
                });
            }
        }
    }

    private subtractCharacter() {
        let orig: string = this.input.innerText;
        let newString: string = orig.substr(0, orig.length - 1);
        
        this.input.innerText = newString;

        this.search(this.input.innerText);
    }

    private updateSelected() {

        for (let i: number = 0; i < this.list.length; i++) {
            this.list[i].slideEl.classList.remove('selected');
        }

        let selected:IHudItem = this.list[this.selected];
        let el:HTMLElement = selected.slideEl;
        el.classList.add('selected');
    }

    private checkToggle(e: KeyboardEvent) {
        switch(e.code) {
            case 'Escape':
                this.toggle();
                break;
        }
    }

    private keyDown(e: KeyboardEvent) {

        if (e.code.toLowerCase().indexOf('shift') > -1){
            this.shift = true;
        }

        switch(e.code) {
            case 'Backspace':
                e.preventDefault();
                this.subtractCharacter();
                break;
            case 'Enter':
                bus.dispatch(SlideEvent.GOTO, this.list[this.selected].slideId);
                this.toggle();
                break;
            case 'ArrowUp':
                this.selected = this.selected > 0 ? this.selected - 1 : this.selected;
                break;
            case 'ArrowDown':
                this.selected = this.selected < this.list.length - 1 ? this.selected + 1 : this.selected;
                break;
        }

        if ((e.keyCode > 47 && e.keyCode < 58) ||
            (e.keyCode > 64 && e.keyCode < 91)) 
        {
            let char: string = String.fromCharCode(e.keyCode);
            if (!this.shift) {
                char = char.toLowerCase();
            }
            this.typing(char);
        }

        if (this.list.length > 0){
            this.updateSelected();
        }

    }

    private keyUp(e: KeyboardEvent) {
        if (e.code.toLowerCase().indexOf('shift') > -1){
            this.shift = false;
        }
    }
}