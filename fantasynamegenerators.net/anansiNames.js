var nm1 = ["ákron","ám̀ma","ámmá","ɔkwán","abénaa","aba","abaka","abeberese","abena","abenaa","abeyie","ablá","ablã","aboagye","aboah","aborah","aborampah","abrafi","abrefa","abrema","achamfour","acheampong","ackon","acquah","adade","addai","addo","adiyiah","adjoa","adjowa","adjua","adofo","adomah","adomako","adusei","adwoa","adwubi","afí","afúom","afful","afiríyie","afirifa","afoakwah","afrakoma","afrakomah","afram","afrane","afreh","afrifa","afriyie","afua","agyapong","agyare","agyei","agyeman","agyemang","agyenim","ahinful","ajwoba","akúá","akú","akaminko","akenten","akenteng","akomeah","akomfrah","akosah","akosi","akosiwa","akosua","akoto","akrofi","akua","akuamoah","akuba","akuffo","akun","akwasi","akyaw","ama","amakye","amamfo","amankona","amankonah","amankwah","amba","ame","ameyaw","ameyo","ami","amissah","amoabeng","amoah","amoako","amoateng","amofah","ampadu","ampem","ampofo","amponsah","amponsem","anúm","anané","anan","andoh","ankobiah","ankomah","ankrah","annan","anokye","ansah","ansong","antó","apau","appiah","araba","arko","arkorful","así","asón","asamoah","asante","asantewaa","asare","asenso","ashia","asiamah","asiedu","asomadu","asomaning","assifuah","asubonteng","atá","ataá","ato","awotwe","awotwie","awuah","ayawa","ayeh","ayensu","ayew","bótwe","baaba","baafi","baah","baako","badú","badúwaa","baffoe","bafuor","baidoo","banahene","barwuah","bedíàkṍ","bediako","bedu","bekṍe","bekoe","bemah","berko","boadi","boadu","boahen","boakye","boamah","boampong","boasiako","boatei","boateng","bonah","bonsra","bonsrah","bonsu","brempong","busia","busiah","cofie","crentsil","cudjoe","cuffee","dúkũ","dúnu","daako","dankwah","danquah","danso","dapaa","dapaah","darko","dede","dedei","diawuo","djan","djansi","domfe","donkor","dorkenoo","duah","dufie","duodu","dwamena","dwamenah","dwomoh","ebo","efia","efua","ekow","ekua","ekuoba","enninful","esi","essien","esson","farkyi","fiifi","firikyi","fofie","fokuo","fordjour","forobuor","fredua","freduah","fremah","frempon","frempong","frimpong","gaddo","gyaama","gyakari","gyamah","gyambibi","gyamera","gyamerah","gyamfi","gyan","gyasi","gyeabuor","gyimah","inkoom","jojo","kaakyire","kaku","kande","karikari","katakyie","kenu","kodjó","koduah","kofí","koffi","kofi","kojo","kokote","kokou","koku","komi","komlá","komlã","komlan","konadu","koranten","koranteng","korsah","kosi","kouassi","kow","kuffour","kufuor","kumankama","kumi","kusi","kusiwaa","kuuku","kuwame","kwámè","kwǎmè","kwaata","kwabená","kwadwó","kwakú","kwakye","kwamena","kwami","kwamina","kwarteng","kwasí","kwasiba","kwateng","kwaw","kwayie","kweku","kwesi","kyei","kyekyeku","kyem","kyerematen","kyeremateng","kyereme","kyerewa","kyerewaa","máanu","mánsã","mǎnu","mansah","manso","meńsã́","mensah","mintah","misa","mmorosa","mpong","munuo","núm","narh","nduom","nimo","nimoh","nkansa","nkansah","nkróma","nkrumah","nsĩã́","nsṍwaa","nsiah","nsonwaa","nsonwah","nsor","ntiamoa","ntiamoah","ntim","ntow","nuamah","nyaméama","nyamékyε","nyamekye","nyankómàgó","nyankomago","nyantah","nyantakyi","nyarko","obím̀pέ","obeng","obuor","oduro","ofori","ofosu","ogyampah","ohemeng","ohene","okese","okoromansah","okyere","omenaa","omenah","opambuor","opare","opoku","oppong","opuni","osafo","osam","osei","oteng","otuo","owoahene","owusu","oyiakwan","píèsíe","paintsil","pappoe","peprah","pinaman","poku","prempeh","quainoo","quansah","safo","sakyi","sarfo","sarkodie","sarpei","sarpon","sarpong","sasraku","siabuor","siaw","siisi","sika","sikafuo","sintim","siriboe","soadwa","soadwah","sowah","táwia","tagoe","takyi","tandoh","tawiah","tuffour","twasam","tweneboa","tweneboah","twerefuo","twum","twumasi","vorsah","wiafe","wiredu","yεmpέw","yaa","yaaba","yaba","yamoah","yankah","yao","yartei","yaw","yawo","yeboah","yiadom","yoofi"];
var nm8 = ["a","e","i","o","u","á","ã","í","ú","é","ó"];
var br = "";

function nameGen(type){
	$('#placeholder').css('textTransform', 'capitalize');
	var tp = type;
	var element = document.createElement("div");
	element.setAttribute("id", "result");
	
	for(i = 0; i < 10; i++){
		rnd = Math.random() * nm1.length | 0;
		rnd2 = Math.random() * nm1[rnd].length | 0;
		rnd3 = Math.random() * nm1.length | 0;
		rnd4 = Math.random() * nm1[rnd3].length | 0;
		if(rnd2 < 3 && nm1[rnd].length > 4){
			rnd2 = 3;
		}
		if(rnd2 === 0){
			rnd2 = 1;
		}
		if(rnd4 === 0){
			rnd4 = 1;
		}
		if(rnd4 < 3 && nm1[rnd3].length > 4){
			rnd4 = 3;
		}
		if(rnd2 > 5){
			rnd2 = 5;
		}
		if(rnd4 > 5){
			rnd4 = 5;
		}
		if(rnd2 === 1 && rnd4 === 1){
			rnd2 = 2;
		}
		nMs = nm1[rnd].slice(0, rnd2);
		lsChar = nMs.slice(-1);
		nSec = nm1[rnd].slice(rnd4);
		fChar = nSec.slice(0, 0);
		if(nm8.includes(lsChar) && nm8.includes(fChar)){
			if(nm8.includes(nSec.slice(1, 1))){
				names = nMs + nSec.slice(2);
			}else{
				names = nMs + nSec.slice(1);
			}
		}else{
			if(nm8.includes(lsChar) || nm8.includes(fChar)){
				names = nMs + nSec;
			}else{
				rnd5 = Math.random() * nm8.length | 0;
				names = nMs + nm8[rnd5] + nSec;
			}
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