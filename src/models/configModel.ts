interface IConfigModel {
    [name: string]: any
};

let ConfigModel: IConfigModel = {
    slideSelector: '.slide',
    stepSelector: '.step',
    stepListItems: true
};

export default ConfigModel;