let title = document.createElement("h1")
title.setAttribute("id", "title")
title.classList.add("text-center")
title.innerText = ("Dom manipulation form")
document.body.appendChild(title)

// document.body.classList.add("bg-dark")


let paragraph = document.createElement("p")
paragraph.setAttribute("id", "description")
paragraph.classList.add("text-center")
paragraph.innerText = ("Dom manipulation form details")
document.body.appendChild(paragraph)



let formheading=document.createElement("div")
formheading.setAttribute("class","form-group")
document.body.appendChild(formheading)
formheading.classList.add("container")
formheading.classList.add("col-4")
formheading.classList.add("col-sm-4")



let firstname = document.createElement("div")
firstname.innerText = ("FirstName")

document.body.appendChild(firstname)             //firstname


let finput = document.createElement("input")
finput.setAttribute("type", "text")
finput.setAttribute("id", "first-name")
finput.setAttribute("required","")
finput.setAttribute("placeholder","first-name")
document.body.appendChild(finput)




let lastname = document.createElement("div")
lastname.innerText = ("Last Name")
document.body.appendChild(lastname)


let linput = document.createElement("input")
linput.setAttribute("id", "last-name")
linput.setAttribute("required","")
linput.setAttribute("type", "text")
linput.setAttribute("placeholder","last-name")
document.body.appendChild(linput)

let br1=document.createElement('br')
lastname.append(br1)

let br2=document.createElement('br')
lastname.append(br2)

let gender = document.createElement("div")
gender.innerText = ("Gender")
document.body.appendChild(gender)



let male = document.createElement("div")
male.innerText = ("MALE")
document.body.appendChild(male)


let rb1 = document.createElement("input")
rb1.setAttribute("id","rb1")
rb1.setAttribute("type", "radio")
rb1.setAttribute("name", "rb")
document.body.appendChild(gender).appendChild(male).appendChild(rb1)

let female = document.createElement("div")
female.innerText = ("FEMALE")
document.body.appendChild(female)


let rb2 = document.createElement("input")
rb2.setAttribute("id","rb2")
rb2.setAttribute("type", "radio")
rb2.setAttribute("name", "rb")
document.body.appendChild(gender).appendChild(female).appendChild(rb2)




let Address = document.createElement("div")
Address.innerText=("Address")
document.body.appendChild(Address)


let ainput = document.createElement("textarea")
ainput.setAttribute("id", "address")
ainput.setAttribute("type", "text")
ainput.setAttribute("placeholder","Address")
document.body.appendChild(ainput)





let pincode = document.createElement("div")
pincode.innerText = ("Pincode")
document.body.appendChild(pincode)


let pinput = document.createElement("input")
pinput.setAttribute("id", "pincode")
pinput.setAttribute("required","")
pinput.setAttribute("placeholder","Pincode")
pinput.setAttribute("type", "text")
document.body.appendChild(pinput)

//food

let Choiceoffood = document.createElement("div")
Choiceoffood.innerText = ("Please select the food Below")
Choiceoffood.setAttribute("class","Choiceoffood")
document.body.appendChild(Choiceoffood)

let pizzabase = document.createElement("div")
pizzabase.innerText = ("Pizza")
pizzabase.setAttribute("id", "pizzabase")


let pizza = document.createElement("input")
pizza.setAttribute("type", "checkbox")
pizza.setAttribute("id", "pizza")

let burgerbase = document.createElement("div")
burgerbase.innerText = ("Burger")
burgerbase.setAttribute("id", "burgerbase")


let burger = document.createElement("input")
burger.setAttribute("type", "checkbox")
burger.setAttribute("id", "burger")


let noodlesbase = document.createElement("div")
noodlesbase.innerText = ("Noodeles")
noodlesbase.setAttribute("id", "noodlesbase")


let noodles = document.createElement("input")
noodles.setAttribute("type", "checkbox")
noodles.setAttribute("id", "noodles")



let hotdogbase = document.createElement("div")
hotdogbase.innerText = ("Hot Dog")
hotdogbase.setAttribute("id", "hotdogbase")


let hotdog = document.createElement("input")
hotdog.setAttribute("type", "checkbox")
hotdog.setAttribute("id", "hotdog")

let sandwichbase = document.createElement("div")
sandwichbase.innerText = ("Sandwich")
sandwichbase.setAttribute("id", "sandwichbase")


let sandwich = document.createElement("input")
sandwich.setAttribute("type", "checkbox")
sandwich.setAttribute("id", "sandwich")





let State = document.createElement("div")
State.innerText = ("State")
document.body.appendChild(State)


let sinput = document.createElement("input")
sinput.setAttribute("id", "state")
sinput.setAttribute("type", "text")
document.body.appendChild(sinput)


let country = document.createElement("div")
country.innerText = ("Country")
document.body.appendChild(country)



let coinput = document.createElement("input")
coinput.setAttribute("id", "country")
coinput.setAttribute("type", "text")
document.body.appendChild(coinput)

let update = document.createElement("button")
update.innerText = ("Update")
update.setAttribute("type","submit")
update.setAttribute("class", "btn btn-primary");
update.setAttribute("id","submit")
document.body.appendChild(update)

let reset=document.createElement("button")
reset.innerText=("Reset")
reset.setAttribute("id","reset1")
reset.setAttribute("class", "btn btn-primary");
reset.setAttribute("onclick","myFunction()")
document.body.appendChild(reset)

let section = document.createElement("form")
section.setAttribute("id", "form")                 //changes applied

document.body.appendChild(section).appendChild(formheading).appendChild(firstname)
document.body.appendChild(section).appendChild(formheading).appendChild(finput)
document.body.appendChild(section).appendChild(formheading).appendChild(lastname)
document.body.appendChild(section).appendChild(formheading).appendChild(linput)
document.body.appendChild(section).appendChild(formheading).appendChild(gender).appendChild(male).appendChild(rb1)
document.body.appendChild(section).appendChild(formheading).appendChild(gender).appendChild(female).appendChild(rb2)
document.body.appendChild(section).appendChild(formheading).appendChild(Address)
document.body.appendChild(section).appendChild(formheading).appendChild(ainput)
document.body.appendChild(section).appendChild(formheading).appendChild(pincode)
document.body.appendChild(section).appendChild(formheading).appendChild(pinput)
document.body.appendChild(section).appendChild(formheading).appendChild(Choiceoffood).appendChild(pizzabase).appendChild(pizza)
document.body.appendChild(section).appendChild(formheading).appendChild(Choiceoffood).appendChild(burgerbase).appendChild(burger)
document.body.appendChild(section).appendChild(formheading).appendChild(Choiceoffood).appendChild(noodlesbase).appendChild(noodles)
document.body.appendChild(section).appendChild(formheading).appendChild(Choiceoffood).appendChild(hotdogbase).appendChild(hotdog)
document.body.appendChild(section).appendChild(formheading).appendChild(Choiceoffood).appendChild(sandwichbase).appendChild(sandwich)
document.body.appendChild(section).appendChild(formheading).appendChild(State)
document.body.appendChild(section).appendChild(formheading).appendChild(sinput)
document.body.appendChild(section).appendChild(formheading).appendChild(country)
document.body.appendChild(section).appendChild(formheading).appendChild(coinput)
document.body.appendChild(section).appendChild(update)
document.body.appendChild(section).appendChild(reset)


// let div1 = document.createElement



let table = document.createElement("table")
document.body.appendChild(table)

table.setAttribute("class","table")

let thead =document.createElement("thead")
thead.setAttribute("id","thead")





let tablerow1 = document.createElement("tr")
document.body.appendChild(table).appendChild(thead).appendChild(tablerow1)


let tableheadingf = document.createElement("th")
tableheadingf.innerText = ("Firstname")
document.body.appendChild(table).appendChild(thead).appendChild(tablerow1).appendChild(tableheadingf)

let tableheadingl = document.createElement("th")
tableheadingl.innerText = ("lastname")
document.body.appendChild(table).appendChild(thead).appendChild(tablerow1).appendChild(tableheadingl)

let tableheadingg = document.createElement("th")
tableheadingg.innerText = ("Gender")
document.body.appendChild(table).appendChild(thead).appendChild(tablerow1).appendChild(tableheadingg)

let tableheadinga = document.createElement("th")
tableheadinga.innerText = ("Address")
document.body.appendChild(table).appendChild(thead).appendChild(tablerow1).appendChild(tableheadinga)


let tableheadingp = document.createElement("th")
tableheadingp.innerText = ("Pincode")
document.body.appendChild(table).appendChild(thead).appendChild(tablerow1).appendChild(tableheadingp)


let tableheadingfo = document.createElement("th")
tableheadingfo.innerText = ("Food Choosed")
document.body.appendChild(table).appendChild(thead).appendChild(tablerow1).appendChild(tableheadingfo)

let tableheadings = document.createElement("th")
tableheadings.innerText = ("State")
document.body.appendChild(table).appendChild(thead).appendChild(tablerow1).appendChild(tableheadings)


let tableheadingc = document.createElement("th")
tableheadingc.innerText = ("Country")
document.body.appendChild(table).appendChild(thead).appendChild(tablerow1).appendChild(tableheadingc)

// second table
let tbody =document.createElement("tbody")
tbody.setAttribute("id","tbody")

let tablerow2 = document.createElement("tr")
document.body.appendChild(table).appendChild(tbody).appendChild(tablerow2)


let tablerowf = document.createElement("td")
tablerowf.setAttribute("id","tr1")

let span1=document.createElement("span")
span1.setAttribute("id","span1")
document.body.appendChild(table).appendChild(tbody).appendChild(tablerow2).appendChild(tablerowf).appendChild(span1)

let tablerowl = document.createElement("td")
tablerowl.setAttribute("id","tr2")
document.body.appendChild(table).appendChild(tbody).appendChild(tablerow2).appendChild(tablerowl)

let tablerowg = document.createElement("td")
tablerowg.setAttribute("id","tr3")
document.body.appendChild(table).appendChild(tbody).appendChild(tablerow2).appendChild(tablerowg)


let tablerowa = document.createElement("td")
tablerowa.setAttribute("id","tr4")
document.body.appendChild(table).appendChild(tbody).appendChild(tablerow2).appendChild(tablerowa)


let tablerowp = document.createElement("td")
tablerowp.setAttribute("id","tr5")
document.body.appendChild(table).appendChild(tbody).appendChild(tablerow2).appendChild(tablerowp)


let tablerowfo = document.createElement("td")
tablerowfo.setAttribute("id","tr6")
document.body.appendChild(table).appendChild(tbody).appendChild(tablerow2).appendChild(tablerowfo)

let tablerows = document.createElement("td")
tablerows.setAttribute("id","tr7")
document.body.appendChild(table).appendChild(tbody).appendChild(tablerow2).appendChild(tablerows)


let tablerowc = document.createElement("td")
tablerowc.setAttribute("id","tr8")
document.body.appendChild(table).appendChild(tbody).appendChild(tablerow2).appendChild(tablerowc)

function validate(event){
    event.preventDefault();
let f=document.getElementById("first-name").value
let l=document.getElementById("last-name").value
let m=document.getElementById("rb1")
let fe=document.getElementById("rb2")
let a=document.getElementById ("address").value
let p=document.getElementById("pincode").value
let piz=document.getElementById("pizza")
let bur=document.getElementById("burger")
let nod=document.getElementById("noodles")
let hot=document.getElementById("hotdog")
let sand=document.getElementById("sandwich")
let sta=document.getElementById("state").value
let cou=document.getElementById("country").value
let string=""




document.getElementById("span1").innerHTML=f;
document.getElementById("tr2").innerHTML=l;
document.getElementById("tr4").innerHTML=a;
document.getElementById("tr5").innerHTML=p;
document.getElementById("tr7").innerHTML=sta;
document.getElementById("tr8").innerHTML=cou;

if(m.checked==true){

document.getElementById("tr3").innerText="male"
}
else if(fe.checked==true)
{
document.getElementById("tr3").innerText="Female"
}



if(piz.checked==true){

    string=string+"pizza  "
    document.getElementById("tr6").innerHTML=(string)
}
if(bur.checked==true){
    string=string+"Burger  "
    document.getElementById("tr6").innerHTML=(string)
}

if(nod.checked==true){
    string=string+"noodles  "
    document.getElementById("tr6").innerHTML=(string)
}

if(hot.checked==true){
    string=string+"hotdog  "
    document.getElementById("tr6").innerHTML=(string)
}
if(sand.checked==true){
    string=string+"sandwich  "
    document.getElementById("tr6").innerHTML=(string)
}
}

let click=document.getElementById("submit").addEventListener("click",validate)



function myFuction(){
    document.getElementById("Form").reset();
}