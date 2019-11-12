
class Background{
    constructor(selector) {
        this.perspective = 35;
        this.canvas = document.querySelector(selector);
        
        this.createThreeScene();

        setTimeout(() => this.createDomScene(), 100);
    }

    createDomScene() {
        let hud = document.querySelector('.athena-hud'); //move outside camera
        document.body.appendChild(hud);

        this.domCamera = document.querySelector('#athena-root');
        this.domCamera.style.position = 'absolute';
        this.domCamera.style.transform = 'translate3d(0, 0, 0)';
        this.domCamera.style.perspectiveOrigin = 'center center';
        this.domCamera.style.left = '50%';
        this.domCamera.style.top = '50%';
        this.domCamera.style.transformStyle = 'preserve-3d';

        document.body.style.perspective = `${this.perspective}px`;//'754.866px';
        document.body.style.width = '100vw';
        document.body.style.height = '100vh';
        document.body.style.overflow = 'hidden';
    }

    createThreeScene() {
        this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas });
        this.renderer.setPixelRatio( window.devicePixelRatio );
        this.renderer.setSize( window.innerWidth, window.innerHeight );

        this.cameraRig = new THREE.Object3D();

        this.camera = new THREE.PerspectiveCamera( this.perspective, window.innerWidth / window.innerHeight, 0.01, 10000 );
        this.cameraRig.add( this.camera );

        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color( 0x333333 );
        this.scene.fog = new THREE.Fog( 0x333333, 1000, 2000 );

        this.scene.add( this.cameraRig );

        var ambient = new THREE.AmbientLight( 0x333333 );
        this.scene.add( ambient );

        var pointlight = new THREE.PointLight( 0xffffff, 0.5 );
        pointlight.position.set( 0, -9, 0 );
        this.cameraRig.add( pointlight );

        let geometry = new THREE.PlaneGeometry( 1000, 10000, 100, 1000 );
        for (let i = 0; i < geometry.vertices.length; i++) {
            geometry.vertices[i].z -= Math.random() * 10;
        }
        geometry.computeFlatVertexNormals();

        let material = new THREE.MeshLambertMaterial({ color: 0xefefef, flatShading: true });

        this.mesh = new THREE.Mesh(geometry, material)
        this.mesh.position.set(0, -10, -5000);
        this.mesh.rotation.x = -90 * Math.PI / 180;
        this.scene.add(this.mesh);

        let eventBus = Athena.eventBus;
        let SlideEvent = Athena.events.SlideEvent;
        eventBus.subscribe(SlideEvent.ANIMIN, () => this.animIn());

        window.addEventListener('resize', () => this.resize());

        this.render();
    }

    resize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize( window.innerWidth, window.innerHeight );

    }

    render() {
        if (this.domCamera){
            let _z = -parseFloat(this.cameraRig.position.z);
            this.domCamera.style.transform = `translate3d(0px, 0px, ${_z}px)`;
        }
        this.renderer.render(this.scene, this.camera);
    }

    animIn() {
        let transitionDuration = 1;
        let slideInfo = Athena.slides;
        let slides = slideInfo.slides;
        let current = slideInfo.currentSlide;

        let currentSlide = slides[current];
        let el = currentSlide.el;

        if (!el.dataset.pos) {
            return;
        }

        let pos = el.dataset.pos;

        let tl = new TimelineLite({
            onUpdate: () => this.render()
        });

        if () {
            tl.set(this.cameraRig.position, {z: -pos});
        } else {
            tl.to(this.cameraRig.position, transitionDuration, {z: -pos});
        }


    }
}

new Background('#bg');