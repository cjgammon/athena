
import BasicSlide from '../views/deck/slides/slide';
import StepSlide from '../views/deck/slides/slideStep';
import IframeSlide from '../views/deck/slides/slideIframe';

interface ISlideTypes {
    [name: string]: any
};

let SlideTypes: ISlideTypes = {
    basic: BasicSlide,
    step: StepSlide,
    iframe: IframeSlide
};

export default SlideTypes;