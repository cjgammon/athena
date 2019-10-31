
// @ts-ignore
import AthenaCSS from "!!raw-loader!src/athena.css";

import SlideBasic from './slides/slide';
import {ISlide} from './slides/slide';

import SlideEvent from 'src/events/SlideEvent';
import SlideTypes from '../../models/slideTypes';
import DeckModel from '../../models/deckModel';

export default class Deck{
    rootElement: HTMLElement;
	slides: Array<SlideBasic> = [];
    
    constructor(selector: string = '.athena-slide') {
		this.addStyles();

		this.createRoot();
		this.createSlides(selector);

		this.registerEvents();
		this.resetAllSlides();

		this.getSlideFromHash();
    }

	gotoSlideByIndex(_n: number) {
		let slide = this.slides[_n];
		let slideId = slide.id;
		this.gotoSlideById(slideId);
	}

	gotoSlideById(_id: string) {
		window.location.hash = `slide/${_id}`;
	}

	getSlideById(_id: string) {
		for (let i:number = 0; i < this.slides.length; i++) {
			if (this.slides[i].id == _id) {
				return this.slides[i];
			}
		}
	}

	next() {
		let nextSlide = DeckModel.currentSlide < this.slides.length - 1 ? DeckModel.currentSlide + 1 : this.slides.length - 1;
		this.gotoSlideByIndex(nextSlide);
	}

	previous() {
		let nextSlide = DeckModel.currentSlide > 0 ? DeckModel.currentSlide - 1 : 0;
		this.gotoSlideByIndex(nextSlide);
	}

	trigger() {
		this.slides[DeckModel.currentSlide].trigger();
	}

	/**
	 * sets current slide
	 * @param n number or string - index or id of slide to set
	 */
	private setSlide(_n: any) {

		let slide: SlideBasic;
		if (!isNaN(_n)) {
			slide = this.slides[_n];
		} else {
			slide = this.getSlideById(_n);
		}

		let prevSlide: SlideBasic = this.slides[DeckModel.currentSlide];
		if (prevSlide.in) {
			prevSlide.animOut()
			.then(() => slide.animIn());
		} else {
			slide.animIn();
		}

	}

	private getSlideFromHash() {
		if (window.location.hash) {
			let slide:string = window.location.hash.replace('#slide/', '');
			let n: number = parseInt(slide);
			if (!isNaN(n)) {
				this.setSlide(n);
			} else {
				this.setSlide(slide);
			}
		} else {
			this.setSlide(DeckModel.currentSlide);
		}
	}

	private createRoot() {
		this.rootElement = document.createElement('div');
		this.rootElement.id = 'athena-root';
		document.body.appendChild(this.rootElement);
	}

	private createSlides(_selector: string) {
		let slideEls: Array<HTMLElement> = <HTMLElement[]><any>document.querySelectorAll(_selector);
		for (let i: number = 0; i < slideEls.length; i++) {

			let slideEl: HTMLElement = slideEls[i];
			slideEl.parentNode.removeChild(slideEl);

			let SlideClass: any = this.findSlideType(slideEl);
			let slide: SlideBasic = new SlideClass(i, slideEl);
			slide.setParent(this.rootElement);
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
		this.rootElement.addEventListener(SlideEvent.NEXT, () => this.next());
		this.rootElement.addEventListener(SlideEvent.PREV, () => this.previous());
		this.rootElement.addEventListener(SlideEvent.TRIGGER, () => this.trigger());


		window.addEventListener('hashchange', (e) => this.hashChange(e));
		window.addEventListener('keydown', (e) => this.keyDown(e));
		window.addEventListener('keyup', (e) => this.keyUp(e));
	}

	//EVENT HANDLERS

	private hashChange(e:HashChangeEvent) {
		let hash = window.location.hash;
		this.getSlideFromHash();
	}

	private keyDown(e:KeyboardEvent) {
		switch(e.code) {
			case 'ArrowRight':
				this.rootElement.dispatchEvent(new Event(SlideEvent.NEXT));
				break;
			case 'ArrowLeft':
				this.rootElement.dispatchEvent(new Event(SlideEvent.PREV));
				break;
			case 'Space':
				this.rootElement.dispatchEvent(new Event(SlideEvent.TRIGGER));
				break;
		}
	}

	private keyUp(e:KeyboardEvent) {

	}

	private findSlideType(el: HTMLElement) {
		if (el.dataset['slide-type']) {
			let slideTypeName: string = el.dataset['slide-type'];
			if (SlideTypes.hasOwnProperty(slideTypeName)) {
				return SlideTypes[slideTypeName];
			}
		}

		let lists: NodeList = el.querySelectorAll('li');
		if (lists.length > 0) {
			console.log('yhes');
			return SlideTypes['step'];
		}

		return SlideTypes['basic'];
	}
	
	private resetAllSlides() {
		for (let i:number = 0; i < this.slides.length; i++) {
			this.slides[i].setCurrent(false);
		}
	}
	
}