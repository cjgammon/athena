
import BasicSlide from '../views/deck/slides/slide';
import StepSlide from '../views/deck/slides/slideStep';

interface SlideTypesMap {
    [name: string]: any
};

let SlideTypes: SlideTypesMap = {
    basic: BasicSlide,
    step: StepSlide
};

export default SlideTypes;