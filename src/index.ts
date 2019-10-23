
export class Athena {
	name: string = "Athena";
	version: number = 0.1;
	consoleStyle: Array<string> = [
		'background: #00935D',
		'color: white',
		'font-weight: bold',
		'padding: 0.2em'
	];

	constructor() {
		console.log(`%c//${this.name} v${this.version}\\\\`, this.consoleStyle.join('; '));
	}
}

declare global {
  interface Window {
    Athena: any;
  }
}

window.Athena = new Athena();