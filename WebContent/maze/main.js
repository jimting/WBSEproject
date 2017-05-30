main = function (playerNum,mx,mz,move)
{
	var scene, renderer;
	
	var map;
	var firstPeople;
	var clock;

	//用來偵測牆壁碰撞
	
	//用來裝偵測用的牆壁
	

	var p = [];
	
	

	init();
	animate();
	
	function callback(pp,i)
	{
		p[i] = pp;
		console.log(i);
		if(i==2)
			setInterval(move,10);
			
	}
	
	

	// Sets up the scene.
	function init()
	 {

	 	clock = new THREE.Clock();
		

	 	// Create the scene and set the scene size.
 	 	scene = new THREE.Scene();
  		var WIDTH = 1000,
     	HEIGHT = 800;

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
  		
  		firstPeople = new FirstPeople(scene,map.getCollidableObjects());
  		
  		
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
  		
  		firstPeople.translateX(mx);
  		firstPeople.translateZ(mz);
  		
  		
  		
  		
		
  		

	}
	
	function move() { 
		$.ajax({ 
			url: "StoreAndGet?&px="+firstPeople.getDirectionX()+"&pz="+firstPeople.getDirectionZ()+"&playerNum="+playerNum,
			type: "GET", 
			success: function(response)
			{
				var num = 0;
				for(i=0;i<4;i++)
				{
					if(i==playerNum)
						continue;
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
  		renderer.render( scene, firstPeople.getCamera() );

  		// Get the change in time between frames
  		var delta = clock.getDelta();
  		firstPeople.animatePlayer(delta);
  		
  		
	}
	// Get the pointer lock and start listening for if its state changes
}	