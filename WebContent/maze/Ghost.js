Ghost = function(scene,callback,i){
	
	var ghost;
	var clock = new THREE.Clock();
	var url = 'ugly/gears-of-war-3-lambent-female.json';
	
	
	// Initialize stats (fps display)

	

	
	// Load skinned mesh

	
		if ( ! Detector.webgl ) Detector.addGetWebGLMessage();
		
		var loader = new THREE.ObjectLoader().load( url, function ( loadedObject ) {

			
			ghost = loadedObject;
			

			ghost.rotation.y =  -180 * Math.PI / 180;
			ghost.scale.set(100,100,100);
			 
			scene.add( ghost );
			
			
			callback(ghost,null,i);
			
			
			
			
		});
		
		//this.people.position.set(200,0,200);
		

		
		
		
		this.setPosition = function(x,y,z)
		{
			ghost.position.set(x,y,z);
		}

}
		