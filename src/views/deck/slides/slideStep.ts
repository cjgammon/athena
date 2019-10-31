import Slide from './slide';
import SlideEvent from '../../../events/SlideEvent';

export default class SlideStep extends Slide{
    steps: Array<HTMLElement> = [];
    currentStep: number = 0;

    constructor(_index: number, _el: HTMLElement) {
        super(_index, _el);

        this.steps = <HTMLElement[]><any>_el.querySelectorAll('li');
    }

    animIn() {
        for (let i: number = 0; i < this.steps.length; i++) {
            let step: HTMLElement = this.steps[i];
            step.style.opacity = "0";
        }

        this.setCurrent(true);
        this.in = true;
        this.currentStep = 0;
    }

    trigger() {

        if (this.currentStep < this.steps.length) {
            this.steps[this.currentStep].style.opacity = "1";
            this.currentStep++;
        } else {
            this.el.dispatchEvent(new Event(SlideEvent.NEXT, {bubbles: true}));
        }
    }
}