import DeckModel from 'src/models/deckModel';
import SlideBasic from 'src/views/deck/slides/slide';

interface IHudItem {
    number: number,
    name: string
};

export default class Hud{
    container: HTMLElement;
    listContainer: HTMLElement;
    list: Array<IHudItem> = [];
    visible: boolean = false;
    keyDownHandler: any;
    keyUpHandler: any;

    constructor(parent: HTMLElement) {
        this.container = document.createElement('div');
        this.container.className = 'athena-hud';
        parent.appendChild(this.container);

        window.addEventListener('keydown', (e) => this.checkToggle(e));
    }

    show() {
        this.container.classList.add('visible');
        this.registerEvents();
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
        this.keyDownHandler = (e: KeyboardEvent) => this.keyDown(e);
        this.keyUpHandler = (e: KeyboardEvent) => this.keyUp(e);
		window.addEventListener('keydown', this.keyDownHandler);
		window.addEventListener('keyup', this.keyUpHandler);
    }

    private removeEvents() {
		window.removeEventListener('keydown', this.keyDownHandler);
		window.removeEventListener('keyup', this.keyUpHandler);
    }

    private resetList() {
        this.list = [];
        for (let i = 0; i < DeckModel.slides.length; i++){
            let slide: SlideBasic = DeckModel.slides[i];
            this.list.push({number: i, name: slide.id});
        }
    }

    private populateList() {
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

    private checkToggle(e: KeyboardEvent) {
        switch(e.code) {
            case 'Escape':
                this.toggle();
                break;
        }
    }

    private keyDown(e: KeyboardEvent) {
        console.log('keydown..', e.code);
    }

    private keyUp(e: KeyboardEvent) {

    }
}