Map = function (scene,collidableObjects){

	var wall = [];
	var wallStandard = 300;
	var mapSize = 20;
	var collidableObjects = [];
	
	createRoad();
	
	
	
	function createWall(isVertical,material)
	{
		var geometry = [];

		geometry[0] = new THREE.BoxGeometry(10,wallStandard,wallStandard);
  		geometry[1] = new THREE.BoxGeometry(wallStandard,wallStandard,10);
  		geometry[2] = new THREE.BoxGeometry(wallStandard,10,wallStandard);

		wall = new THREE.Mesh(geometry[isVertical],material);

  		return wall;
	}

	function createRoad(array)
	{
		var map = [[1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
				[0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
				[0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0],
				[0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
				[0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
				[1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
				[0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
				[1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
				[1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0],
				[0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
				[1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0],
				[0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0],
				[1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
				[0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1],
				[0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
				[1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
		
		var textureLoader = new THREE.TextureLoader();

		var innerWall =  new THREE.MeshPhongMaterial({map: THREE.ImageUtils.loadTexture('images/innerwall.jpg')});
		var outWall =  new THREE.MeshPhongMaterial({color: 0x808080, map: THREE.ImageUtils.loadTexture('images/outwall.jpg')});
  		var floor =  new THREE.MeshPhongMaterial({color: 0x8c8c8c, map: THREE.ImageUtils.loadTexture('images/stone-wall.jpg')});

		var wall =[];
		var wallnum = 0;
		
		//這邊先製作外牆
		for(i=0;i<mapSize;i++)
		{
			
			//新牆壁
			wall[wallnum] = new createWall(0,outWall);
			
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
			wall[wallnum] = new createWall(1,outWall);
			wall[wallnum].position.set(i*wallStandard+wallStandard/2,0,wallStandard/2-wallStandard);
			scene.add(wall[wallnum]);
			collidableObjects.push(wall[wallnum]);
			wallnum++;
		}
		for(i=0;i<mapSize;i++)
		{
			wall[wallnum] = new createWall(1,outWall);
			wall[wallnum].position.set(i*wallStandard+wallStandard/2,0,mapSize*wallStandard-wallStandard/2);
			scene.add(wall[wallnum]);
			collidableObjects.push(wall[wallnum]);
			wallnum++
		}

  		for(i=0;i<mapSize;i++)
  		{
  			wall[wallnum] = new createWall(0,outWall);
			wall[wallnum].position.set(mapSize*wallStandard,0,i*wallStandard);
			scene.add(wall[wallnum]);
			collidableObjects.push(wall[wallnum]);
			wallnum++
  		}

  		for(i=0;i<mapSize;i++)
  			for(j=0;j<mapSize;j++)
  		{
  			wall[wallnum] = new createWall(2,floor);
			wall[wallnum].position.set(j*wallStandard+155,-150,i*wallStandard);
			scene.add(wall[wallnum]);
			collidableObjects.push(wall[wallnum]);
			wallnum++
  		}
		
		
		//這邊隨機生成牆壁
		for(i=1;i<=mapSize;i++)
			for(j=1;j<=mapSize;j++)
					if(map[i-1][j-1] == 1)
					{
						wall[wallnum] = new createWall(0,innerWall);
						wall[wallnum].position.set(j*wallStandard-wallStandard/2,0,i*wallStandard-wallStandard);
						scene.add(wall[wallnum]);
						collidableObjects.push(wall[wallnum]);
						wallnum++;
					}
				
		
		for(i=1;i<=mapSize;i++)
			for(j=1;j<=mapSize;j++)
					if(map[j-1][i-1] == 1)
					{
						wall[wallnum] = new createWall(1,innerWall);
						wall[wallnum].position.set(j*wallStandard-wallStandard/2,0,i*wallStandard-wallStandard);
						scene.add(wall[wallnum]);
						collidableObjects.push(wall[wallnum]);
						wallnum++;
					}
	}
	
	this.getCollidableObjects = function()
	{
		return collidableObjects;
	}
	
	function loadObjMtl(num)
	{
		var mtlLoader = new THREE.MTLLoader();
        mtlLoader.load("models/naturePack_"+num+".mtl", function(materials) {
            materials.preload();
            var objLoader = new THREE.OBJLoader();
            objLoader.setMaterials(materials);
            objLoader.load("models/naturePack_"+num+".obj", function(mesh) {

                mesh.traverse(function(node) {
                    if (node instanceof THREE.Mesh) {
                        node.castShadow = true;
                        node.receiveShadow = true;
                    }
                });
                mesh.scale.set(50,50,50);
                mesh.position.set(Math.random()*1800 + 100, -50, Math.random()*1800 + 100);
                scene.add(mesh);
                collidableObjects.push(mesh);
                mesh.rotation.y = -Math.PI / 4;
            });
        });
	}
	
	

}