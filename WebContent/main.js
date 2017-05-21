// Set up the scene, camera, and renderer as global variables.
	var scene, camera, renderer;
	var wall = [];
	var n = 1;
	var map = new Array();
	var wallStandard = 300;
	var mapSize = 20;
	var keyboard = {};
	var player = { height:1.8, speed:10.0, turnSpeed:Math.PI*0.02 };

	var controls;
	var controlsEnabled = false;

	// HTML elements to be changed
	var blocker = document.getElementById('blocker');

	// Flags to determine which direction the player is moving
	var moveForward = false;
	var moveBackward = false;
	var moveLeft = false;
	var moveRight = false;

	// Velocity vector for the player
	var playerVelocity = new THREE.Vector3();

	// How fast the player will move
	var PLAYERSPEED = 800.0;

	var clock;

	//用來偵測牆壁碰撞
	var PLAYERCOLLISIONDISTANCE = 20;
	//用來裝偵測用的牆壁
	var collidableObjects = [];

	var p;
	getPointerLock();

	init();
	animate();
	

	function createWall(isVertical,material)
	{
		var geometry = [];

		geometry[0] = new THREE.BoxGeometry(10,wallStandard,wallStandard);
  		geometry[1] = new THREE.BoxGeometry(wallStandard,wallStandard,10);
  		

		wall = new THREE.Mesh(geometry[isVertical],material);

  		return wall;
	}

	function createRoad(array)
	{

		var textureLoader = new THREE.TextureLoader();

		var material =  new THREE.MeshPhongMaterial({color: 0xFF44AA,map:textureLoader.load("5822c731097ac.jpg")});
  		var material1 =  new THREE.MeshLambertMaterial({color: 0x5599FF});
  		var material2 =  new THREE.MeshLambertMaterial({color: 0xFFFF33});

		var wall =[];
		var wallnum = 0;
		
		//這邊先製作外牆
		for(i=0;i<mapSize;i++)
		{
			
			//新牆壁
			wall[wallnum] = new createWall(0,material);
			
			//設定牆壁位置與方向
			wall[wallnum].position.set(0,0,i*wallStandard);
			
			//加到地圖上
			scene.add(wall[wallnum]);
			
			//這是用來判斷有沒有撞牆用的
			collidableObjects.push(wall[wallnum]);
			wallnum++;
		}

		for(i=0;i<mapSize;i++)
		{
			wall[wallnum] = new createWall(1,material);
			wall[wallnum].position.set(i*wallStandard+wallStandard/2,0,wallStandard/2-wallStandard);
			scene.add(wall[wallnum]);
			collidableObjects.push(wall[wallnum]);
			wallnum++;
		}
		for(i=0;i<mapSize;i++)
		{
			wall[wallnum] = new createWall(1,material);
			wall[wallnum].position.set(i*wallStandard+wallStandard/2,0,mapSize*wallStandard-wallStandard/2);
			scene.add(wall[wallnum]);
			collidableObjects.push(wall[wallnum]);
			wallnum++
		}

  		for(i=0;i<mapSize;i++)
  		{
  			wall[wallnum] = new createWall(0,material);
			wall[wallnum].position.set(mapSize*wallStandard,0,i*wallStandard);
			scene.add(wall[wallnum]);
			collidableObjects.push(wall[wallnum]);
			wallnum++
  		}
		
		
		//這邊隨機生成牆壁
		for(i=1;i<=mapSize;i++)
			for(j=1;j<=mapSize;j++)
				{
					if(Math.random() > 0.8)
					{
						wall[wallnum] = new createWall(0,material);
						wall[wallnum].position.set(j*wallStandard-wallStandard/2,0,i*wallStandard-wallStandard);
						scene.add(wall[wallnum]);
						collidableObjects.push(wall[wallnum]);
						wallnum++;
					}
				}
		
		for(i=1;i<=mapSize;i++)
			for(j=1;j<=mapSize;j++)
				{
					if(Math.random() > 0.8)
					{
						wall[wallnum] = new createWall(1,material);
						wall[wallnum].position.set(j*wallStandard-wallStandard/2,0,i*wallStandard-wallStandard);
						scene.add(wall[wallnum]);
						collidableObjects.push(wall[wallnum]);
						wallnum++;
					}
				}
	}


	// Sets up the scene.
	function init()
	 {

	 	clock = new THREE.Clock();
		listenForPlayerMovement();

 	 // Create the scene and set the scene size.
 	 	scene = new THREE.Scene();
  		var WIDTH = 1000,
     	HEIGHT = 800;
     	scene.background = new THREE.Color( 0xffffbb );

  		// Create a renderer and add it to the DOM.
  		renderer = new THREE.WebGLRenderer({antialias:true});
  		renderer.setSize(WIDTH, HEIGHT);
  		document.body.appendChild(renderer.domElement);
  		renderer.domElement.id = "context"


 		 // Create a camera, zoom it out from the model a bit, and add it to the scene.
  		camera = new THREE.PerspectiveCamera(50, WIDTH / HEIGHT, 0.1, 20000);
  		camera.position.set(150, player.height, 150);
		camera.lookAt(new THREE.Vector3(100,player.height,100));
  		scene.add(camera);
  		p = new People(scene);
  		
  		
  		// Create a light, set its position, and add it to the scene.

  		
		var light3 = new THREE.PointLight(0xffffff);
  		light3.position.set(100,2000,100);
  		scene.add(light3);	

  		

  		for(i=0;i<5;i++)
  			map[i] = new Array();

  		map[0][0] = 1; map[0][1] = 1;  map[0][2] = 0; map[0][3] = 1; map[0][4] = 1;
  		map[1][0] = 1; map[1][1] = 1;  map[1][2] = 0; map[1][3] = 1; map[1][4] = 1;
  		map[2][0] = 0; map[2][1] = 0;  map[2][2] = 0; map[2][3] = 0; map[2][4] = 0;
  		map[3][0] = 1; map[3][1] = 1;  map[3][2] = 0; map[3][3] = 1; map[3][4] = 1;
  		map[4][0] = 1; map[4][1] = 1;  map[1][2] = 0; map[4][3] = 1; map[4][4] = 1;

  		createRoad();

  		controls = new THREE.PointerLockControls(camera);
		scene.add(controls.getObject());
		
  		

	}

	// Renders the scene and updates the render as needed.
	function animate() 
	{
		
  		requestAnimationFrame( animate );
  		renderer.render( scene, camera );

  		// Get the change in time between frames
  		var delta = clock.getDelta();
  		animatePlayer(delta);
  		p.run();
  		
  		
	}
	// Get the pointer lock and start listening for if its state changes
	function getPointerLock() {
	  document.onclick = function () {
	    container.requestPointerLock();
	  }
	  document.addEventListener('pointerlockchange', lockChange, false); 
	}

	// Switch the controls on or off
	function lockChange() {
	    // Turn on controls
	    if (document.pointerLockElement === container) {
	        blocker.style.display = "none";
	        controls.enabled = true;
	        controlsEnabled = true;
	    // Turn off the controls
	    } else {
	      // Display the blocker and instruction
	        blocker.style.display = "";
	        controls.enabled = false;
	        controlsEnabled = false;
	    }
	}

	function listenForPlayerMovement() 
	{

    // A key has been pressed
    var onKeyDown = function(event) {

    switch (event.keyCode) {

      case 38: // up
      case 87: // w
        moveForward = true;
        break;

      case 37: // left
      case 65: // a
        moveLeft = true;
        break;

      case 40: // down
      case 83: // s
        moveBackward = true;
        break;

      case 39: // right
      case 68: // d
        moveRight = true;
        break;
    }
  };

  // A key has been released
    var onKeyUp = function(event) 
    {

    switch (event.keyCode) {

      case 38: // up
      case 87: // w
        moveForward = false;
        break;

      case 37: // left
      case 65: // a
        moveLeft = false;
        break;

      case 40: // down
      case 83: // s
        moveBackward = false;
        break;

      case 39: // right
      case 68: // d
        moveRight = false;
        break;
    }
  };

 		// Add event listeners for when movement keys are pressed and released
  		document.addEventListener('keydown', onKeyDown, false);
 		document.addEventListener('keyup', onKeyUp, false);
	}
	function animatePlayer(delta) 
	{
		// Gradual slowdown
		playerVelocity.x -= playerVelocity.x * 10.0 * delta;
		playerVelocity.z -= playerVelocity.z * 10.0 * delta;
		
		if (detectPlayerCollision() == false)
		{
			if (moveForward) 
			{
				playerVelocity.z -= PLAYERSPEED * delta;
			} 
			if (moveBackward) 
			{
				playerVelocity.z += PLAYERSPEED * delta;
			} 
			if (moveLeft) 
			{
				playerVelocity.x -= PLAYERSPEED * delta;
			} 
			if (moveRight) 
			{
				playerVelocity.x += PLAYERSPEED * delta;
			}
			if( !( moveForward || moveBackward || moveLeft ||moveRight)) 
			{
				// No movement key being pressed. Stop movememnt
				playerVelocity.x = 0;
				playerVelocity.z = 0;
			}
			controls.getObject().translateX(playerVelocity.x * delta);
			controls.getObject().translateZ(playerVelocity.z * delta);
		}
	}

	function detectPlayerCollision() 
	{
	    // The rotation matrix to apply to our direction vector
	    // Undefined by default to indicate ray should coming from front
	    var rotationMatrix;
	    // Get direction of camera
	    var cameraDirection = controls.getDirection(new THREE.Vector3(0, 0, 0)).clone();

	    // Check which direction we're moving (not looking)
	    // Flip matrix to that direction so that we can reposition the ray
	    if (moveBackward) 
	    {
	        rotationMatrix = new THREE.Matrix4();
	        rotationMatrix.makeRotationY(degreesToRadians(180));
	    }
	    else if (moveLeft) 
	    {
	        rotationMatrix = new THREE.Matrix4();
	        rotationMatrix.makeRotationY(degreesToRadians(90));
	    }
	    else if (moveRight) 
	    {
	        rotationMatrix = new THREE.Matrix4();
	        rotationMatrix.makeRotationY(degreesToRadians(270));
	    }

	    // Player is not moving forward, apply rotation matrix needed
	    if (rotationMatrix !== undefined) 
	    {
	        cameraDirection.applyMatrix4(rotationMatrix);
	    }

	    // Apply ray to player camera
	    var rayCaster = new THREE.Raycaster(controls.getObject().position, cameraDirection);

	    // If our ray hit a collidable object, return true
	    if (rayIntersect(rayCaster, PLAYERCOLLISIONDISTANCE)) 
	    {
	        return true;
	    } 
	    else 
	    {
	        return false;
	    }
	}

	function rayIntersect(ray, distance) {
    var intersects = ray.intersectObjects(collidableObjects);
    for (var i = 0; i < intersects.length; i++) {
        // Check if there's a collision
        if (intersects[i].distance < distance) {
            return true;
        }
    }
    return false;
}
function degreesToRadians(degrees) {
  return degrees * Math.PI / 180;
}

function radiansToDegrees(radians) {
  return radians * 180 / Math.PI;
}