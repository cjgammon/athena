import Slide from './slide';

export default class SlideIframe extends Slide{

    iframe: HTMLIFrameElement;
    clickArea: HTMLElement;
    boundHandler: any;

    constructor(_index: number, _el: HTMLElement) {
        super(_index, _el);
    }

    animIn() {
        
        this.iframe = this.el.querySelector('iframe');
        if (!this.iframe) {
            this.iframe = document.createElement('iframe');
            this.iframe.classList.add('athena-iframe');
            this.el.appendChild(this.iframe);
        }

        if (this.el.dataset.width) { // automatically interactive if custom w/h
            this.iframe.style.width = this.el.dataset.width;
            this.iframe.style.height = this.el.dataset.height;
        } else if (this.el.dataset.interactive) {
            this.iframe.style.width = '95vw';
            this.iframe.style.height = '95vh';
        } else {
            this.iframe.style.width = '100vw';
            this.iframe.style.height = '100vh';
        }

        if (this.el.dataset.width || this.el.dataset.interactive) {
            this.addClickArea();
        } else {
            this.iframe.style.pointerEvents = 'none';
        }

        this.iframe.style.opacity = '0';

        this.iframe.addEventListener('load', () => this.loaded());
        this.iframe.setAttribute('src', this.el.dataset['src']);

        super.animIn();
    }

    animOut(): Promise<any> {
        if (this.clickArea) {
            this.el.removeChild(this.clickArea);
        }
        this.el.removeChild(this.iframe);
        return super.animOut();
    }

    private addClickArea() {
        this.clickArea = document.createElement('div');
        this.clickArea.classList.add('athena-iframe-clickarea');
        this.clickArea.addEventListener('click', (e) => this.handle_clickArea_CLICK(e))
        this.el.appendChild(this.clickArea);
    }

    private loaded() {
        this.iframe.style.opacity = '1';
    }

    private handle_clickArea_CLICK(e: MouseEvent) {
        e.stopPropagation();

        this.clickArea.classList.add('focus');
        this.iframe.classList.add('focus');
        this.iframe.focus();

        this.boundHandler = (e: MouseEvent) => this.handle_el_CLICK(e);
        this.el.addEventListener('click', this.boundHandler);
    }

    private handle_el_CLICK(e: MouseEvent) {
        e.stopPropagation();

        this.clickArea.classList.remove('focus');
        this.iframe.classList.remove('focus');

        this.el.removeEventListener('click', this.boundHandler);
    }
}