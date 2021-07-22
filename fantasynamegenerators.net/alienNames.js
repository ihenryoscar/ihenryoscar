var nm1 = ["br","c","cr","dr","g","gh","gr","k","kh","kr","n","q","qh","sc","scr","str","st","t","tr","thr","v","vr","x","z","","","","",""];
var nm2 = ["ae","aa","ai","au","uu","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u"];
var nm3 = ["c","k","n","q","t","v","x","z","c","cc","cr","cz","dr","gr","gn","gm","gv","gz","k","kk","kn","kr","kt","kv","kz","lg","lk","lq","lx","lz","nc","ndr","nkr","ngr","nk","nq","nqr","nz","q","qr","qn","rc","rg","rk","rkr","rq","rqr","sc","sq","str","t","v","vr","x","z","q'","k'","rr","r'","t'","tt","vv","v'","x'","z'","","","","","","","","","","","","","","","","",""];
var nm4 = ["","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","oi","ie","ai","ei","eo","ui"];
var nm5 = ["d","ds","k","ks","l","ls","n","ns","ts","x"];

var nm6 = ["b","bh","ch","d","dh","f","h","l","m","n","ph","r","s","sh","th","v","y","z","","","","","","","","",""];
var nm7 = ["ae","ai","ee","ei","ie","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u"];
var nm8 = ["c","d","g","h","l","m","n","r","s","v","z","c","ch","d","dd","dh","g","gn","h","hl","hm","hn","hr","l","ld","ldr","lg","lgr","lk","ll","lm","ln","lph","lt","lv","lz","m","mm","mn","mh","mph","n","nd","nn","ng","nk","nph","nz","ph","phr","r","rn","rl","rz","s","ss","sl","sn","st","v","z","s'","l'","n'","m'","f'","h'"];
var nm10 = ["a","e","i","o","u","a","e","i","o","u","oi","ie","ai","ea","ae"];
var nm11 = ["","","","","d","ds","h","l","ll","n","ns","r","rs","s","t","th"];

var nm12 = ["b","bh","br","c","ch","cr","d","dh","dr","f","g","gh","gr","h","k","kh","kr","l","m","n","q","qh","ph","r","s","sc","scr","sh","st","str","t","th","thr","tr","v","vr","y","x","z","","","","","","",""];
var nm13 = ["ae","aa","ai","au","ee","ei","ie","uu","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u"];
var nm14 = ["c","d","g","h","k","l","m","n","q","r","s","t","v","z","c","d","g","h","k","l","m","n","q","r","s","t","v","z","c","cc","ch","cr","cz","d","dd","dh","dr","g","gm","gn","gr","gv","gz","h","hl","hm","hn","hr","k","k'","kk","kn","kr","kt","kv","kz","l","ld","ldr","lg","lgr","lk","ll","lm","ln","lph","lq","lt","lv","lx","lz","m","mh","mm","mn","mph","n","nc","nd","ndr","ng","ngr","nk","nkr","nn","nph","nq","nqr","nz","ph","phr","q","q'","qn","qr","r","r'","rc","rg","rk","rkr","rl","rn","rq","rqr","rr","rz","s","sc","sl","sn","sq","ss","st","str","t","t'","tt","v","v'","vr","vv","x","x'","z","z'","","","","","","","","","","",""];
var nm15 = ["","a","e","i","o","u","a","e","i","o","u","a","e","i","o","u","oi","ie","ai","ea","ae"];
var nm16 = ["d","ds","k","ks","l","ll","ls","n","ns","r","rs","s","t","ts","th","x","","","",""];

function nameGen(){
	$('#placeholder').css('textTransform', 'capitalize');
	var br = "";
	var element = document.createElement("div");
	element.setAttribute("id", "result");
	
	for(i = 0; i < 10; i++){
		nameMas();
		while(names === ""){
			nameMas();
		}
		br = document.createElement('br');	
		element.appendChild(document.createTextNode(names));
		element.appendChild(br);
	}
	if(document.getElementById("result")){
		document.getElementById("placeholder").removeChild(document.getElementById("result"));
	}		
	document.getElementById("placeholder").appendChild(element);
}

function nameMas(){
	if(i < 4){
		rnd = Math.random() * nm1.length | 0;
		rnd2 = Math.random() * nm2.length | 0;
		rnd3 = Math.random() * nm3.length | 0;
		rnd4 = Math.random() * nm4.length | 0;
		rnd5 = Math.random() * nm5.length | 0;
		while(nm1[rnd] === nm3[rnd3] || nm3[rnd3] === nm5[rnd5]){
			rnd3 = Math.random() * nm3.length | 0;
		}
		if(nm3[rnd3] === ""){
			rnd4 = 0;
		}else{
			while(nm4[rnd4] === ""){
				rnd4 = Math.random() * nm4.length | 0;
			}
		}
		names = nm1[rnd] + nm2[rnd2]+ nm3[rnd3] + nm4[rnd4] + nm5[rnd5];
	}else if(i < 7){
		rnd = Math.random() * nm6.length | 0;
		rnd2 = Math.random() * nm7.length | 0;
		rnd3 = Math.random() * nm8.length | 0;
		rnd4 = Math.random() * nm10.length | 0;
		rnd5 = Math.random() * nm11.length | 0;
		while(nm6[rnd] === nm8[rnd3] || nm8[rnd3] === nm11[rnd5]){
			rnd3 = Math.random() * nm8.length | 0;
		}
		names = nm6[rnd] + nm7[rnd2] + nm8[rnd3] + nm10[rnd4] + nm11[rnd5];
	}else{
		rnd = Math.random() * nm12.length | 0;
		rnd2 = Math.random() * nm13.length | 0;
		rnd3 = Math.random() * nm14.length | 0;
		rnd4 = Math.random() * nm15.length | 0;
		rnd5 = Math.random() * nm16.length | 0;
		while(nm12[rnd] === nm14[rnd3] || nm14[rnd3] === nm16[rnd5]){
			rnd3 = Math.random() * nm14.length | 0;
		}
		if(nm14[rnd3] === ""){
			rnd4 = 0;
		}else{
			while(nm15[rnd4] === ""){
				rnd4 = Math.random() * nm15.length | 0;
			}
		}
		names = nm12[rnd] + nm13[rnd2]+ nm14[rnd3] + nm15[rnd4] + nm16[rnd5];
	}
	testSwear(names);
}