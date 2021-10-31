function init() {

  // use the defaults
  var stats = initStats();
  var renderer = initRenderer();
  var camera = initCamera(new THREE.Vector3(0, 20, 40));
  var trackballControls = initTrackballControls(camera, renderer);
  var clock = new THREE.Clock();

  // create a scene, that will hold all our elements such as objects, cameras and lights.
  // and add some simple default lights
  var scene = new THREE.Scene();
  var groundPlane = addLargeGroundPlane(scene)
  groundPlane.position.y = -10;
  initDefaultLighting(scene);
  scene.add(new THREE.AmbientLight(0x444444));

  var textureLoader = new THREE.TextureLoader();
  var gui = new dat.GUI();
  var controls = {};

  var cube = new THREE.BoxGeometry(10, 10, 10)
  var cubeMesh = addGeometry(scene, cube, 'cube', 
                textureLoader.load('../../assets/textures/general/stone.jpg'), 
                gui, controls);
  cubeMesh.position.x = 0;
  cube.castShadow = true;
  cube.receiveShadow = true;

  render();
  function render() {
    stats.update();
    trackballControls.update(clock.getDelta());
    requestAnimationFrame(render);
    renderer.render(scene, camera);
    cubeMesh.rotation.z += 0.01;
  }
}
