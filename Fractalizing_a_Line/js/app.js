const scene = new THREE.Scene();

var fac = new factory(0, 2, 45, 40); //factory arguments (position_X, position_Y, position_Y, Length)

var plane = new THREE.GridHelper(100, 10);
scene.add(plane);

initialize();

animate();
//Declare or Initialize variables here..

//Code your logic here..
function initialize() {
  var frac = new Fractal();
  var A = new THREE.Vector2(0, 0);
  var B = new THREE.Vector2(25, 25);
  frac.fract(A, B, 0.184);
  frac.draw();
}

function animate() {
  requestAnimationFrame(animate);

  fac.renderScene();
}

