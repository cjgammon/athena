
import Deck from 'src/views/deck/deck';
import SlideTypes from 'src/models/slideTypes';
import ConfigModel from 'src/models/configModel';
import Hud from './views/hud/hud';
import {default as bus, EventBus} from 'src/events/EventBus';

export class Athena {
	name: string = "Athena";
	version: number = 0.1;
	deck: Deck;
	hud: Hud;
	eventBus: EventBus = bus;
	slideTypes: any = SlideTypes; //for adding new types

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

	generate(config: any) {
		for (let i in config) {
			ConfigModel[i] = config[i];
		}

		this.deck = new Deck();
		this.hud = new Hud(this.deck.rootElement);
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
