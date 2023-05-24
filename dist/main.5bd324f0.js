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
    // var params = {
    //   fullscreen: true,
    //   autostart: true,
    //   backgroundColor: 'hsl(0, 0%, 100%)'
    // }
    /////POINT
    //   // Create a geometry object for the point
    // var geometry = new THREE.Geometry();
    // geometry.vertices.push(new THREE.Vector3(0, 0, 0)); // Add a single vertex to the geometry
    // // Create a material for the point
    // var material = new THREE.PointsMaterial({ color: 0xff0000, size:1});
    // // Create a points object that uses the geometry and material
    // var point = new THREE.Points(geometry, material);
    // // Add the point to the scene
    // scene.add(point);
    ///Free Open Polygon
    // var geometry = new THREE.Geometry();
    // geometry.vertices.push(new THREE.Vector3(-10, 10, 0));
    // geometry.vertices.push(new THREE.Vector3(-10, -10, 0));
    // geometry.vertices.push(new THREE.Vector3(10, -10, 0));
    // geometry.vertices.push(new THREE.Vector3(10, 10, 0));
    // var line2 = new THREE.Line(geometry);
    // scene.add(line2);
    ///Free Closed Polygon
    //   var geometry = new THREE.Geometry();
    // geometry.vertices.push(new THREE.Vector3(-1, 1, 0));
    // geometry.vertices.push(new THREE.Vector3(-1, -1, 0));
    // geometry.vertices.push(new THREE.Vector3(1, -1, 0));
    // geometry.vertices.push(new THREE.Vector3(1, 1, 0));
    // var lineLoop = new THREE.LineLoop(geometry);
    // scene.add(lineLoop);
    /////Ellipse
    // var shape = new THREE.Shape();
    // var x = 0;
    // var y = 0;
    // var xRadius = 2;
    // var yRadius = 1;
    // var startAngle = 0;
    // var endAngle = Math.PI * 2;
    // var clockwise = false;
    // // Create the ellipse path
    // shape.moveTo(x + xRadius, y);
    // shape.ellipse(x, y, xRadius, yRadius, startAngle, endAngle, clockwise);
    // shape.closePath();
    // var geometry = new THREE.ShapeGeometry(shape);
    // var material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    // var mesh = new THREE.Mesh(geometry, material);
    // // Add the mesh to the scene
    // scene.add(mesh); 
    // var elem = document.body;
    // var two = new Two(params).appendTo(elem);
    // //////Spline
    // var points = [
    //   new THREE.Vector3( -10, 0, 10 ),
    //   new THREE.Vector3( -5, 5, 5 ),
    //   new THREE.Vector3( 0, 0, 0 ),
    //   new THREE.Vector3( 5, -5, 5 ),
    //   new THREE.Vector3( 10, 0, 10 )
    // ];
    // // Create the spline curve
    // var curve = new THREE.CatmullRomCurve3( points );
    // // Define the geometry for the spline
    // var geometry = new THREE.Geometry();
    // geometry.vertices = curve.getPoints( 50 ); // get 50 points along the curve
    // // Define the material for the spline
    // var material = new THREE.LineBasicMaterial( { color : 0xff0000 } );
    // // Create the spline object and add it to the scene
    // var splineObject = new THREE.Line( geometry, material );
    // scene.add( splineObject );
    ///////End Points
    // // // Define the geometry for the line
    // var geometry = new THREE.Geometry();
    // geometry.vertices.push( new THREE.Vector3( 0, 0, 0 ) ); // start point
    // geometry.vertices.push( new THREE.Vector3( 5, 5, 5 ) ); // end point
    // // Define the material for the line
    // var material = new THREE.LineBasicMaterial( { color : 0xff0000 } );
    // // Create the line object and add it to the scene
    // var line = new THREE.Line( geometry, material );
    // scene.add( line );
    // // Create a sphere to show the endpoint
    // var endpointGeometry = new THREE.SphereGeometry( 0.1, 16, 16 );
    // var endpointMaterial = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    // var endpointSphere = new THREE.Mesh( endpointGeometry, endpointMaterial );
    // endpointSphere.position.copy( geometry.vertices[1]); // set the sphere position to the endpoint
    // scene.add( endpointSphere );
    // const raycaster = new THREE.Raycaster();
    // // set the origin and direction of the raycaster
    // raycaster.setFromCamera(mouse, camera);
    // // check for intersections with the objects in the scene
    // const intersects = raycaster.intersectObjects(scene.children);
    // // if there are intersections, get the first one and show the intersection point
    // if (intersects.length > 0) {
    //   const intersectionPoint = intersects[0].point;
    //   console.log("Intersection point:", intersectionPoint);
    // }
    /////////////
    var geometry = new THREE.Geometry();
    geometry.vertices.push(new THREE.Vector3(0, 0, 0)); // start point
    geometry.vertices.push(new THREE.Vector3(5, 5, 0)); // end point
    // Define the material for the line
    var material = new THREE.LineBasicMaterial({
        color: 0xff0000
    });
    // Create the line object and add it to the scene
    var line1 = new THREE.Line3(geometry, material);
    scene.add(line1);
    var geometry1 = new THREE.Geometry();
    geometry1.vertices.push(new THREE.Vector3(3, 0, 0)); // start point
    geometry1.vertices.push(new THREE.Vector3(0, 3, 0)); // end point
    // Define the material for the line
    var material1 = new THREE.LineBasicMaterial({
        color: 0xff0000
    });
    // Create the line object and add it to the scene
    var line2 = new THREE.Line3(geometry1, material1);
    scene.add(line2);
    // create a variable to hold the currently highlighted point
    let highlightedPoint = null;
    // add event listeners for mouse events
    window.addEventListener("mousemove", onMouseMove);
    function onMouseMove(event) {
        // calculate the mouse position in normalized device coordinates
        const mouse = new THREE.Vector2(event.clientX / window.innerWidth * 2 - 1, -(event.clientY / window.innerHeight) * 2 + 1);
        // create a raycaster from the mouse position
        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(mouse, camera);
        // find the intersection point of the two lines
        const intersectionPoint = new THREE.Vector3();
        console.log(line2.closestPointToPoint(raycaster.ray.origin));
        line1.closestPointToPoint(line2.closestPointToPoint(raycaster.ray.origin), true, intersectionPoint);
        // calculate the distance between the intersection point and the mouse pointer
        const distance = intersectionPoint.distanceTo(raycaster.ray.origin);
        // if the distance is below a certain threshold, show the intersection point
        if (distance < 0.5) {
            console.log("Intersection point:", intersectionPoint);
            // create a sphere geometry to represent the intersection point
            const sphereGeometry = new THREE.SphereGeometry(0.2, 16, 16);
            const sphereMaterial = new THREE.MeshBasicMaterial({
                color: 0xff0000
            });
            const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
            sphereMesh.position.copy(intersectionPoint);
            // add the sphere to the scene and set it as the highlighted point
            scene.add(sphereMesh);
            highlightedPoint = sphereMesh;
        } else // remove the highlighted point from the scene
        if (highlightedPoint) {
            scene.remove(highlightedPoint);
            highlightedPoint = null;
        }
    }
    // function addEndpointIndicator(object) {
    //   var endpointGeometry = new THREE.SphereGeometry( 0.1, 16, 16 );
    //   var endpointMaterial = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    //   var endpointSphere = new THREE.Mesh( endpointGeometry, endpointMaterial );
    //   endpointSphere.visible = false; // hide the endpoint sphere by default
    //   scene.add( endpointSphere );
    //   object.addEventListener( 'mouseover', function ( event ) {
    //     var intersects = getIntersects( event.layerX, event.layerY, object );
    //     if ( intersects.length > 0 ) {
    //       var point = intersects[0].point;
    //       endpointSphere.position.copy( point );
    //       endpointSphere.visible = true;
    //     } else {
    //       endpointSphere.visible = false;
    //     }
    //   }, false );
    //   function getIntersects( x, y, object ) {
    //     var mouse = new THREE.Vector2();
    //     mouse.x = ( x / window.innerWidth ) * 2 - 1;
    //     mouse.y = - ( y / window.innerHeight ) * 2 + 1;
    //     var raycaster = new THREE.Raycaster();
    //     raycaster.setFromCamera( mouse, camera );
    //     var intersects = raycaster.intersectObject( object, true );
    //     console.log(intersects);
    //     return intersects;
    //   }
    // }
    // var lineGeometry = new THREE.Geometry();
    // lineGeometry.vertices.push( new THREE.Vector3( 0, 0, 0 ) );
    // lineGeometry.vertices.push( new THREE.Vector3( 5, 5, 5 ) );
    // var lineMaterial = new THREE.LineBasicMaterial( { color : 0xff0000 } );
    // var line4 = new THREE.Line( lineGeometry, lineMaterial );
    // scene.add( line4 );
    // addEndpointIndicator( line4 );
    //   var two = new Two({
    //     fullscreen: true,
    //     autostart: true
    //   })//.appendTo(document.getElementById("webgl-output"));
    //   const canvas = two.renderer.domElement;
    //   canvas.style.cursor = 'crosshair';
    /////// MID POINT
    // var geometry = new THREE.Geometry();
    // geometry.vertices.push( new THREE.Vector3( 0, 0, 0 ) ); // start point
    // geometry.vertices.push( new THREE.Vector3( 5, 5, 0 ) ); // end point
    // const boundingBox = new THREE.Box3().setFromPoints(vertices);
    // geometry.boundingBox = boundingBox;
    // // Define the material for the line
    // var material = new THREE.LineBasicMaterial( { color : 0xff0000 } );
    // // Create the line object and add it to the scene
    // var myObject1 = new THREE.Line( geometry, material );
    // scene.add(myObject1);
    // var geometry2 = new THREE.Geometry();
    // geometry2.vertices.push( new THREE.Vector3( 0, 3, 0 ) ); // start point
    // geometry2.vertices.push( new THREE.Vector3( 3, 0, 0 ) ); // end point
    // // Define the material for the line
    // var material2 = new THREE.LineBasicMaterial( { color : 0xff0000 } );
    // // Create the line object and add it to the scene
    // var myObject2 = new THREE.Line( geometry2, material2 );
    // scene.add(myObject2);
    // const boxHelper = new THREE.BoxHelper(myObject1, 0xffff00); // create BoxHelper
    // const center = new THREE.Vector3().copy(myObject1.geometry.boundingBox.getCenter()); // get center point
    // boxHelper.setPosition(center); // set position of BoxHelper to center point
    // scene.add(boxHelper); // add BoxHelper to scene
    // //////Ray
    // // create a raycaster
    // const raycaster = new THREE.Raycaster();
    // // set the origin and direction of the raycaster
    // raycaster.setFromCamera(mouse, camera);
    // // check for intersections with the objects in the scene
    // const intersects = raycaster.intersectObjects(scene.children);
    // // if there are intersections, get the first one and show the intersection point
    // if (intersects.length > 0) {
    //   const intersectionPoint = intersects[0].point;
    //   console.log("Intersection point:", intersectionPoint);
    // }
    // const raycaster = new THREE.Raycaster();
    // const intersectionPoint = new THREE.Vector3();
    // // Set the raycaster's position to the position of object1
    // raycaster.set(myObject1.position, myObject1.getWorldDirection());
    // // Check for intersections with object2's geometry
    // const intersections = raycaster.intersectObject(myObject2);
    // if (intersections.length > 0) {
    //   // Get the intersection point
    //   intersectionPoint.copy(intersections[0].point);
    //   // Create a new point object at the intersection point
    //   const pointGeometry = new THREE.BufferGeometry().setFromPoints([intersectionPoint]);
    //   const pointMaterial = new THREE.PointsMaterial({color: 0x00ff00});
    //   const intersectionPointObject = new THREE.Points(pointGeometry, pointMaterial);
    //   // Add the intersection point object to the scene
    //   scene.add(intersectionPointObject);
    // }
    // Assuming you have a line or object named 'myObject' with a geometry property
    // const geometry = myObject1.geometry;
    // Get the midpoint of the geometry
    // const midpoint = new THREE.Vector3();
    // geometry.computeBoundingBox();
    // geometry.boundingBox.getCenter(midpoint);
    //////MID
    // // Create a new point object at the midpoint
    // const pointGeometry = new THREE.BufferGeometry().setFromPoints([midpoint]);
    // const pointMaterial = new THREE.PointsMaterial({color: 0xff0000});
    // const midpointPoint = new THREE.Points(pointGeometry, pointMaterial);
    // // Add the midpoint point object to the scene
    // myObject1.add(midpointPoint);
    // document.getElementById("webgl-output").appendChild(two.renderer.domElement);
    // Add an event listener to the button
    var button = document.createElement("button");
    button.innerHTML = '<span class="material-symbols-outlined">pen_size_2</span>';
    button.style.position = "absolute";
    button.style.top = "10px";
    button.style.left = "10px";
    document.body.appendChild(button);
    // Add an event listener to the button
    button.addEventListener("click", function lin() {
        const line = two.makeLine(100, 100, 500, 100);
        line.stroke = "#ffffff";
        line.linewidth = 4;
        // define a variable to keep track of whether the line is being dragged
        let isDragging = true;
        // define variables to keep track of the mouse position
        let mouseStartX = 0;
        let mouseStartY = 0;
        // add event listeners to the renderer's domElement
        two.renderer.domElement.addEventListener("mousedown", onMouseDown);
        two.renderer.domElement.addEventListener("mousemove", onMouseMove);
        two.renderer.domElement.addEventListener("mouseup", onMouseUp);
        // handle the mousedown event
        function onMouseDown(event) {
            // check if the mouse is over the line
            if (line.contains(event.clientX, event.clientY)) {
                // set the isDragging flag to true
                isDragging = false;
                // save the mouse position
                mouseStartX = event.clientX;
                mouseStartY = event.clientY;
            }
        }
        // handle the mousemove event
        function onMouseMove(event) {
            // check if the line is being dragged
            if (isDragging) {
                // calculate the distance the mouse has moved
                const dx = event.clientX - mouseStartX;
                const dy = event.clientY - mouseStartY;
                // update the position of the line
                line.translation.x += dx;
                line.translation.y += dy;
                // save the mouse position for the next mousemove event
                mouseStartX = event.clientX;
                mouseStartY = event.clientY;
            }
        }
        // handle the mouseup event
        function onMouseUp(event) {
            // set the isDragging flag to false
            isDragging = false;
        }
        two.update();
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
        two.renderer.domElement.addEventListener("mousedown", function(event) {
            circle.translation.set(event.clientX, event.clientY);
        });
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
        two.update();
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
        // polyFolder.add(polygon.translation, 'radius',100,two.width).name('Radius');
        polyFolder.add(polygon, "radius", 0, two.width).name("Radius");
        // rectFolder.add(rect, 'height', 0, two.height).name('Height');
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
    // // Two.js axes
    //     var group = two.makeGroup();
    //     var group = two.makeGroup();
    //     var length = 10000;
    //     var thickness = 2;
    //     var xAxis = new Two.Line(-length/2, 0, length/2, 0);
    //     xAxis.linewidth = thickness;
    //     xAxis.stroke = 'red';
    //     group.add(xAxis);
    //     var yAxis = new Two.Line(0, -length/2, 0, length/2);
    //     yAxis.linewidth = thickness;
    //     yAxis.stroke = 'green';
    //     group.add(yAxis);
    //     group.translation.set(two.width / 2, two.height / 2);
    // two.appendchild('webgl-output')
    // add the output of the renderer to the html element
    document.getElementById("webgl-output").appendChild(renderer.domElement);
    // var twoRenderer = new Two.WebGLRenderer({
    //   domElement: renderer.domElement
    // });
    // initialize the trackball controls and the clock which is needed
    var trackballControls = initTrackballControls(camera, renderer);
    var clock = new THREE.Clock();
    // twoRenderer.render(two.scene, camera);
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
        requestAnimationFrame(render);
        // twoRenderer.render(two.scene, camera)
        renderer.render(scene, camera);
    }
    render();
    //Window Resize Function.
    function onResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }
}

//# sourceMappingURL=main.5bd324f0.js.map
