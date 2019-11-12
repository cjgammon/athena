import SlideBasic from 'src/views/deck/slides/slide';

export interface IDeckModel {
    [name: string]: any,
    slides: Array<SlideBasic>
};

let DeckModel: IDeckModel = {
    currentSlide: -1,
    slides: []
};

export default DeckModel;