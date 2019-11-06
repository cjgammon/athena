class Background {

    constructor(selector) {

        this.rotation = 45;

        this.canvas = document.querySelector(selector);
        this.ctx = this.canvas.getContext('2d');

        let eventBus = Athena.eventBus;
        let SlideEvent = Athena.events.SlideEvent;

        this.colorA = {r: 0, g: 0, b: 0, a: 0};
        this.colorB = {r: 0, g: 0, b: 0, a: 0};

        eventBus.subscribe(SlideEvent.ANIMIN, () => this.animIn());

        setInterval(() => this.animIn(), 100);
    }

    animIn() {
        let transitionDuration = 1;
        let slideInfo = Athena.slides;
        let slides = slideInfo.slides;
        let current = slideInfo.currentSlide;

        let currentSlide = slides[current];
        let el = currentSlide.el;

        if (!el.dataset.gradient) {
            return;
        }

        let colors = el.dataset.gradient.split(':');

        let colorA = this.rgbStringToObject(colors[0]);
        let colorB = this.rgbStringToObject(colors[1]);

        this.draw();

        let tl = new TimelineLite({
            onUpdate: () => this.draw()
        });

        tl.to(this.colorA, transitionDuration, {
            r: colorA.r, g: colorA.g, b: colorA.b, a: colorA.a
        }, 0);
        tl.to(this.colorB, transitionDuration, {
            r: colorB.r, g: colorB.g, b: colorB.b, a: colorB.a
        }, 0);
    }
    
    draw() {
        let w = this.canvas.width;
        let h = this.canvas.height;
        this.ctx.clearRect(0, 0, w, h);

        let grd = this.ctx.createLinearGradient(0, -h/2, 0, h * 2);
        grd.addColorStop(0, this.rgbObjectToString(this.colorA));
        grd.addColorStop(1, this.rgbObjectToString(this.colorB));
        this.ctx.fillStyle = grd;

        this.ctx.save();

        this.ctx.translate(w / 2, h / 2);
        this.ctx.rotate(this.rotation * Math.PI / 180);
        this.ctx.translate(-w / 2, -h / 2);

        this.ctx.fillRect(-w / 1.5, -h / 1.5, w * 3, h * 3);

        this.ctx.restore();
    }

    rgbStringToObject(str) {
        let res = str.match(/([0-9]+)/g);
        return {r: res[0], g: res[1], b: res[2], a: res[3]};
    }

    rgbObjectToString(obj) {
        return `rgba(${obj.r}, ${obj.g}, ${obj.b}, ${obj.a})`;
    }

}

new Background('#bg');