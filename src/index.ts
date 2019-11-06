
import SlideTypes from 'src/models/slideTypes';
import ConfigModel from 'src/models/configModel';
import Hud from './views/hud/hud';
import Deck from 'src/views/deck/deck';

import {default as deckModel, IDeckModel} from 'src/models/deckModel';

import {default as bus, EventBus} from 'src/events/EventBus';
import UserEvent from 'src/events/UserEvent';
import SlideEvent from 'src/events/SlideEvent';

export class Athena {
	name: string = "Athena";
	version: number = 0.1;
	hud: Hud;
	deck: Deck;
	slides: IDeckModel = deckModel;
	eventBus: EventBus = bus;
	slideTypes: any = SlideTypes; 	//exposed for adding new types
	events: object = { 			//exposed event types
		UserEvent,
		SlideEvent
	};

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

		window.addEventListener('keydown', (e) => bus.dispatch(UserEvent.KEYDOWN, e));
		window.addEventListener('keyup', (e) => bus.dispatch(UserEvent.KEYUP, e));
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
