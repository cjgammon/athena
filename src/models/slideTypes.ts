
import BasicSlide from '../views/deck/slides/slide';
import StepSlide from '../views/deck/slides/slideStep';

interface ISlideTypes {
    [name: string]: any
};

let SlideTypes: ISlideTypes = {
    basic: BasicSlide,
    step: StepSlide
};

export default SlideTypes;