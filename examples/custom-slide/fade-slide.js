let SlideEvent = Athena.events.SlideEvent;

class FadeSlide extends Athena.slideTypes.step{
    constructor(_index, _el) {
        super(_index, _el);
        this.duration = _el.dataset.transitionDuration || 0.2;
        _el.style.opacity = '0';
        _el.style.transition = `opacity ${this.duration}s linear`;
    }

    animIn(jump) {
        if (jump) {
            this.el.style.transition = 'none';
            this.el.style.opacity = '1';
            super.animIn(jump);
        } else {
            this.el.style.transition = `opacity ${this.duration}s linear`;
            this.el.style.opacity = '1';
            super.animIn(jump);
        }
    }

    animOut() {
        return new Promise((resolve) => {
            this.el.style.opacity = '0';
            this.bus.dispatch(SlideEvent.ANIMOUT);

            clearTimeout(this.to);
            this.to = setTimeout(() => {
                super.animOutComplete();
                resolve();
            }, this.duration * 1000);
        });
    }

};
Athena.slideTypes.fade = FadeSlide;