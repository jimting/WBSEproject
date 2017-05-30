People = function(scene ,callback,i){
	
	var idleAction;
	var walkAction;
	var runAction;
	var idleWeight;
	var walkWeight;
	var runWeight;
	var mixer;
	var people;
	var clock = new THREE.Clock();
	var url = 'marine_anims_core.json';
	
	
	// Initialize stats (fps display)

	

	
	// Load skinned mesh

	
		if ( ! Detector.webgl ) Detector.addGetWebGLMessage();
		
		var loader = new THREE.ObjectLoader().load( url, function ( loadedObject ) {

			loadedObject.traverse( function ( child ) {

				if ( child instanceof THREE.SkinnedMesh ) {

					people = new THREE.SkinnedMesh(child.geometry,child.material);
				}

			} );
			
			if ( people === undefined ) {

				alert( 'Unable to find a SkinnedMesh in this place:\n\n' + url + '\n\n' );
				return;

			}
			

			people.rotation.y =  -180 * Math.PI / 180;
			people.position.set(200,-150,200);
			 
			scene.add( people );
			
			mixer = new THREE.AnimationMixer( people );
			
			
			idleAction = mixer.clipAction( 'idle' );
			walkAction = mixer.clipAction( 'walk' );
			runAction = mixer.clipAction( 'run' );
			
			
			callback(people,i);
			
			
			
			
		});
		
		//this.people.position.set(200,0,200);
		

		this.run = function (){
			var mixerUpdateDelta = clock.getDelta();

			// If in single step mode, make one step and then do nothing (until the user clicks again)

			/*if ( singleStepMode ) {

				mixerUpdateDelta = sizeOfNextStep;
				sizeOfNextStep = 0;

			}*/

			// Update the animation mixer, the skeleton and the stats panel, and render this frame

			mixer.update( mixerUpdateDelta );
			
			activateAllActions();
		}
		
		function activateAllActions() {

			setWeight( runAction, 100 );
			runAction.play();
			/*actions.forEach( function ( action ) {

				action.play();

			} );*/

		}
		
		function setWeight( action, weight ) {

			action.enabled = true;
			action.setEffectiveTimeScale( 1 );
			action.setEffectiveWeight( weight );

		}
		
		
		
		this.setPosition = function(x,y,z)
		{
			people.position.set(x,y,z);
		}

}
		