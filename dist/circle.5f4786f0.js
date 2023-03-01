function init() {
    // listen to the resize events
    window.addEventListener("resize", onResize, false);
    var camera;
    var scene;
    var renderer;
    // create a scene, that will hold all our elements such as objects, cameras and lights.
    scene = new THREE.Scene();
    // create a camera, which defines where we're looking at.
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000000000);
    // create a render and set the size
    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(new THREE.Color(0x212830));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    //AxesHelper added here !
    var axisHelperSize = 0.5;
    var axisHelperWidth = 5;
    var material = new THREE.LineBasicMaterial({
        color: 0xffffff,
        linewidth: axisHelperWidth
    });
    var axisHelper = new THREE.AxesHelper(axisHelperSize, material);
    axisHelper.scale.z = 0; //stops showing z axes
    localToCameraAxesPlacement = new THREE.Vector3(-1.2 * camera.aspect, -1, -2); // make sure to update this on window resize
    scene.add(axisHelper);
    // initialize the trackball controls and the clock which is needed
    var trackballControls = initTrackballControls(camera, renderer);
    var clock = new THREE.Clock();
    //Grid Helper
    const gridHelper = new THREE.GridHelper(10000000, 1000000, 0x5B6685, 0x5B6685);
    gridHelper.rotation.x = -0.5 * Math.PI;
    scene.add(gridHelper);
    // position and point the camera to the center of the scene
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 100;
    camera.lookAt(scene.position);
    // add subtle ambient lighting
    var ambienLight = new THREE.AmbientLight(0x353535);
    scene.add(ambienLight);
    // add spotlight for the shadows
    var spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(-10, 20, -5);
    spotLight.castShadow = true;
    scene.add(spotLight);
    //two.js circle
    var params = {
        fullscreen: true,
        autostart: true,
        backgroundColor: "hsl(0, 0%, 100%)"
    };
    var elem = document.body;
    var two = new Two(params).appendTo(elem);
    var circle = two.makeCircle(110, 110, 100);
    circle.translation.x = 150;
    circle.translation.y = 350;
    // circle.fill = "lightblue";
    circle.stroke = "#ffffff";
    circle.noFill();
    circle.linewidth = 3;
    // two.update();
    // add the output of the renderer to the html element
    document.getElementById("webgl-output").appendChild(renderer.domElement);
    var gui = new dat.GUI();
    const circleFolder = gui.addFolder("Circle");
    circleFolder.add(circle.translation, "x", 0, 1000).step(1).name("X Position");
    circleFolder.add(circle.translation, "y", 0, 620).step(1).name("Y Position");
    // circleFolder.add(circle.radius,'r',10,1000).step(1).name("Radius");
    circleFolder.add(circle, "radius", 10, 1000).step(1).name("Radius");
    render();
    var t = 0 //declaring a variable to iterate in the following function
    ;
    function render() {
        //axis helper along with the scene rendering 
        t++;
        camera.position.x = 0;
        camera.position.y = 0;
        camera.updateMatrixWorld();
        var axesPlacement = camera.localToWorld(localToCameraAxesPlacement.clone());
        axisHelper.position.copy(axesPlacement);
        // update the stats and the controls
        trackballControls.update(clock.getDelta());
        // stats.update();
        requestAnimationFrame(render);
        renderer.render(scene, camera);
    }
    function renderTwo() {
        requestAnimationFrame(renderTwo);
        two.update();
    }
    renderTwo();
    //Window Resize Function.
    function onResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }
}

//# sourceMappingURL=circle.5f4786f0.js.map
