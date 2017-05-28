// Set up the scene, camera, and renderer as global variables.
	var scene, renderer;
	
	var map;
	var firstPeople;
	var clock;

	//用來偵測牆壁碰撞
	var PLAYERCOLLISIONDISTANCE = 20;
	//用來裝偵測用的牆壁
	

	var p = null;
	

	init();
	animate();
	

	// Sets up the scene.
	function init()
	 {

	 	clock = new THREE.Clock();
		

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
  		
  		map = new Map(scene);
  		
  		firstPeople = new FirstPeople(scene,map.getCollidableObjects());
  		
  		
  		// Create a light, set its position, and add it to the scene.
  		var light0 = new THREE.PointLight(0xffffff);
  		light0.position.set(0,6000,0);
  		scene.add(light0);	

  		var light1 = new THREE.PointLight(0xffffff);
  		light1.position.set(6000,6000,0);
  		scene.add(light1);

		var light2 = new THREE.PointLight(0xffffff);
  		light2.position.set(0,6000,6000);
  		scene.add(light2);

		var light3 = new THREE.PointLight(0xffffff);
  		light3.position.set(6000,6000,6000);
  		scene.add(light3);

  		
  		
  		
	
		
  		

	}

	// Renders the scene and updates the render as needed.
	function animate() 
	{
		
  		requestAnimationFrame( animate );
  		renderer.render( scene, firstPeople.getCamera() );

  		// Get the change in time between frames
  		var delta = clock.getDelta();
  		firstPeople.animatePlayer(delta);
  		
  		
	}
	// Get the pointer lock and start listening for if its state changes
	