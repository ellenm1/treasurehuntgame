  //form: 
/*
what is the stimulus question?
list every image and give each a name. 
list every container layer (drawer1, drawer2, cabinet1, cabinet2, box1, box2, bottle1, bottle2)
list every item
what are the correct items?
how are they determined? random (3 out of 10), predetermined by author?
is there a time limit?

*/




  //form: 
/*
what is the stimulus question?
list every image and give each a name. 
list every container layer (drawer1, drawer2, cabinet1, cabinet2, box1, box2, bottle1, bottle2)
list every item
what are the correct items?
how are they determined? random (3 out of 10), predetermined by author?
is there a time limit?

*/
  
  
     	
     var sources = {
       tubeEndoTrachealAdult:                  'tubeEndoTrachealAdult.png',
       tubeEndoTrachealAdult_highlight:        'tubeEndoTrachealAdult_highlight.png',
       styleIntubating:                  'styleIntubating.png',
       styleIntubating_highlight:        'styleIntubating_highlight.png',
       tubeendotrachealpeds:                  'tubeendotrachealpeds.png',
       tubeendotrachealpeds_highlight:        'tubeendotrachealpeds_highlight.png',
       airwayBerman:                  'airwayBerman.png',
       airwayBerman_highlight:        'airwayBerman_highlight.png',
       detectorC02Adult:                  'detectorC02Adult.png',
       detectorC02Adult_highlight:        'detectorC02Adult_highlight.png',
       detectorCO2Peds:                  'detectorCO2Peds.png',
       detectorCO2Peds_highlight:        'detectorCO2Peds_highlight.png',
       O2FlowMeter:                  'O2FlowMeter.png',
       O2FlowMeter_highlight:        'O2FlowMeter_highlight.png',
       lockyellow:                  'lockyellow.png',
       lockyellow_highlight:        'lockyellow_highlight.png',
       batteries:                  'batteries.png',
       batteries_highlight:        'batteries_highlight.png',
       tipsuctionyankauer:                  'tipsuctionyankauer.png',
       tipsuctionyankauer_highlight:        'tipsuctionyankauer_highlight.png',
       tape:                  'tape.png',
       tape_highlight:        'tape_highlight.png',
       povidoneiodine:                  'povidoneiodine.png',
       povidoneiodine_highlight:        'povidoneiodine_highlight.png',
       something:                  'something.png',
       something_highlight:        'something_highlight.png',
       millerblade:                  'millerblade.png',
       millerblade_highlight:        'millerblade_highlight.png',
       depressorTongue:                  'depressorTongue.png',
       depressorTongue_highlight:        'depressorTongue_highlight.png',
       penlight:                  'penlight.png',
       penlight_highlight:        'penlight_highlight.png',
       //drawer1:                  'drawer1open.png',
       //drawer1_highlight:        'drawer1open_highlight.png',
        cart: 		'cart.png',
        drawer1:	'drawer1.png',
        drawer2:	'drawer2.png',
        drawer3:	'drawer3.png',
        drawer4:	'drawer4.png',
        drawer5:	'drawer5.png',
        drawer6:	'drawer6.png',
        drawerhandle1:'drawerhandle1.png',
        drawerhandle1_highlight:'drawerhandle1_highlight.png',
        drawerhandle2:'drawerhandle2.png',
        drawerhandle2_highlight:'drawerhandle2_highlight.png',
        drawerhandle3:'drawerhandle3.png',
        drawerhandle3_highlight:'drawerhandle3_highlight.png',
        drawerhandle4:'drawerhandle4.png',
        drawerhandle4_highlight:'drawerhandle4_highlight.png',
        drawerhandle5:'drawerhandle5.png',
        drawerhandle5_highlight:'drawerhandle5_highlight.png',
        drawerhandle6:'drawerhandle6.png',
        drawerhandle6_highlight:'drawerhandle6_highlight.png'     
    };

var layerList = {
	drawer1: {
		x:450,
		y:-560,
		type:'drawer',
		background:'drawer1.png',
		defaultImg:'drawer1.png',
		animation_open:'',
		animation_close:''
	},
	drawer2:{
		x:450,
		y:-560,
		type:'drawer',
		background:'drawer1.png',
		defaultImg:'drawer1.png',
		animation_open:'',
		animation_close:''	
	},	
	drawer3:{
		x:450,
		y:-560,
		type:'drawer',
		background:'drawer3.png',
		defaultImg:'drawer3.png',
		animation_open:'',
		animation_close:''
	},
	drawer4:{
		x:450,
		y:-560,
		type:'drawer',
		background:'drawer4.png',
		defaultImg:'drawer4.png',
		animation_open:'',
		animation_close:''
	},
	drawer5:{
		x:450,
		y:-560,
		type:'drawer',
		background:'drawer5.png',
		defaultImg:'drawer5.png',
		animation_open:'',
		animation_close:''
	},
	drawer6:{
		x:450,
		y:-560,
		type:'drawer',
		background:'drawer6.png',
		defaultImg:'drawer6.png',
		animation_open:'',
		animation_close:''
	},
	drawerHandlesLayer:{
		type:'static',
		//x:0,
		//y:600   
		x:30,
		y:240
	},
	targetLayer:{
		type:'static',
		//x:0,
		//y:0,
		//z:100,
		x:450,
		y:250
	},
 	
};


// image positions
var itemList = {
	drawer1: {
	    container:'drawer1',
		x:0,
		y:0,
		type:'container',
		defaultImg: {source:'drawer1.png'},
		drawHitRegion:false,
		draggable:false
	},
		drawer2:{
		container:'drawer2',
		x:0,
		y:0,
		type:'container',
		defaultImg: {source:'drawer2.png'},
		drawHitRegion:false,
		draggable:false
	},
		drawer3: {
		container:'drawer3',
		x:0,
		y:0,
		type:'container',
		defaultImg: {source:'drawer3.png'},
		drawHitRegion:false,
		draggable:false
	},
		drawer4: {
		container:'drawer4',
		x:0,
		y:0,
		type:'container',
		defaultImg: {source:'drawer4.png'},
		drawHitRegion:false,
		draggable:false
	},
		drawer5: {
		container:'drawer5',
		x:0,
		y:0,
		type:'container',
		defaultImg: {source:'drawer5.png'},
		drawHitRegion:false,
		draggable:false
	},
		drawer6:{
		container:'drawer6',
		x:0,
		y:0,
		type:'container',
		defaultImg: {source:'drawer6.png'},
		drawHitRegion:false,
		draggable:false
	},
	 tubeEndoTrachealAdult: {
   container:'drawer1',
   title:'Endotracheal Tube Adult',
    x:322,
    y:32,
    width:258,
    height:366,
    type:'findable',
    highlight: {source:'tubeEndoTrachealAdult_highlight'},
    draggable:true
 },
  styleIntubating: {
    container:'drawer1',
    title:'Intubating Style',
    x:43,
    y:41,
    width:546,
    height:483,
    type:'findable',
    highlight: {source:'styleIntubating_highlight'},
    draggable:true
 },
  tubeendotrachealpeds: {
   container:'drawer1',
   title:'Endotracheal Tube Pediatric',
    x:98,
    y:17,
    width:357,
    height:445,
    type:'findable',
    highlight: {source:'tubeendotrachealpeds_highlight'},
    draggable:true
 },
  airwayBerman: {
   container:'drawer2',
   title:'Berman Airway',
    x:422,
    y:88,
    width:169,
    height:242,
    type:'findable',
    highlight: {source:'airwayBerman_highlight'},
    draggable:true
 },
  detectorC02Adult: {
   container:'drawer4',
    title:'CO2 Detector, Adult',
    x:448,
    y:382,
    width:135,
    height:120,
    type:'findable',
    highlight: {source:'detectorC02Adult_highlight'},
    draggable:true
 },
  detectorCO2Peds: {
   container:'drawer6',
    title:'CO2 Detector, Peds',
    x:274,
    y:407,
    width:173,
    height:95,
    type:'findable',
    highlight: {source:'detectorCO2Peds_highlight'},
    draggable:true
 },
  O2FlowMeter: {
   container:'drawer1',
    title:'O2 Flow Meter',
    x:76,
    y:394,
    width:129,
    height:126,
    type:'findable',
    highlight: {source:'O2FlowMeter_highlight'},
    draggable:true
 },
  lockyellow: {
   container:'drawer2',
    title:'Yellow Lock',
    x:652,
    y:236,
    width:126,
    height:170,
    type:'findable',
    highlight: {source:'lockyellow_highlight'},
    draggable:true
 },
  batteries: {
   container:'drawer6',
    title:'Batteries',
    x:690,
    y:283,
    width:78,
    height:97,
    type:'findable',
    highlight: {source:'batteries_highlight'},
    draggable:true
 },
  tipsuctionyankauer: {
   container:'drawer5',
    title:'Yankauer Suction Tip',
    x:615,
    y:273,
    width:69,
    height:70,
    type:'findable',
    highlight: {source:'tipsuctionyankauer_highlight'},
    draggable:true
 },
  tape: {
   container:'drawer1',
    title:'Tape',
    x:658,
    y:327,
    width:91,
    height:79,
    type:'findable',
    highlight: {source:'tape_highlight'},
    draggable:true
 },
  povidoneiodine: {
   container:'drawer1',
    title:'Povidone Iodine',
    x:663,
    y:399,
    width:110,
    height:48,
    type:'findable',
    highlight: {source:'povidoneiodine_highlight'},
    draggable:true
 },
  something: {
   container:'drawer4',
    title:'Something',
    x:579,
    y:378,
    width:208,
    height:143,
    type:'findable',
    highlight: {source:'something_highlight'},
    draggable:true
 },
  millerblade: {
   container:'drawer1',
    title:'Miller Blade',
    x:595,
    y:44,
    width:193,
    height:267,
    type:'findable',
    highlight: {source:'millerblade_highlight'},
    draggable:true
 },
  depressorTongue: {
   container:'drawer1',
    x:764,
    y:126,
    width:19,
    height:155,
    type:'findable',
    highlight: {source:'depressorTongue_highlight'},
    draggable:true
 },
  penlight: {
   container:'drawer1',
    x:685,
    y:132,
    width:21,
    height:99,
    type:'findable',
    highlight: {source:'penlight_highlight'},
    draggable:true
 },
   
    drawerhandle1:{//airway
        container:'drawerHandlesLayer',
        x:64,
         y:206,
		type:'trigger',
		highlight: {source:'drawerhandle1_highlight.jpg'},
		clickHandler:'drawerOpener',
		args:'drawer1',
        drawHitRegion:false,
        draggable:false 
    } ,       
   drawerhandle2:{ //blood draw
    	container:'drawerHandlesLayer',
        x:64,
        y:243,
		type:'trigger',
		highlight:  {source:'drawerhandle2_highlight.jpg'},
		clickHandler:'drawerOpener',
		args:'drawer2',
        drawHitRegion:false,
        draggable:false 

    },        
    drawerhandle3:{ //infusion
    	container:'drawerHandlesLayer',
        x:64,
        y:279,
		type:'trigger',
		highlight: {source:'drawerhandle3_highlight.jpg'},
		clickHandler:'drawerOpener',
		args:'drawer3',
        drawHitRegion:false,
        draggable:false 

    },                
    drawerhandle4:{ //cutdown supplies
    	container:'drawerHandlesLayer',
        x:64,
        y:317,
		type:'trigger',
		highlight: {source:'drawerhandle4_highlight.jpg'},
		clickHandler:'drawerOpener',
		args:'drawer4',
        drawHitRegion:false,
        draggable:false 
    },          
    drawerhandle5:{ //suction
    	container:'drawerHandlesLayer',
        x:64,
        y:353,
		type:'trigger',
		highlight: {source:'drawerhandle5_highlight.jpg'},
		clickHandler:'drawerOpener',
		args:'drawer5',
        drawHitRegion:false,
        draggable:false 
    },          
    drawerhandle6:{ //drug box
    	container:'drawerHandlesLayer',
        x:64,
        y:430,
		type:'trigger',
		clickHandler:'drawerOpener',
		highlight: {source:'drawerhandle6_highlight.jpg'},
		args:'drawer6',
        drawHitRegion:false,
        draggable:false 
    }            
};

 var correctItems={
	thimble:{},
	discoball:{}
 }
 
 
 


/* var correctItems={
	thimble:{},
	discoball:{}
 }
 
 

 /*
 Game type 1
 choose a number of items randomly from the list for each round
 --need to know:
 --stimulus question
 --correct item message 
 --incorrect item message 
 -- got them all message
 --want to try again?
 
 
 */
 
var gametype = 1; //select a number of items randomly from the list. When user finds all of them, that is the end of round 1 and they get 1 point.
var numCorrectItms = 6;
var stimulusText = 'Find the items listed and drag them to the blue target!';
var correctMsg="Correct!"
var incorrectMsg="Sorry, not one of the items! Try again!";

 