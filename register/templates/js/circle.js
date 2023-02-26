function init() {

  // listen to the resize events
  window.addEventListener('resize', onResize, false);
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

  var material = new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: axisHelperWidth });

  var axisHelper = new THREE.AxesHelper(axisHelperSize,material)
  axisHelper.scale.z = 0; //stops showing z axes
  localToCameraAxesPlacement = new THREE.Vector3(-1.2 * camera.aspect,-1, -2); // make sure to update this on window resize
	scene.add(axisHelper)
  
  // initialize the trackball controls and the clock which is needed
  var trackballControls = initTrackballControls(camera, renderer);
  var clock = new THREE.Clock();

  //Grid Helper
  const gridHelper = new THREE.GridHelper(10000000, 1000000, 0xaec6cf, 0xaec6cf)
  gridHelper.rotation.x = -0.5*Math.PI;
  scene.add(gridHelper)

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

  // add the output of the renderer to the html element
  document.getElementById("webgl-output").appendChild(renderer.domElement);

  var controls = new function () {
      var self = this;
  
      this.appliedMaterial = applyMeshStandardMaterial
      this.castShadow = true;
      this.groundPlaneVisible = true;
  
      this.radius = 5;
      this.segments = 128;
  
      this.redraw = function () {
        redrawGeometryAndUpdateUI(gui, scene, controls, function() {
            return new THREE.CircleGeometry(self.radius, self.segments);
        });
      };
    };
  
  var gui = new dat.GUI();
  gui.add(controls, 'radius', 0, 75000000).onChange(controls.redraw);
  

  render();
  var t = 0 //declaring a variable to iterate in the following function
  function render() {

    //axis helper along with the scene rendering 
    t++
    camera.position.x = 0
    camera.position.y = 0
    camera.updateMatrixWorld()
    var axesPlacement = camera.localToWorld(localToCameraAxesPlacement.clone())
		axisHelper.position.copy(axesPlacement);

      // update the stats and the controls
    trackballControls.update(clock.getDelta());
      // stats.update();
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