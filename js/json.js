function json(){
	var opt = "";
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var json_obt = JSON.parse(this.responseText);
			    
				for (i = 0; i < json_obt.head.length; i++) {
					/**/
					include(json_obt.head[i].title,"title");
					
					/**/
					include(json_obt.head[i].icon,"ico");
					
					/**/
					var links="";
					for (l = 0; l < json_obt.head[i].links_url.length; l++){
						if (l==0){var active='active';}else{var active='';}
						links=links+'<li '+active+'><a href="'+json_obt.head[i].links_url[l].url+'"><span class="'+json_obt.head[i].links_url[l].icon+' "></span> '+json_obt.head[i].links_url[l].name+'</a></li>';
					}
					
					/**/
					var footer="000000000000000";
					
					
					/**/
					var body_code = document.getElementById("body");
					var replaceArray = [
					'{logo}',
					'{logo_dec}',
					'{logo_url_name}',
					'{links}',
					'{footer}'
					];
					var replaceArrayValue = [
					json_obt.head[i].logo,
					json_obt.head[i].logo_desc,
					json_obt.head[i].logo_url_name,
					links,
					footer
					];
					
					var finalAns = body_code.outerHTML;
					for (var k = replaceArray.length - 1; k >= 0; k--) {
						finalAns = finalAns.replace(replaceArray[k], replaceArrayValue[k]);
						}
					body_code.innerHTML=finalAns;
				}            
	}
	};
	xmlhttp.open("GET", "json/json.json", true);
	xmlhttp.send();
}

json();