function init() {

  var stats = initStats();
  var renderer = initRenderer();
  var camera = initCamera(new THREE.Vector3(0, 20, 40));
  var trackballControls = initTrackballControls(camera, renderer);
  var clock = new THREE.Clock();
  
  var scene = new THREE.Scene();
  var groundPlane = addLargeGroundPlane(scene)
  groundPlane.position.y = -10;
  initDefaultLighting(scene);
  scene.add(new THREE.AmbientLight(0x444444));

  var textureLoader = new THREE.TextureLoader();
  var gui = new dat.GUI();
  var controls = {};

  var polyhedron = new THREE.IcosahedronGeometry(8, 0);
  var polyhedronMesh = addGeometry(scene, polyhedron, 'polyhedron', 
                      textureLoader.load('../../assets/textures/general/floor-wood.jpg'), 
                      gui, controls);
  polyhedronMesh.position.x = 0;

  render();
  function render() {
      stats.update();
      trackballControls.update(clock.getDelta());
      requestAnimationFrame(render);
      renderer.render(scene, camera);
      polyhedronMesh.rotation.x += 0.01;
  }
}
