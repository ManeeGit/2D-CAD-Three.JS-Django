function init() {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 100;
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    var twoRenderer = new Two({
        width: window.innerWidth,
        height: window.innerHeight
    }).appendTo(document.body);
    function createMesh(shape) {
        var geometry = new THREE.ShapeBufferGeometry(shape);
        var material = new THREE.MeshBasicMaterial({
            color: 0xffffff
        });
        var mesh = new THREE.Mesh(geometry, material);
        return mesh;
    }
    var circle1 = twoRenderer.makeCircle(50, 50, 30);
    var circle2 = twoRenderer.makeCircle(150, 150, 50);
    var rect = twoRenderer.makeRectangle(250, 250, 100, 100);
    var mesh1 = createMesh(circle1._renderer.elem);
    var mesh2 = createMesh(circle2._renderer.elem);
    var mesh3 = createMesh(rect._renderer.elem);
    scene.add(mesh1);
    scene.add(mesh2);
    scene.add(mesh3);
    function animate() {
        requestAnimationFrame(animate);
        // update Two.js renderer
        twoRenderer.render();
        // render Three.js scene
        renderer.render(scene, camera);
    }
    animate();
}

//# sourceMappingURL=test.c2e6b16d.js.map
