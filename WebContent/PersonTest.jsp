<%@ page language="java" contentType="text/html; charset=BIG5"
    pageEncoding="BIG5"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta charset="utf-8">
		<meta http-equiv="Content-Type" content="text/html; charset=BIG5">
		<title>PersonTest</title>
	</head>
	<body>
		<div id="container"></div>
		<script src="build/three.js"></script>
		<script src="PointerLockControl.js"></script>
		<script src="js/Detector.js"></script>
		<script src="js/libs/stats.min.js"></script>
		<script src="js/controls/OrbitControls.js"></script>
		<script src="js/libs/dat.gui.min.js"></script>
		<script>
			if ( ! Detector.webgl ) Detector.addGetWebGLMessage();
			var container = document.getElementById( 'container' );
			var scene, renderer, camera, controls, stats;
			
			var crossFadeControls = [];

			var idleAction, walkAction, runAction;
			var idleWeight, walkWeight, runWeight;
			var actions;
			var settings;

			var clock = new THREE.Clock();

			var singleStepMode = false;
			var sizeOfNextStep = 0;
			
			var moveForward = false;
			var moveBackward = false;
			var moveLeft = false;
			var moveRight = false;

			var url = 'marine_anims_core.json';


			// Initialize stats (fps display)

			stats = new Stats();
			container.appendChild( stats.dom );


			// Initialize scene, light and renderer

			scene = new THREE.Scene();
			scene.add( new THREE.AmbientLight( 0xffffff ) );

			renderer = new THREE.WebGLRenderer( { antialias: true } );
			renderer.setClearColor( 0x333333 );
			renderer.setPixelRatio( window.devicePixelRatio );
			renderer.setSize( window.innerWidth, window.innerHeight );

			container.appendChild( renderer.domElement );


			// Load skinned mesh

			
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

				skeleton = new THREE.SkeletonHelper( mesh );
				skeleton.visible = false;
				scene.add( skeleton );


				// Initialize camera and camera controls

				var radius = mesh.geometry.boundingSphere.radius;

				var aspect = window.innerWidth / window.innerHeight;
				camera = new THREE.PerspectiveCamera( 45, aspect, 1, 10000 );
				camera.position.set( 0.0, radius, radius * 3.5 );

				


				// Create the control panel

				


				// Initialize mixer and clip actions

				mixer = new THREE.AnimationMixer( mesh );

				idleAction = mixer.clipAction( 'idle' );
				walkAction = mixer.clipAction( 'walk' );
				runAction = mixer.clipAction( 'run' );
				actions = [ idleAction, walkAction, runAction ];

				activateAllActions();

				
				// Listen on window resizing and start the render loop

				window.addEventListener( 'resize', onWindowResize, false );
				listenForPlayerMovement();
				
				animate();


			} );
			
			

				function animate() {

					// Render loop

					requestAnimationFrame( animate );

					//idleWeight = idleAction.getEffectiveWeight();
					//walkWeight = walkAction.getEffectiveWeight();
					//runWeight = runAction.getEffectiveWeight();

					// Update the panel values if weights are modified from "outside" (by crossfadings)

					//updateWeightSliders();

					// Enable/disable crossfade controls according to current weight values

					//updateCrossFadeControls();

					// Get the time elapsed since the last frame, used for mixer update (if not in single step mode)

					var mixerUpdateDelta = clock.getDelta();

					// If in single step mode, make one step and then do nothing (until the user clicks again)

					/*if ( singleStepMode ) {

						mixerUpdateDelta = sizeOfNextStep;
						sizeOfNextStep = 0;

					}*/

					// Update the animation mixer, the skeleton and the stats panel, and render this frame

					mixer.update( mixerUpdateDelta );
					skeleton.update();
					stats.update();
					playerRun();
					
					renderer.render( scene, camera );

				}
				
				function activateAllActions() {

					setWeight( idleAction, 100 );
					actions.forEach( function ( action ) {

						action.play();

					} );

				}
				
				function onWindowResize() {

					camera.aspect = window.innerWidth / window.innerHeight;
					camera.updateProjectionMatrix();
					
					renderer.setSize( window.innerWidth, window.innerHeight );

				}
				
				function setWeight( action, weight ) {

					action.enabled = true;
					action.setEffectiveTimeScale( 1 );
					action.setEffectiveWeight( weight );

				}
				
				function playerRun()
				{
					if (moveForward) 
					{
						mesh.position.z -= 2;
						setWeight( idleAction, 1 );
						setWeight( runAction, 100 );
					} 
					else if (moveBackward) 
					{
						mesh.position.z += 2;
						setWeight( idleAction, 1 );
						setWeight( runAction, 100 );
					} 
					else if (moveLeft) 
					{
						mesh.position.x -= 2;
						setWeight( idleAction, 1 );
						setWeight( runAction, 100 );
					} 
					else if (moveRight) 
					{
						mesh.position.x += 2;
						setWeight( idleAction, 1 );
						setWeight( runAction, 100 );
					}
					
					else
					{
						setWeight( runAction, 1 );
						setWeight( idleAction, 100 );
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
			
			
		</script>
	</body>
</html>