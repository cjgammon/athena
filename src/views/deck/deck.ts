
// @ts-ignore
import AthenaCSS from "!!raw-loader!src/athena.css";

import SlideBasic from './slides/slide';

import SlideEvent from 'src/events/SlideEvent';
import SlideTypes from 'src/models/slideTypes';
import DeckModel from 'src/models/deckModel';
import ConfigModel from 'src/models/configModel';

export default class Deck{
    rootElement: HTMLElement;
    
    constructor() {
		this.addStyles();

		this.createRoot();
		this.createSlides();

		this.registerEvents();
		this.resetAllSlides();

		this.getSlideFromHash();
    }

	gotoSlideByIndex(_n: number) {
		let slide = DeckModel.slides[_n];
		let slideId = slide.id;
		this.gotoSlideById(slideId);
	}

	gotoSlideById(_id: string) {
		window.location.hash = `slide/${_id}`;
	}

	getSlideById(_id: string) {
		for (let i:number = 0; i < DeckModel.slides.length; i++) {
			if (DeckModel.slides[i].id == _id) {
				return DeckModel.slides[i];
			}
		}
	}

	next() {
		let nextSlide = DeckModel.currentSlide < DeckModel.slides.length - 1 ? DeckModel.currentSlide + 1 : DeckModel.slides.length - 1;
		this.gotoSlideByIndex(nextSlide);
	}

	previous() {
		let nextSlide = DeckModel.currentSlide > 0 ? DeckModel.currentSlide - 1 : 0;
		this.gotoSlideByIndex(nextSlide);
	}

	trigger() {
		DeckModel.slides[DeckModel.currentSlide].trigger();
	}

	/**
	 * sets current slide
	 * @param n number or string - index or id of slide to set
	 */
	private setSlide(_n: any) {

		if (DeckModel.slides.length == 0) {
			return;
		}

		let slide: SlideBasic;
		if (!isNaN(_n)) {
			slide = DeckModel.slides[_n];
		} else {
			slide = this.getSlideById(_n);
		}

		let prevSlide: SlideBasic = DeckModel.slides[DeckModel.currentSlide];
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

	private createSlides() {
		let slideEls: Array<HTMLElement> = [].slice.call(document.querySelectorAll(ConfigModel.slideSelector));
		for (let i: number = 0; i < slideEls.length; i++) {

			let slideEl: HTMLElement = slideEls[i];
			slideEl.parentNode.removeChild(slideEl);

			let SlideClass: typeof SlideBasic = this.findSlideType(slideEl);
			let slide: SlideBasic = new SlideClass(i, slideEl);
			slide.setParent(this.rootElement);
			DeckModel.slides.push(slide);
		}

		if (DeckModel.slides.length == 0) {
			console.warn('no slides with selector: ', ConfigModel.slideSelector);
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

	private findSlideType(el: HTMLElement): typeof SlideBasic {

		//custom slide
		if (el.dataset['slideType']) {
			let slideTypeName: string = el.dataset['slideType'];
			if (SlideTypes.hasOwnProperty(slideTypeName)) {
				return SlideTypes[slideTypeName];
			}
		}

		//step reveal
		let steps: Array<HTMLElement> = [].slice.call(el.querySelectorAll(ConfigModel.stepSelector));
		if (ConfigModel.stepListItems) {
			let lists: Array<HTMLElement> = [].slice.call(el.querySelectorAll('li'));
			steps = steps.concat(lists);
		}
		if (steps.length > 0) {
			return SlideTypes['step'];
		}

		//basic slide
		return SlideTypes['basic'];
	}
	
	private resetAllSlides() {
		for (let i:number = 0; i < DeckModel.slides.length; i++) {
			DeckModel.slides[i].setCurrent(false);
		}
	}
	
}