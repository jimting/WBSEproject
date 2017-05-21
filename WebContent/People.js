	
			
		
		
People = function(scene){
	
	var idleAction;
	var walkAction;
	var runAction;
	var idleWeight;
	var walkWeight;
	var runWeight;
	var actions;
	var Action;
	var mixer;
	var clock = new THREE.Clock();
	var url = 'marine_anims_core.json';
	
// Initialize stats (fps display)

	

	
	// Load skinned mesh

	
		if ( ! Detector.webgl ) Detector.addGetWebGLMessage();
		
		new THREE.ObjectLoader().load( url, function ( loadedObject ) {

			loadedObject.traverse( function ( child ) {

				if ( child instanceof THREE.SkinnedMesh ) {

					mesh = child;

				}

			} );

			if ( mesh === undefined ) {

				alert( 'Unable to find a SkinnedMesh in this place:\n\n' + url + '\n\n' );
				return;

			}

		// Add mesh and skeleton helper to scene
		
		mesh.rotation.y =  -180 * Math.PI / 180;
		scene.add( mesh );
		
		
		
		

		// Initialize camera and camera controls

		
		

		


		// Create the control panel

		


		// Initialize mixer and clip actions

		
		mixer = new THREE.AnimationMixer( mesh );
		
		
		idleAction = mixer.clipAction( 'idle' );
		walkAction = mixer.clipAction( 'walk' );
		runAction = mixer.clipAction( 'run' );
		actions = [ idleAction, walkAction, runAction ];

		activateAllActions();
		
		mesh.position.set(200,-150,200);
		});
	 

		
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
			actions.forEach( function ( action ) {

				action.play();

			} );

		}
		
		function setWeight( action, weight ) {

			action.enabled = true;
			action.setEffectiveTimeScale( 1 );
			action.setEffectiveWeight( weight );

		}

}
		