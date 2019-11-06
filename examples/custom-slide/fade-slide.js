class FadeSlide extends Athena.slideTypes.step{
    constructor(_index, _el) {
        super(_index, _el);
        this.duration = _el.dataset.transitionDuration || 0.2;
        _el.style.opacity = '0';
        _el.style.transition = `opacity ${this.duration}s linear`;
    }

    animIn() {
        let SlideEvent = Athena.events.SlideEvent;

        this.setCurrent(true);
        this.bus.dispatch(SlideEvent.ANIMIN);
        
        this.el.style.opacity = '1';
        this.to = setTimeout(() => this.animInComplete(), this.duration * 1000);
    }

    animOut() {
        let SlideEvent = Athena.events.SlideEvent;

        return new Promise((resolve, reject) => {
            this.bus.dispatch(SlideEvent.ANIMOUT);

            this.el.style.opacity = '0';
            this.to = setTimeout(() => this.animOutComplete(resolve), this.duration * 1000);
        });
    }

    animInComplete() {
        let SlideEvent = Athena.events.SlideEvent;

        this.bus.dispatch(SlideEvent.RESOLVE);
    }

    animOutComplete(resolve) {
        let SlideEvent = Athena.events.SlideEvent;

        this.setCurrent(false);
        this.bus.dispatch(SlideEvent.DISSOLVE);
        this.el.style.transition = `opacity ${this.duration}s linear`;
        resolve();
    }
};
Athena.slideTypes.fade = FadeSlide;