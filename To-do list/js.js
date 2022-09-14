var returned;
var check = [];
var store = JSON.parse(localStorage.getItem("0")) || [];

var form = document.getElementById("form");

//displays current month
var month = document.getElementById("month");
let monthIndex = new Date(); //gets current date
let monthArr = ["January","February","March","April","May","June","July","August","September","October","November","December"];

month.innerHTML = monthArr[monthIndex.getMonth()];

//closes modal prompt
function exit(){
    let btn = document.getElementById('myModal').style.display = 'none';
}

//displays modal prompt
function addTask(){
    document.getElementById('myModal').style.display = 'block';

 }

 function removeTaskFromLocalStorage(list,day,index){
     let value = list.childNodes[index + 1].textContent;
     for (let i = 0; i < store.length - 1; i++) {
         if (store[i] === day) {
             if (store[i + 1] === value) {
                 store[i + 1] = " ";
                 store[i] = " ";
                 localStorage.setItem("0", JSON.stringify(store));
                 break;
             }
         }
     }

 }
 //removes all checked tasks
 function removeTask(){
     var satlist = document.getElementById('saturday');
     var frilist = document.getElementById('friday');
     var thulist = document.getElementById('thursday');
     var wedlist = document.getElementById('wednesday');
     var tuelist = document.getElementById('tuesday');
     var monlist = document.getElementById('monday');
     var Sunlist = document.getElementById('sunday');


     //clears tasks from local storage for each day

     Sunlist.querySelectorAll("input").forEach((input,index)=>{
         if(input.checked) {
             removeTaskFromLocalStorage(Sunlist,"Sunday",index);
         }
     })

     monlist.querySelectorAll("input").forEach((input,index)=>{
         if(input.checked) {
             removeTaskFromLocalStorage(monlist,"Monday",index);
         }
     })

     tuelist.querySelectorAll("input").forEach((input,index)=>{
         if(input.checked){
             removeTaskFromLocalStorage(tuelist,"Tuesday",index);
         }
     })
     wedlist.querySelectorAll("input").forEach((input,index)=>{
         if(input.checked) {
             removeTaskFromLocalStorage(wedlist,"Wednesday",index);
         }
     })
     thulist.querySelectorAll("input").forEach((input,index)=>{
         if(input.checked) {
             removeTaskFromLocalStorage(thulist,"Thursday",index);
         }
     })
     frilist.querySelectorAll("input").forEach((input,index)=>{
         if(input.checked) {
             removeTaskFromLocalStorage(frilist,"Friday",index);
         }
     })
     satlist.querySelectorAll("input").forEach((input,index)=>{
         if(input.checked) {
             removeTaskFromLocalStorage(satlist,"Saturday",index);
         }
     })

     //removes task from page

     let sunitems = Array.prototype.slice.call(Sunlist.childNodes);
     let sunitem;
     while (sunitem = sunitems.pop()) {
         if (sunitem.firstChild && sunitem.firstChild.checked) {
             Sunlist.removeChild(sunitem);
         }
     }

     let monitems = Array.prototype.slice.call(monlist.childNodes);
     let monitem;
     while (monitem = monitems.pop()) {
         if (monitem.firstChild && monitem.firstChild.checked) {
             monlist.removeChild(monitem);
         }
     }

     let tueitems = Array.prototype.slice.call(tuelist.childNodes);
     let tueitem;
     while (tueitem = tueitems.pop()) {
         if (tueitem.firstChild && tueitem.firstChild.checked) {
             tuelist.removeChild(tueitem);
         }
     }

     let weditems = Array.prototype.slice.call(wedlist.childNodes);
     let weditem;
     while (weditem = weditems.pop()) {
         if (weditem.firstChild && weditem.firstChild.checked) {
             wedlist.removeChild(weditem);
         }
     }
     let thuitems = Array.prototype.slice.call(thulist.childNodes);
     let thuitem;
     while (thuitem = thuitems.pop()) {
         if (thuitem.firstChild && thuitem.firstChild.checked) {
             thulist.removeChild(thuitem);
         }
     }
     let friitems = Array.prototype.slice.call(frilist.childNodes);
     let friitem;
     while (friitem = friitems.pop()) {
         if (friitem.firstChild && friitem.firstChild.checked) {
             frilist.removeChild(friitem);
         }
     }
     let satitems = Array.prototype.slice.call(satlist.childNodes);
     let satitem;
     while (satitem = satitems.pop()) {
         if (satitem.firstChild && satitem.firstChild.checked) {
             satlist.removeChild(satitem);
         }
     }

 }

//creates task item
function createListItem(){
    let li = document.createElement('li');
    let input = document.getElementById("text").value;
    let t = document.createTextNode(input);
    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";

    let br = document.createElement('br');
    li.appendChild(checkbox);
    li.appendChild(t);
    li.appendChild(br);

        //puts task (only string) into local storage
        store.push(input);
        localStorage.setItem("0", JSON.stringify(store));

    return li;
}

//inserts task into designated ul
 function insertTask(){

    //closes modal prompt
     let btn = document.getElementById('myModal').style.display = 'none';

     form.querySelectorAll('input').forEach(function (input) {
         if(input.type === 'checkbox' && input.checked) {
             check.push(input.name);
         }

     })
     for(let i = 0;i<7;i++){
         if(check[i] === "Sunday"){
            store.push(check[i]);
            returned = createListItem();


             document.getElementById('sunday').appendChild(returned);
         }
         if(check[i] === "Monday"){
             store.push(check[i]);

             returned = createListItem();

             document.getElementById('monday').appendChild(returned);

         }
         if(check[i] === "Tuesday"){
             store.push(check[i]);

             returned = createListItem();

             document.getElementById('tuesday').appendChild(returned);
         }
         if(check[i] === "Wednesday"){
             store.push(check[i]);

             returned = createListItem();

             document.getElementById('wednesday').appendChild(returned);
         }
         if(check[i] === "Thursday"){
             store.push(check[i]);

             returned = createListItem();

             document.getElementById('thursday').appendChild(returned);
         }
         if(check[i] === "Friday"){
             store.push(check[i]);

             returned = createListItem();

             document.getElementById('friday').appendChild(returned);
         }
         if(check[i] === "Saturday"){
             store.push(check[i]);

             returned = createListItem();

             document.getElementById('saturday').appendChild(returned);
         }
     }
     //after appending tasks to page, clear checked days from array
        check.forEach((item,index)=>{
            check.splice(index);
        })
 }
 //creates a text node of user input with checkbox
 function returnLocalStorageValues(day,index){
     let li = document.createElement('li');
     let input = store[index];
     let t = document.createTextNode(input);
     let checkbox = document.createElement('input');
     checkbox.type = "checkbox";

     let br = document.createElement('br');
     li.appendChild(checkbox);
     li.appendChild(t);
     li.appendChild(br);

     document.getElementById(day.toLowerCase()).appendChild(li);
 }

 //when loading page, inserts tasks previously added (using local storage)
 for(let i = 0 ;i<store.length;i++) {
     switch (store[i]) {
         case "Sunday":
             returnLocalStorageValues(store[i],i + 1);
             break;

         case "Monday":
             returnLocalStorageValues(store[i],i + 1);
             break;

         case "Tuesday":
             returnLocalStorageValues(store[i],i + 1);
             break;

         case "Wednesday":
             returnLocalStorageValues(store[i],i + 1);
             break;

         case "Thursday":
             returnLocalStorageValues(store[i],i + 1);
             break;

         case "Friday":
             returnLocalStorageValues(store[i],i + 1);
             break;

         case "Saturday":
             returnLocalStorageValues(store[i],i + 1);
             break;

     }
 }

 //clears local storage if there are no tasks
 for(let i = 0;i<store.length;i++){
     if(store[i] === " " && i === store.length - 1){
         localStorage.clear();
     }
 }