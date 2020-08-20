/**/
function include(){
	if (typeof arguments[0] === 'undefined' || arguments[0] === null && typeof arguments[1] === 'undefined' || arguments[1] === null){
		/**/
		var z,i,elmnt,file,xhttp;
		z = document.getElementsByTagName("*");
		for (i = 0; i < z.length; i++) {
			elmnt = z[i];
			file = elmnt.getAttribute("include");
			if (file){
				xhttp = new XMLHttpRequest();
				xhttp.onreadystatechange = function(){
					if (this.readyState == 4){
						if (this.status == 200) {elmnt.innerHTML = this.responseText;}
						if (this.status == 404) {elmnt.innerHTML = "Code not found.";}
						elmnt.removeAttribute("include");
						include();
					}
				}
				xhttp.open("GET", file, true);
				xhttp.send();
				return;
			}
		}
	}else{
		/**/
		if (arguments[1]=="js"){
			var fileref=document.createElement('script');
			fileref.setAttribute("type","text/javascript");
			fileref.setAttribute("src", arguments[0]);
			document.getElementsByTagName("head")[0].appendChild(fileref);
		}else if (arguments[1]=="css"){
			var fileref=document.createElement("link");
			fileref.setAttribute("rel", "stylesheet");
			fileref.setAttribute("type", "text/css");
			fileref.setAttribute("href", arguments[0]);
			document.getElementsByTagName("head")[0].appendChild(fileref);
		}else if (arguments[1]=="ico"){
			var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
			link.type = 'image/x-icon';
			link.rel = 'shortcut icon';
			link.href = arguments[0];
			document.getElementsByTagName('head')[0].appendChild(link);
		}else if (arguments[1]=="title"){
			document.title=arguments[0];
		}	
	}
}
include();
include("template/default/css/css.css","css");
include("font/Elusive/Elusive.css","css");//icons
//include("font/Iceland/Iceland.css","css");
//include("Title","title");
//include("img/ico.ico","ico");
include("template/default/js/js.js","js");
include("js/json.js","js");