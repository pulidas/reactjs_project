function getjson(file,callback){
	var xhr = new XMLHttpRequest();
	xhr.overrideMimeType("application/json");
	xhr.open("GET",file,true);
	xhr.onreadystatechange=function() {
		if (xhr.readyState === 4 && xhr.status =="200") {
           callback(xhr.responseText);
		}
	}
xhr.send();
}
// calling the function
getjson("data1.json",function(text) {
	var data =JSON.parse(text);
	console.log(data);
    mydetails(data.MyProfile);
    hobbies(data.Hobbies);
    languages(data.LanguagesKnown);

})

var parent = document.querySelector(".parent-div");



function hobbies(H) {
	var d=document.createElement("div");
	d.classList.add("Hobbies");
	parent.appendChild(d);
	var h=document.createElement("h1");
	h.textContent="My Hobbies :"
   d.appendChild(h);
   h.appendChild(document.createElement("hr"));
   var ul=document.createElement("ul");
   for (var i = 0; i <H.length; i++) {
   	var li=document.createElement("li");
   	li.textContent=H[i];
    ul.appendChild(li);
   }
   d.appendChild(ul);
}

function languages(languages) {
var d=document.createElement("div");
	d.classList.add("LanguagesKnown");
	parent.appendChild(d);
	var h=document.createElement("h1");
	h.textContent="Languages-Known :"
   d.appendChild(h);
   h.appendChild(document.createElement("hr"));
   var ol=document.createElement("ol");
   var table=document.createElement("table");
   var row="";
   for (var i = 0; i < languages.length; i++) {
   	row +="<tr><td>"+languages[i].name+"</td><td>"+languages[i].bstyle+"</td></tr>";
   }
   table.innerHTML=row;
   ol.appendChild(table);
   d.appendChild(ol);
}


function mydetails(React) {
	var d=document.createElement("div");
	d.classList.add("MyProfile");
	parent.appendChild(d);
	var h=document.createElement("h1");
	h.textContent="My Profile:"
	d.appendChild(h);
	h.appendChild(document.createElement("hr"));

	var i=document.createElement("img");
	i.setAttribute("id","image")
	i.src=React.image;
	i.alt="profile-image";
	d.appendChild(i);

	var name=document.createElement("h4");
	name.classList.add("name");
	// name.style.color="#000";
	name.setAttribute("id","name");
	name.textContent=React.name;
	d.appendChild(name);

	var e=document.createElement("p");
	e.classList.add("mail");
	e.textContent=React.email;
	d.appendChild(e);

   var ul=document.createElement("ul");
   var li=document.createElement("li");
   li.textContent=React.phone;
   ul.appendChild(li);
   var li1=document.createElement("li");
   li1.textContent=React.address;
   ul.appendChild(li1);
	d.appendChild(ul);
}