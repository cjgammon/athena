let verts = {"vertices": [
    {"x": -37, "y": 80, "z": 370},
    {"x": 76, "y": 41, "z": 274},
    {"x": 195, "y": 35, "z": 164},
    {"x": 97, "y": 41, "z": 156},
    {"x": -3, "y": 55, "z": 245},
    {"x": -218, "y": 37, "z": 176},
    {"x": -228, "y": 33, "z": 58},
    {"x": 3, "y": 12, "z": -29},
    {"x": 81, "y": 46, "z": -220},
    {"x": 272, "y": 30, "z": -347},
    {"x": 349, "y": 33, "z": -270},
    {"x": 251, "y": 38, "z": -209},
    {"x": 76, "y": 31, "z": -274},
    {"x": -127, "y": 48, "z": -355},
    {"x": -320, "y": 80, "z": -359},
    {"x": -373, "y": 94, "z": -458},
    {"x": -305, "y": 91, "z": -550},
    {"x": -202, "y": 74, "z": -480},
    {"x": -258, "y": 65, "z": -298},
    {"x": -294, "y": 65, "z": -173},
    {"x": -309, "y": 72, "z": 48},
    {"x": -386, "y": 90, "z": 330},
    {"x": -286, "y": 86, "z": 465},
    {"x": -158, "y": 81, "z": 382},
    {"x": -134, "y": 70, "z": 107},
    {"x": -39, "y": 54, "z": 3}
]};

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

        this.splineCamera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.01, 10000 );
        this.scene.add( this.splineCamera );

        this.cameraHelper = new THREE.CameraHelper( this.splineCamera );
        this.scene.add( this.cameraHelper );

        var light = new THREE.DirectionalLight( 0xffffff );
        light.position.set( 0, 0, 1 );
        this.scene.add( light );

        //TODO:: load this data from elsewhere..
        let path = [];
        for (let i = 0; i < verts.vertices.length; i++) {
            let point = verts.vertices[i];
            path.push(new THREE.Vector3(point.x, point.y, point.z));
        }

        var material = new THREE.MeshLambertMaterial( { color: 0xff00ff } );
        let extrudePath = new THREE.CatmullRomCurve3(path);
        
        this.tubeGeometry = new THREE.TubeBufferGeometry( extrudePath, 100, 2, 3, false );
        let mesh = new THREE.Mesh( this.tubeGeometry, material );
        mesh.scale.set( this.scale, this.scale, this.scale );
        this.scene.add(mesh);

        this.render();
    }

    render() {
        
        var time = Date.now();
        var looptime = 20 * 1000;
        var t = ( time % looptime ) / looptime;

        var binormal = new THREE.Vector3();
        var normal = new THREE.Vector3();

        var pos = this.tubeGeometry.parameters.path.getPointAt( t );
        pos.multiplyScalar( this.scale );

        // interpolation

        var segments = this.tubeGeometry.tangents.length;
        var pickt = t * segments;
        var pick = Math.floor( pickt );
        var pickNext = ( pick + 1 ) % segments;

        binormal.subVectors( this.tubeGeometry.binormals[ pickNext ], this.tubeGeometry.binormals[ pick ] );
        binormal.multiplyScalar( pickt - pick ).add( this.tubeGeometry.binormals[ pick ] );

        var dir = this.tubeGeometry.parameters.path.getTangentAt( t );
        var offset = 15;

        normal.copy( binormal ).cross( dir );

        // we move on a offset on its binormal
        pos.add( normal.clone().multiplyScalar( offset ) );

        this.splineCamera.position.copy( pos );

        // using arclength for stablization in look ahead
        var lookAt = this.tubeGeometry.parameters.path.getPointAt( ( t + 30 / this.tubeGeometry.parameters.path.getLength() ) % 1 ).multiplyScalar( this.scale );
        // camera orientation 2 - up orientation via normal
        if ( ! true ) lookAt.copy( pos ).add( dir );
        this.splineCamera.matrix.lookAt( this.splineCamera.position, lookAt, normal );
        this.splineCamera.quaternion.setFromRotationMatrix( this.splineCamera.matrix );
        
        //console.log(this.splineCamera.position);
        this.cameraHelper.update();

        this.renderer.render(this.scene, this.camera);

        requestAnimationFrame(() => this.render());
    }
}

new Background('#bg');