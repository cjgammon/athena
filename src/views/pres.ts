
// @ts-ignore
import AthenaCSS from "!!raw-loader!src/athena.css";


export default class Pres{
    rootElement: HTMLElement;
	slides: Array<Element> = [];
    currentSlide: number = 0;
    
    constructor(selector: string = '.athena-slide') {
		this.addStyles();

		this.createRoot();
		this.createSlides(selector);

		this.registerEvents();

		this.getSlideFromHash();
    }

    //TODO:: abstract set slide by number id vs setslide by string id
	gotoSlide(n: number) {
		window.location.hash = `slide/${n}`;
	}

	private setSlide(n: number) {
		let currentSlides = document.querySelectorAll('.current');
		for (let i:number = 0; i < currentSlides.length; i++) {
			currentSlides[i].classList.remove('current');
		}
		this.slides[n].classList.add('current');
		this.currentSlide = n;
	}

	private getSlideFromHash() {
		if (window.location.hash) {
			let slide:string = window.location.hash.replace('#slide/', '');
			let n: number = parseInt(slide);
			if (!isNaN(n)) {
				this.setSlide(n);
			} else {
				//TODO:: set slide by stringId
			}
		} else {
			this.setSlide(this.currentSlide);
		}
	}

	private createRoot() {
		this.rootElement = document.createElement('div');
		this.rootElement.id = 'athena-root';
		document.body.appendChild(this.rootElement);
	}

	private createSlides(selector: string) {
		let slides = document.querySelectorAll(selector);
		for (let i: number = 0; i < slides.length; i++) {
			let slide = slides[i];

			slide.parentNode.removeChild(slide);
			slide.classList.add('athena-slide');
			this.rootElement.appendChild(slide);

			this.slides.push(slide);
		}
	}

	private addStyles() {
		let style = document.createElement('style');
		style.type = 'text/css';
		style.innerHTML = AthenaCSS;
		document.getElementsByTagName('head')[0].appendChild(style);
	}

	private registerEvents() {
		window.addEventListener('hashchange', (e) => this.hashChange(e));
		window.addEventListener('keydown', (e) => this.keyDown(e));
		window.addEventListener('keyup', (e) => this.keyUp(e));
	}

	//event handlers
	private hashChange(e:HashChangeEvent) {
		let hash = window.location.hash;
		this.getSlideFromHash();
	}

	private keyDown(e:KeyboardEvent) {

		let nextSlide: number;

		switch(e.code) {
			case 'ArrowRight':
				nextSlide = this.currentSlide < this.slides.length - 1 ? this.currentSlide + 1 : this.slides.length - 1;
				this.gotoSlide(nextSlide);
				break;
			case 'ArrowLeft':
				nextSlide = this.currentSlide > 0 ? this.currentSlide - 1 : 0;
				this.gotoSlide(nextSlide);
				break;
		}
	}

	private keyUp(e:KeyboardEvent) {

	}
}