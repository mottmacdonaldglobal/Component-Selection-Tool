
var ball=	[1,0,0,1,1,0,1,0,0,1,1,1]
var butterfly=	[0,1,0,1,1,0,1,0,1,1,1,1]
var diaphragm=	[1,1,0,0,0,1,1,0,1,1,0,0]
var gate=	[1,0,0,0,0,0,1,0,0,1,1,1]
var globe=	[1,1,1,1,0,1,0,1,0,0,1,0]
var needle=	[1,1,1,0,0,0,0,1,0,0,1,0]
var pinch=	[1,1,0,1,0,0,1,0,1,1,1,0]
var plug=	[1,1,0,1,1,0,0,1,1,1,1,1]

function chkBOX() {
	var isolation = document.getElementById("isolation")
	if (isolation.checked == true) {
		a=1;
	} else {
		a=0;
	}
	var control = document.getElementById("control")
	if (control.checked == true) {
		b=1;
	} else {
		b=0;
	}
	var relief = document.getElementById("relief")
	if (relief.checked == true) {
		c=1;
	} else {
		c=0;
	}
	var diverting = document.getElementById("diverting")
	if (diverting.checked == true) {
		d=1;
	} else {
		d=0;
	}
	var fastactuation = document.getElementById("fastactuation")
	if (fastactuation.checked == true) {
		e=1;
	} else {
		e=0;
	}
	var stop = document.getElementById("stop")
	if (stop.checked == true) {
		f=1;
	} else {
		f=0;
	}
	var lowresistance = document.getElementById("lowresistance")
	if (lowresistance.checked == true) {
		g=1;
	} else {
		g=0;
	}
	var highresistance = document.getElementById("highresistance")
	if (highresistance.checked == true) {
		h=1;
	} else {
		h=0;
	}
	var sanitary = document.getElementById("sanitary")
	if (sanitary.checked == true) {
		i=1;
	} else {
		i=0;
	}
	var slurry = document.getElementById("slurry")
	if (slurry.checked == true) {
		j=1;
	} else {
		j=0;
	}
	var opex = document.getElementById("opex")
	if (opex.checked == true) {
		k=1;
	} else {
		k=0;
	}
	var capex = document.getElementById("capex")
	if (capex.checked == true) {
		l=1;
	} else {
		l=0;
	}
	var desired=[a,b,c,d,e,f,g,h,i,j,k,l]
	console.log(desired)

	let x=0;
	document.getElementById("valve1").style.visibility = "visible";
	document.getElementById("valve2").style.visibility = "visible";
	document.getElementById("valve3").style.visibility = "visible";
	document.getElementById("valve4").style.visibility = "visible";
	document.getElementById("valve5").style.visibility = "visible";
	document.getElementById("valve6").style.visibility = "visible";
	document.getElementById("valve7").style.visibility = "visible";
	document.getElementById("valve8").style.visibility = "visible";
	for (x; x<desired.length; x++) {
		if (desired[x] > ball[x]) {
			document.getElementById("valve1").style.visibility = "hidden";
		}
		if (desired[x] > butterfly[x]) {
			document.getElementById("valve2").style.visibility = "hidden";
		}
		if (desired[x] > diaphragm[x]) {
			document.getElementById("valve3").style.visibility = "hidden";
		}
		if (desired[x] > gate[x]) {
			document.getElementById("valve4").style.visibility = "hidden";
		}
		if (desired[x] > globe[x]) {
			document.getElementById("valve5").style.visibility = "hidden";
		}
		if (desired[x] > needle[x]) {
			document.getElementById("valve6").style.visibility = "hidden";
		}
		if (desired[x] > pinch[x]) {
			document.getElementById("valve7").style.visibility = "hidden";
		}
		if (desired[x] > plug[x]) {
			document.getElementById("valve8").style.visibility = "hidden";
		}
	}
}

window.addEventListener("load", () => {
var filter = document.getElementById("the-filter"),
list = document.querySelectorAll("#the-list li");
filter.onkeyup = () => {
	let search = filter.value.toLowerCase();
	for (let i of list) {
		let item = i.innerHTML.toLowerCase();
			if (item.indexOf(search) == -1) { 
				i.classList.add("hide");
			} else { 
				i.classList.remove("hide");
			}
		}
	};
});
