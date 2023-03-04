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
    var params = {
        fullscreen: true,
        autostart: true,
        backgroundColor: "hsl(0, 0%, 100%)"
    };
    var elem = document.body;
    var two = new Two(params).appendTo(elem);
    const canvas = two.renderer.domElement;
    canvas.style.cursor = "crosshair";
    // Add an event listener to the button
    //Line
    var button = document.createElement("button");
    button.innerHTML = '<span class="material-symbols-outlined">pen_size_2</span>';
    button.style.position = "absolute";
    button.style.top = "10px";
    button.style.left = "10px";
    document.body.appendChild(button);
    // Add an event listener to the button
    button.addEventListener("click", function lin() {
        var start = null;
        var line = null;
        var line = two.makeLine(100, 100, 500, 100);
        line.stroke = "#ffffff";
        line.linewidth = 3;
        var gui = new dat.GUI();
        const LineFolder = gui.addFolder("Line");
        LineFolder.add(line.translation, "x", 0, two.width).step(1).name("X Position");
        LineFolder.add(line.translation, "y", 0, two.height).step(1).name("Y Position");
        LineFolder.add(line.vertices[1], "x", 10, two.width).step(1).name("Increase Right");
        LineFolder.add(line.vertices[0], "x", 10, two.width).step(1).name("Decrease Left");
        LineFolder.add(line, "rotation", 0, Math.PI * 2).name("Angle");
    });
    //circle
    //Button Circle Click
    var cbutton = document.createElement("button");
    cbutton.innerHTML = '<span class="material-symbols-outlined">circle</span>';
    cbutton.style.position = "absolute";
    cbutton.style.top = "10px";
    cbutton.style.left = "50px";
    document.body.appendChild(cbutton);
    cbutton.addEventListener("click", function circ() {
        var circle = two.makeCircle(110, 110, 100);
        circle.translation.x = 700;
        circle.translation.y = 350;
        circle.stroke = "#ffffff";
        circle.noFill();
        circle.linewidth = 3;
        var gui = new dat.GUI();
        const circleFolder = gui.addFolder("Circle");
        circleFolder.add(circle.translation, "x", 0, two.width).step(1).name("X Position");
        circleFolder.add(circle.translation, "y", 0, two.height).step(1).name("Y Position");
        circleFolder.add(circle, "radius", 10, 1000).step(1).name("Radius");
    });
    // Add an event listener to the button
    //Rectangle
    var rbutton = document.createElement("button");
    rbutton.innerHTML = '<span class="material-symbols-outlined">rectangle</span>';
    rbutton.style.position = "absolute";
    rbutton.style.top = "10px";
    rbutton.style.left = "90px";
    document.body.appendChild(rbutton);
    rbutton.addEventListener("click", function rect() {
        var rect = two.makeRectangle(two.width / 2, two.height / 2, 100, 100);
        rect.stroke = "#ffffff";
        rect.noFill();
        rect.linewidth = 3;
        var gui = new dat.GUI();
        var rectFolder = gui.addFolder("Rectangle");
        rectFolder.add(rect.translation, "x", 0, two.width).name("X");
        rectFolder.add(rect.translation, "y", 0, two.height).name("Y");
        rectFolder.add(rect, "width", 0, two.width).name("Width");
        rectFolder.add(rect, "height", 0, two.height).name("Height");
    });
    //Polygon with Manupilating Edges
    //Polygon
    var pbutton = document.createElement("button");
    pbutton.innerHTML = '<span class="material-symbols-outlined">pentagon</span>';
    pbutton.style.position = "absolute";
    pbutton.style.top = "10px";
    pbutton.style.left = "130px";
    document.body.appendChild(pbutton);
    pbutton.addEventListener("click", function poly() {
        var sides = 3;
        var radius = 100;
        var x = two.width / 2;
        var y = two.height / 2;
        var polygon = two.makePolygon(x, y, radius, sides);
        polygon.stroke = "#ffffff";
        polygon.noFill();
        polygon.linewidth = 3;
        var gui = new dat.GUI();
        var polyFolder = gui.addFolder("Polygon");
        polyFolder.add(polygon.translation, "x", 0, two.width).name("X");
        polyFolder.add(polygon.translation, "y", 0, two.height).name("Y");
        polyFolder.add(polygon, "sides", 3, 50).step(1).name("Edges");
        function updateVertices() {
            var size = polygon.vertices[0].distanceTo(polygon.vertices[1]) / 10;
            for(var i = 0; i < polygon.vertices.length; i++){
                var vertex = polygon.vertices[i];
                vertex.radius = size;
                vertex.fill = "white";
                vertex.stroke = "black";
                vertex.linewidth = 1;
            }
        }
        updateVertices();
    });
    // Two.js axes
    var group = two.makeGroup();
    var group = two.makeGroup();
    var length = 10000;
    var thickness = 2;
    var xAxis = new Two.Line(-length / 2, 0, length / 2, 0);
    xAxis.linewidth = thickness;
    xAxis.stroke = "red";
    group.add(xAxis);
    var yAxis = new Two.Line(0, -length / 2, 0, length / 2);
    yAxis.linewidth = thickness;
    yAxis.stroke = "green";
    group.add(yAxis);
    group.translation.set(two.width / 2, two.height / 2);
    // add the output of the renderer to the html element
    document.getElementById("webgl-output").appendChild(renderer.domElement);
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
        //   // update the stats and the controls
        trackballControls.update(clock.getDelta());
        requestAnimationFrame(render);
        renderer.render(scene, camera);
    }
    //Window Resize Function.
    function onResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }
}

//# sourceMappingURL=circle.5f4786f0.js.map
