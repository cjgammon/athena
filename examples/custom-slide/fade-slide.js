class FadeSlide extends Athena.slideTypes.step{
    constructor(_index, _el) {
        super(_index, _el);
        this.duration = _el.dataset.transitionDuration || 0.2;
        _el.style.opacity = '0';
        _el.style.transition = `opacity ${this.duration}s linear`;
    }

    animIn() {
        super.animIn();
        this.el.style.opacity = '1';
    }

    animOut() {
        let SlideEvent = Athena.events.SlideEvent;

        return new Promise((resolve, reject) => {
            console.log('animout ', this.id);
            this.el.style.opacity = '0';
            this.bus.dispatch(SlideEvent.ANIMOUT);

            clearTimeout(this.to);
            this.to = setTimeout(() => {
                console.log('animout complete', this.id);
                this.setCurrent(false);
                this.bus.dispatch(SlideEvent.DISSOLVE);
                resolve();
            }, this.duration * 1000);
        });
    }
};
Athena.slideTypes.fade = FadeSlide;