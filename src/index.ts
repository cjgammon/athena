
import Pres from 'src/views/pres';

export class Athena {
	name: string = "Athena";
	version: number = 0.1;
	pres: Pres;

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
	}

	generate(selector: string = '.athena-slide') {
		this.pres = new Pres(selector);
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
