/**/
function menu(){
var menu_list=document.getElementById("menu_list");
const element = document.querySelector("#menu_list");

if(element.classList.contains("collapse")==true){
menu_list.classList.remove('collapse');
menu_list.classList.add('in');
menu_list.style.height = "auto";
}else{
menu_list.classList.remove('in');
menu_list.classList.add('collapse');
menu_list.style.height = "2px";
}
}

/**/
function loader(){	
	myVar = setTimeout(showPage, 1000);
}

function showPage(){
  document.getElementById("loader").style.display = "none";
  document.getElementById("content").style.display = "block";
}
loader();

/**/
