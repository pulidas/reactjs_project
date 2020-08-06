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
	var data1 =JSON.parse(text);
	console.log(data1);
    mydetails(data1.firstdiv.MyProfile);
    hobbies(data1.firstdiv.Hobbies);
    languages(data1.firstdiv.LanguagesKnown);
    career_obj(data1.seconddiv.Career_obj);
    education(data1.seconddiv.Educational_Details);
    internships(data1.seconddiv.Internships);
    declaration(data1.seconddiv.Declaration);
})

var parent = document.querySelector(".parent-div");

var first=document.querySelector(".first-div");

function hobbies(H) {
	var d=document.createElement("div");
	d.classList.add("Hobbies");
	first.appendChild(d);
	var h=document.createElement("h2");
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
	first.appendChild(d);
	var h=document.createElement("h2");
	h.textContent="Languages-Known :"
   d.appendChild(h);
   h.appendChild(document.createElement("hr"));
   var ol=document.createElement("ol");
   /*var table=document.createElement("table");
   var row="";*/
   for (var i = 0; i < languages.length; i++) {
   /*	row +="<tr><td>"+languages[i].name+"</td><td>"+languages[i].bstyle+"</td></tr>";*/
   	var li=document.createElement("li");
   	li.textContent=languages[i];
   	ol.appendChild(li);
   }
   /*table.innerHTML=row;
   ol.appendChild(table);*/
   d.appendChild(ol);
}


function mydetails(React) {
	var d=document.createElement("div");
	d.classList.add("MyProfile");
	first.appendChild(d);
	var h=document.createElement("h1");
	h.textContent="My Profile:"
	d.appendChild(h);
	h.appendChild(document.createElement("hr"));

	var i=document.createElement("img");
	i.setAttribute("id","image");
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
   ul.setAttribute("id","phone");
   var li=document.createElement("li");
   li.textContent=React.phone;
   ul.appendChild(li);
   var li1=document.createElement("li");
   li1.textContent=React.address;
   ul.appendChild(li1);
	d.appendChild(ul);
  }


    var second=document.querySelector(".second-div");

   function career_obj(Career) {
   	var d=document.createElement("div");
	  d.classList.add("Career_obj");
	  second.appendChild(d);
	  var c=document.createElement("h1");
	  c.textContent="Career Objective:"
	  d.appendChild(c);
	  c.appendChild(document.createElement("hr"));
    for (i=0;i<Career.length;i++){
    var career=document.createElement("p");
    career.classList.add("career");
    career.textContent=Career[i].para;
    d.appendChild(career);
    }
   }
    

   function education(Education) {
   	var a=document.createElement("div")
   	a.classList.add("Educational_Details");
	second.appendChild(a);
	var z=document.createElement("h1");
	z.textContent="Educational Details :"
    a.appendChild(z);
   z.appendChild(document.createElement("hr"));
   var ol1=document.createElement("ol");
   var table=document.createElement("table");
   var row1="";
   for (var i=0;i<Education.length;i++) {
   	row1 +="<tr><td>"+Education[i].College_name+"</td><td>"+Education[i].Board+"</td><td>"+Education[i].CGPA+"</td></tr>";
   	var li=document.createElement("li");
   	li.textContent=Education[i].Educational_Details;
   	ol1.appendChild(li);
       table.innerHTML=row1;
       ol1.appendChild(table);
       console.log(Education);
       a.appendChild(ol1);
     }
    }

   function internships(Intern) {
   	var x=document.createElement("div")
   	x.classList.add("Internships");
    second.appendChild(x);
	var h=document.createElement("h1");
	h.textContent="My Internships :"
    x.appendChild(h);
    h.appendChild(document.createElement("hr"));
    var ul=document.createElement("ul");
    for (var i = 0; i <Intern.length; i++) {
   	var li=document.createElement("li");
   	li.textContent=Intern[i];
    ul.appendChild(li);
   }
   x.appendChild(ul);
 }

  function declaration(Declare) {
    console.log(Declare)
  	var y=document.createElement("div");
	y.classList.add("Declaration");
	second.appendChild(y);
	var w=document.createElement("h1");
	w.textContent="Declaration:"
	y.appendChild(w);
	w.appendChild(document.createElement("hr"));
  for (var i=0;i<Declare.length; i++){
    var declare=document.createElement("p");
    declare.classList.add("declare");
    declare.textContent=Declare[i].final;
    y.appendChild(declare); 

  }
   }
