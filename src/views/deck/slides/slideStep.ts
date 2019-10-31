import Slide from './slide';
import ConfigModel from 'src/models/configModel';

export default class SlideStep extends Slide{
    steps: Array<HTMLElement> = [];
    currentStep: number = 0;

    constructor(_index: number, _el: HTMLElement) {
        super(_index, _el);

        let steps: Array<HTMLElement> = [].slice.call(_el.querySelectorAll(ConfigModel.stepSelector));
        if (ConfigModel.stepListItems) {
            let lists: Array<HTMLElement> = [].slice.call(_el.querySelectorAll('li'));
            steps = steps.concat(lists);
        }
        this.steps = steps;
    }

    animIn() {
        for (let i: number = 0; i < this.steps.length; i++) {
            let step: HTMLElement = this.steps[i];
            step.style.opacity = "0";
        }

        this.currentStep = 0;
        super.animIn();
    }

    trigger() {

        if (this.currentStep < this.steps.length) {
            this.steps[this.currentStep].style.opacity = "1";
            this.currentStep++;
        } else {
            super.trigger();
        }
    }
}