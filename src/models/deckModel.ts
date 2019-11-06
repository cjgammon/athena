import SlideBasic from 'src/views/deck/slides/slide';

export interface IDeckModel {
    [name: string]: any,
    slides: Array<SlideBasic>
};

let DeckModel: IDeckModel = {
    currentSlide: 0,
    slides: []
};

export default DeckModel;