

class Background{
    constructor(selector) {
        this.scale = 4;

        this.canvas = document.querySelector(selector);

        this.renderer = new THREE.WebGLRenderer({canvas: this.canvas});
        this.renderer.setPixelRatio( window.devicePixelRatio );
        this.renderer.setSize( window.innerWidth, window.innerHeight );

        this.camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.01, 10000 );
        this.camera.position.set( 0, 50, 3000 );

        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color( 0xff0000 );

        var light = new THREE.DirectionalLight( 0xffffff );
        light.position.set( 0, 0, 1 );
        this.scene.add( light );

        this.render();
    }

    render() {
        
        this.renderer.render(this.scene, this.camera);

        requestAnimationFrame(() => this.render());
    }
}

new Background('#bg');