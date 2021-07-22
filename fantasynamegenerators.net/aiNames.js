

var br = "";

function nameGen(){
	var nm1 = ["Achiever","Admin","Alive","Alpha","Analyst","Angel","Anima","Animus","Answer","Apex","Aspect","Assist","Aura","Aurora","Aware","Base","Beauty","Bit","Blossom","Brain","Butler","Care","Carer","Center","Central","Cerebrum","Cerebrus","Cloud","Code","Codec","Codex","Colossus","Companion","Cosmic","Cosmos","Creator","Cube","Data","Deus","Different","Dimension","Discovery","Dock","Dream","Echo","Ego","Energy","Enigma","Expert","Face","Familiar","Father","Feature","Feel","Figure","Fluke","Flux","Form","Frame","Friend","Fruit","Gabriel","Genesis","Ghost","Gift","Golem","Guard","Guardian","Guest","Guide","Harmony","Heart","Helix","Hello","Hex","Holmes","Hope","Idea","Image","Impulse","Intra","Junior","Life","Light","Logic","Luck","Lucky","Lumos","Machina","Made","Mage","Master","Matrix","Max","Memory","Mind","Mindful","Mother","Nemo","Neo","Nerve","Omega","Omni","One","Optix","Oracle","Original","Patch","Phoenix","Pixel","Present","Prime","Prism","Reply","Response","Saint","Sample","Science","Search","Self","Shell","Shift","Signal","Solace","Sole","Soul","Spark","Spirit","Sprite","Stranger","Student","Switch","Synapse","Synergy","System","Tec","Tech","Test","Thing","Thinkerer","Thought","Tweak","Unique","Unit","User","Vessel","Ware","Watcher","Whole","Wish","Witness","Wonder","Zen","Zero"];
	$('#placeholder').css('textTransform', 'capitalize');
	var element = document.createElement("div");
	element.setAttribute("id", "result");

	for(i = 0; i < 10; i++){
		rnd = Math.random() * nm1.length | 0;
		nMs = nm1[rnd];
		nm1.splice(rnd, 1);
		br = document.createElement('br');	
		element.appendChild(document.createTextNode(nMs));
		element.appendChild(br);
	}
	if(document.getElementById("result")){
		document.getElementById("placeholder").removeChild(document.getElementById("result"));
	}		
	document.getElementById("placeholder").appendChild(element);
}