mainGhost = function (playerNum,mx,mz)
{
	var scene, renderer;
	
	var map;
	var firstGhost;
	var clock;

	//用來偵測牆壁碰撞
	
	//用來裝偵測用的牆壁
	

	var p = [];
	var m = [];
	
	var idleAction = [];
	var walkAction = [];
	var runAction = [];

	
	function activateAllActions(i) {
		setWeight( idleAction[i], 0 );
		setWeight( runAction[i], 100 );
		idleAction[i].play();
		runAction[i].play();
		
		/*actions.forEach( function ( action ) {

			action.play();

		} );*/

	}
	
	var state = [];
	
	function unactivateAllActions(i) {

		setWeight( idleAction[i], 100 );
		setWeight( runAction[i], 0 );
		
		idleAction[i].play();
		runAction[i].play();
		/*actions.forEach( function ( action ) {

			action.play();

		} );*/

	}
	
	function setWeight( action, weight ) {

		action.enabled = true;
		action.setEffectiveTimeScale( 1 );
		action.setEffectiveWeight( weight );

	}
	
	init();
	
	
	
	function callback(pp,mixer,i)
	{
		
		idleAction[i] = mixer.clipAction( 'idle' );
		walkAction[i] = mixer.clipAction( 'walk' );
		runAction[i] = mixer.clipAction( 'run' );
		
		p[i] = pp;
		m[i] = mixer;
		runAction[i].play();
		idleAction[i].play();
		
		if(i==3)
		{
			setInterval(move,50);
			animate();
		}
			
	}
	
	

	// Sets up the scene.
	function init()
	 {

	 	clock = new THREE.Clock();
		
	 		
	 	// Create the scene and set the scene size.
 	 	scene = new THREE.Scene();
  		var WIDTH = 1000,
     	HEIGHT = 800;
  		
  		state[0] = state[1] = state[2] = false;
  		//set background
  		var path = "images/";
		var format = '.jpg';
		var urls = [
				path + 'px' + format, path + 'nx' + format,
				path + 'py' + format, path + 'ny' + format,
				path + 'pz' + format, path + 'nz' + format
			];
		var reflectionCube = new THREE.CubeTextureLoader().load( urls );
		reflectionCube.format = THREE.RGBFormat;
		scene.background = reflectionCube;

  		// Create a renderer and add it to the DOM.
  		renderer = new THREE.WebGLRenderer({antialias:true});
  		renderer.setSize(WIDTH, HEIGHT);
  		document.body.appendChild(renderer.domElement);
  		renderer.domElement.id = "context"


 		 // Create a camera, zoom it out from the model a bit, and add it to the scene.
  		
  		map = new Map(scene);
  		
  		firstGhost = new FirstGhost(scene,map.getCollidableObjects());
  		
  		
  		// Create a light, set its position, and add it to the scene.
  		hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 0.6 );
		hemiLight.color.setHSL( 0.6, 1, 0.6 );
		hemiLight.groundColor.setHSL( 0.095, 1, 0.75 );
		hemiLight.position.set( 0, 1000, 0 );
		scene.add( hemiLight );

		dirLight = new THREE.DirectionalLight( 0xffffff, 0.6 );
		dirLight.color.setHSL( 0.1, 1, 0.95 );
		dirLight.position.set( 0, 1000, 0 );
		dirLight.position.multiplyScalar( 50 );
		scene.add( dirLight );
		
		dirLight.castShadow = true;
		dirLight.shadow.mapSize.width = 6000;
		dirLight.shadow.mapSize.height = 6000;

		new People(scene,callback,0);
  		new People(scene,callback,1);
  		new People(scene,callback,2);
  		new People(scene,callback,3);
  		
  		firstGhost.translateX(mx);
  		firstGhost.translateZ(mz);
  		

	}
	
	function move() { 
		
		
		$.ajax({ 
			url: "StoreAndGet?&px="+firstGhost.getDirectionX()+"&pz="+firstGhost.getDirectionZ()+"&playerNum="+playerNum+"&rotation="+firstGhost.getControls().getObject().rotation.y+"&gameNum="+gameNum,
			type: "GET", 
			success: function(response)
			{
				var num = 0;
				for(i=0;i<4;i++)
				{
					p[num].rotation.y = response[i].rotation;
					if(p[num].position.x == response[i].position.x && p[num].position.z == response[i].position.z)
					{
						unactivateAllActions(num);
						state[i] = false;
					}
					else
					{
						if(state[i] == false)
							activateAllActions(num);
						state[i] = true;
					}
					p[num].position.set(response[i].position.x,-150,response[i].position.z);
					num++;
				}
				
			},
			cache: false 
		});
		
	}

	// Renders the scene and updates the render as needed.
	function animate() 
	{
		
  		requestAnimationFrame( animate );
  		renderer.render( scene, firstGhost.getCamera() );

  		// Get the change in time between frames
  		var delta = clock.getDelta();
  		for(i=0;i<4;i++)
  		{
  			m[i].update(delta);
  			
  		}
  		firstGhost.animatePlayer(delta);
  		
  		
	}
	// Get the pointer lock and start listening for if its state changes
}	