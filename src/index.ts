
// @ts-ignore
import AthenaCSS from "!!raw-loader!src/athena.css";

export class Athena {
	name: string = "Athena";
	version: number = 0.1;
	rootElement: HTMLElement;
	slides: Array<Element> = [];
	current: number = 0;

	private _consoleStyle: Array<string> = [
		'background: #44918F',
		'color: white',
		'font-weight: bold',
		'padding: 0.2em'
	];

	constructor() {
		let message: string = `%c//${this.name} v${this.version}\\\\`;
		let consoleStyle: string = this._consoleStyle.join('; ');
		console.log(message, consoleStyle);

		this.registerEvents();
	}

	generate(selector: string = '.athena-slide') {
		this.addStyles();

		this.createRoot();
		this.createSlides(selector);
	}

	private registerEvents() {
		window.addEventListener('hashchange', (e) => this.hashChange(e));
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

	hashChange(e) {
		console.log('hash change', e);
	}
}

/* Add to global window object */
declare global {
  interface Window {
    Athena: any;
  }
}

if (!window.Athena) {
	window.Athena = new Athena();
} else {
	console.warn('Athena already defined');
} 
