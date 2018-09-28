 	var correctItemList = '';//this will be the HTML that contains the names of all items or pictures of items that need to be found   
	var correctItems= [];
	var foundItems = 0;
	var assetDir = 'images/'; 
    var drawers=[];  
	var images = []; //imageObjects
	var items=[]; //store Konva Images
	var konvaLayers ={}; //store loaded konva Layers
	var findableItemsArray=new Array();
	var findableItemsObject=new Object();
	var staticItems =[];
	var score=0; 
    var round;
   
   /*create tooltips*/  
     // label with left pointer
      var tooltipLabel = new Konva.Label({
        x: 195,
        y: 130,
        opacity: 1.00
      });   
      tooltipLabel.add(new Konva.Tag({
        fill: 'white',
        lineJoin: 'round'
      }));     
      tooltipLabel.add(new Konva.Text({
        text: 'Label pointing left',
        fontFamily: 'Calibri',
        fontSize: 18,
        padding: 5,
        fill: 'black'
      }));  
    	$('#stimulus').prepend(stimulusText);  
    	document.getElementById('status').innerHTML=('Your score: '+score);
    var backgroundLayer    = new Konva.Layer();
    	//backgroundLayer.id = "backgroundLayer";
    var drawerHandlesLayer = new Konva.Layer();
   		 drawerHandlesLayer.attrs.x = layerList.drawerHandlesLayer.x;
   		 drawerHandlesLayer.attrs.y = layerList.drawerHandlesLayer.y;
    var tooltipLayer = new Konva.Layer();      
	var targetLayer = new Konva.Layer();
	//var mygroup = new Konva.Group();
	//	backgroundLayer.add(mygroup);
	var zheader = new Konva.Rect({
    	x:0,
    	y:0,
    	width:1280,
    	height:110,
    	fill:'black'
    });  //end zheader  
    var stage = new Konva.Stage({
        	container: 'container',
          	width:1280,
          	height: 800
        });	
                stage.add(backgroundLayer);
                
        //make konva layer objects for each layer on the list
        for(var key in layerList){            		
        	(function() {
        		var thislayer = layerList[key];
        		
        		if(thislayer.type == "drawer"){
					var klayer  = new Konva.Layer ({
						name:key+'_kLayer',
						x:thislayer.x,
						y:thislayer.y
					});
			 
					stage.add(klayer); //adding all drawers to stage at this point.
					konvaLayers[key]=klayer;  //add to the list of konva layer objects
				    drawers[key]=klayer; /*add this layer to drawers list*/ 
				}//end if type is drawer		
			})();//end anon function
			
		} // for (var layr in layerList)
     var zcircle = new Konva.Circle({
		   x:565,
			y:50,
			radius: 55,
			fill: 'blue',
			stroke: 'white',
			opacity:0.2,
			strokeWidth: 4
      });
 
    Konva.Image.prototype.type = ""; //add "type" to the Konva.Image object  
	//clean this up
	$.each(itemList, function( key, value ){
    	if(itemList[key].type == 'findable') {
			 //findableItemsObject[key] = itemList[key]
			 itemList[key].shortname = key;
			 findableItemsArray.push(itemList[key]);//add it to the findable items array
			 
		}
		if(itemList[key].type =='static') {
			staticItems[key] = itemList[key];
		}
	});
	
	chooseCorrectItems();
 	loadImages(sources, buildStage);	
	
	
 	 
     
 
     
    function loadImages(sources, callback ) {          
        var loadedImages = 0;
        var numImages = 0;   
          
       
	 
		
		//load the image sources
		for(var src in sources) { numImages++; }
		for(var src in sources) {   	 
          	images[src] = new Image();
          	images[src].src = assetDir + sources[src];
          	images[src].onload = function(){ 
            	  if(++loadedImages >= numImages) { 
            		   loadItems(images, callback);
            		 }// if(++loadedImages 	 
          	};	
        } //end for(var src in sources)
          
  	}  //end loadImages	  	
 
   function loadItems(imagesArray, callback){
       
   		for(var key in itemList) {	 
				var thisitemsLayer; 
				 
				(function() { 
           		var privKey = key;         	
            	var itm = itemList[key];
            	var layerkey = itemList[key].container;
            	
				thisitemsLayer = konvaLayers[layerkey];
				var itemtype = itm.type;
				var func = itm.clickHandler; //clickHandler listed in itemList - usually "drawerOpener" for drawerHandle1,2, etc.					            	
            	var item = new Konva.Image({
            		name:key+'_kImage',
              		image: imagesArray[privKey],
              		type:itemtype,
					draggable:itm.draggable==false?false:true,
              		x: (itm.x),
             	 	y: (itm.y)
            	});		
				
			 
	 
			   /*findable items have different behaviors on mouseover, drag, etc.*/			
				switch(itemtype) {
					case 'findable':
							//console.log('privKey= '+privKey+' layerkey= '+layerkey  +'type=findable');
				 
							item.on('mouseover', function(){
								this.setImage(imagesArray[privKey + '_highlight']);	
								this.cache();
								this.drawHitFromCache();	
								this.parent.draw();
								document.body.style.cursor = 'pointer'; 
							});				
							item.on("mouseover touchstart", function(){
								var mousePos = item.getAbsolutePosition();
								 tooltipLabel = new Konva.Label({
									name:'tt',
									x: mousePos.x + 5,
									y: mousePos.y + 5,
									opacity: 1.00
								 }); 
					
					
								 tooltipLabel.add(new Konva.Tag({
									fill: 'black',
									lineJoin: 'round',
									shadowColor: 'black',
									shadowBlur: 10,
									shadowOffset: 10,
									shadowOpacity: 0.5
								 }));

								tooltipLabel.add(new Konva.Text({
									text: 'Tooltip pointing down',
									fontFamily: 'Calibri',
									fontSize: 18,
									padding: 5,
									fill: 'white'
								}));
					
								tooltipLabel.attrs.x = (mousePos.x + 5);
								tooltipLabel.attrs.y = (mousePos.y + 5);
								tooltipLabel.children[1].setText("this is: " + itemList[privKey].title  );
								tooltipLabel.show();
								tooltipLayer.add(tooltipLabel);
								setTimeout("tooltipLayer.draw()",300);
								tooltipLayer.moveToTop();					 
							});
							item.on('mousedown', function(){ });
							item.on('mouseout touchend', function(){
								this.setImage(imagesArray[privKey]);
								this.cache();
								this.drawHitFromCache();	
								this.parent.draw();
								document.body.style.cursor = 'default';
								tooltipLabel.hide();  
								//add a slow fade out animation instead of just "hide"
								tooltipLayer.draw();
							});
							item.on('dragstart', function() {
								this.moveToTop();
								tooltipLabel.hide();
								tooltipLayer.draw();
							});		
							item.on('dragend', function() {	 
				 			overTarget = inIntersection();
				                //if item was on the correct items list and was dragged to target 
								if((correctItems[privKey])&& (overTarget)){
									var thelayer = item.parent;	
						
									switch(gametype){
										case 1:
											foundItems = foundItems+1;
											//score=score+1;//save for another type of game	
											flush(item,thelayer);
											item.inRightPlace = true;
											saveStage();
											$("#correctItm_"+privKey).addClass('found');
											 //item was on the correct items list AND we now have found ALL of them.           		
											if(foundItems >= numCorrectItms) {                		
												document.getElementById('status').innerHTML=('Your score: 100%<br/><span class="success">You Win!</span>');								
											}
											else { 
												//document.getElementById('status').innerHTML=('Your score: '+score);
												var remainder = parseInt((numCorrectItms - foundItems),10) 
												document.getElementById('status').innerHTML=('You have <span id="remainder">'+remainder+'</span> items left to find!');									
											}
										break;
										default:
											alert('no gametype specified');
									}//end switch
	  
								} //if(correctItems[
					
								//else if the item was NOT correct: put it back           	
								else if(inIntersection()){ 
									document.getElementById('status').innerHTML=('Your score: '+score+'<br/><span class="fail">Sorry, try again!</span>');
									this.moveToTop();
									item.setImage(imagesArray[privKey]);					
									zcircle.setFill('red');
									zcircle.setScale(1.5);
									zcircle.setFill('blue');
									zcircle.parent.draw();
									zcircle.setFill('red');                		 
									zcircle.parent.draw();
									var resetX = parseFloat(item.getX())-parseFloat(itm.x);
									var resetY = parseFloat(item.getY())-parseFloat(itm.y);
									var putItBack = new Konva.Tween({		 
										node:item,
										x: itm.x,
										y: itm.y,
										easing: Konva.Easings.EaseIn,
										duration: .5,      				
									});
									putItBack.play();              		
									this.moveToTop();
									this.parent.draw();
									setTimeout(function(){zcircle.setFill('blue');zcircle.parent.draw();zcircle.setScale(1);zcircle.parent.draw();},750);                		
									document.body.style.cursor = 'default';
								}//else if(inIntersection
							});//end item on dragend
				   
				 
							 item.cache();
							 item.drawHitFromCache(); 
							 
						//else{console.log(privKey+' is not loaded');}	 
						 thisitemsLayer.add(item); //add the item to its layer	
						 item.moveToTop; 
						break;
					case 'trigger':
						var drawerhandlenumber=privKey.substring(13,12);
						var drawerkey = "drawer"+drawerhandlenumber;		   				
						item.on('mouseover', function() {						
							item.setImage(imagesArray[privKey + '_highlight']);
							item.draw();
							document.body.style.cursor = 'pointer';
						});				
						item.on('mousedown touchstart', function() {
						window[func](itm.args);					 
						});	            	
						item.on('mouseout touchend', function() {
							item.setImage(imagesArray[privKey]);
							item.draw();
							document.body.style.cursor = 'default';
						});	
					  	drawerHandlesLayer.add(item);
					  	 console.log('privKey= '+privKey+' layerkey= '+layerkey  +'type=container');	
						break;
					
					case 'container':
						//console.log('privKey= '+privKey+' layerkey= '+layerkey  +'type=container');
						item.cache();
						thisitemsLayer.add(item);  //this adds the drawer photo onto the layer
						break;
					default:
						 console.log('privKey= '+privKey+' layerkey= '+layerkey  +'type=other');
 
				}
			 
				items.push(item); 
 			    item.draw();
				callback(imagesArray);	
              		
           })();//end function  
			 
		} //for (var key in itemList) 
  
   
  
  } 
  
    function buildStage(imagesList) {                   
        var score = 0;
  
        stage.add(drawerHandlesLayer);
        stage.add(targetLayer);
        drawBackground(backgroundLayer, imagesList['cart'], ' ');		
		targetLayer.add(zheader);
		zheader.draw(); 
		targetLayer.draw();
		stage.add(tooltipLayer);
		drawerHandlesLayer.draw(); 
        tooltipLayer.draw();
       // konvaLayers.drawer1.draw();
		zcircle.on('mouseover', function() {
		  console.log('in zcircle mouseover');	
		});
    	targetLayer.add(zcircle);
		zcircle.draw();		
    }
    function drawBackground(bgLayer, bgImg, text) {
        var canvas = bgLayer.getCanvas();
        var context = backgroundLayer.getContext();
        context.drawImage(bgImg, 0, 200);
        context.font = '20pt Calibri';
        context.textAlign = 'center';
        context.fillStyle = 'black';
        context.fillText(text, backgroundLayer.getStage().getWidth() / 2, 40);      		
    }    	
  	function inIntersection() {  		
  		var uPos =	stage.getPointerPosition();  		
  		 if( zcircle.intersects(uPos)){  		 	
			return true;
  		}
  		 else {
          return false;
        }  	
  	}
  	
  	function isNearOutline(item, target) {
        var a = item;
        var o = target;
		var oPos = o.getAbsolutePosition();
		var aPos = a.getAbsolutePosition();
		var ox = oPos.x;
		var oy = oPos.y;	
        var ax = aPos.x;
		var ay = aPos.y;
       
        if(ax > ox - 20 && ax < ox + 60 && ay > oy-20 && ay< oy+60) {
          return true;
        }
        else {
          return false;
        }
      }
	function closealldrawers() { //add something that mops up any items that were dragged out of place?
		 for (var x in drawers){					
				var drawerclose = new Konva.Tween({
    				node:drawers[x],
        			y: -560,
  					easing: Konva.Easings.EaseIn,
					duration: 1,
					onFinish: function() {
					}       				
				});
				if(drawers[x].attrs.y!=-560){  
					drawerclose.play();
				}   						  						 
			} 
	}
	function flush(item,thisitemsLayer){ //animation that sort of flushes item away in a swirl
		var vanishItem= new Konva.Tween({
		node:item,
		rotation:1080,
		scaleX:0,
		scaleY:0,
		duration:.5
	})
	 vanishItem.play();
	
	setTimeout(function(){
		item.remove();
		thisitemsLayer.draw();
		},1000);	
	}
	function randomize(from, to) {
    	return Math.floor(Math.random()*(to-from+1)+from);
	}
	function chooseCorrectItems(){		
  		switch(gametype){
    		case 1: //sort findable items randomly, then pull the desired number from the list	
 	 			var templist = selectRandomItems(findableItemsArray);	 			  	 			
 	 			 $.each(templist,  function(key, value){ 	 			
     				correctItems[value.shortname]=value; 	 
				});
				 
				for (var key in correctItems){
     				correctItemList += '\n<span class="correctItem" id="correctItm_'+key+'">'+ correctItems[key].title +'</span>';     
     			} 
     			$('#correctItemsList').html(correctItemList); 
 	 		break;
 	 		default:
 	 		alert('no game type specified');
 	 	 return correctItemList;
				 
 	 	}  //end if(gametype==1) 
 	 
 }//end chooseCorrectItems			
	function selectRandomItems(){
	 	var p = $(findableItemsArray).sort(function(){   
  	 		return 0.5 - Math.random()
	 	});
	 	p=p.slice(0,numCorrectItms);
	 	 return p;	 		 	 
	}	
	function nextRound(){
		closealldrawers();
		
	}
	function saveStage(){
		var json = stage.toJSON();
		//console.log(json);//this prints the entire serialized stage! use for saving positions to local storage
	}	
	
//handlers

  	
  	    
    function drawerOpener(targ){
		closealldrawers();	  						     		
		drawerOpen(targ);	
	}

	function showView(view){
	 	konvaLayers['drawerHandlesLayer'].hide();
	 	drawBackground(backgroundLayer, images[view], ' ');
	 	this.src = 'nav/leftButton_selected.png';
	 	if(view=='front'){
	 		konvaLayers['drawerHandlesLayer'].show();
	 	}	
	}
			  
function drawerOpen(n){ 
  		var drawerkey = n;
		konvaLayers[drawerkey].moveToTop();
  		konvaLayers[drawerkey].draweropen = new Konva.Tween({ 
			node:konvaLayers[drawerkey],
			x:450,
			y: 120,
			easing: Konva.Easings.EaseOut,
			duration: 2 
		});
		konvaLayers[drawerkey].draweropen.play(); 
  	}