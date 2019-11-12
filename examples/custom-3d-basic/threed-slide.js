
class ThreeD extends Athena.slideTypes.basic{

    constructor(_index, _el) {
        super(_index, _el);
        this.duration = _el.dataset.transitionDuration || 0.5;
        this.pos = _el.dataset.pos;

        _el.style.opacity = '0';
        _el.style.transition = `opacity ${this.duration}s linear`;

        _el.style.transform = `translate3d(0, 0, -${this.pos}px)`;
        _el.style.transformOrigin = `center center`;
        _el.style.top = '-50vh';
        _el.style.left = '-50vw';
        _el.style.width = '100vw';
        _el.style.height = '100vh';
    }
    
    animIn(force) {
        let SlideEvent = Athena.events.SlideEvent;

        if (force) {
            this.el.style.transition = `none`;
        } else {
            this.el.style.transition = `opacity ${this.duration}s linear`;
        }

        this.el.style.opacity = '1';
        this.setCurrent(true);
        this.bus.dispatch(SlideEvent.ANIMIN, {force});

        clearTimeout(this.to);
        this.to = setTimeout(() => {
            this.bus.dispatch(SlideEvent.RESOLVE);
        }, this.duration * 1000);
    }

    animOut() {
        let SlideEvent = Athena.events.SlideEvent;

        return new Promise((resolve, reject) => {
            this.el.style.opacity = '0';
            this.bus.dispatch(SlideEvent.ANIMOUT);

            this.setCurrent(false);
            this.bus.dispatch(SlideEvent.DISSOLVE);
            resolve();
        });
        
    }
    
};

Athena.slideTypes.threed = ThreeD;