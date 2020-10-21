const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

const btnNext=document.getElementById("su");
const Name=document.getElementById("formGroupExampleInput");
const Phone=document.getElementById("formGroupExampleInput3");
const Mail=document.getElementById("formGroupExampleInput2");
const mybutton = document.getElementById("myBtn");

const showbtn=document.getElementById("more");
const row=document.getElementById("hidenrow");

//Nav navigation is built dynamically
const navbarul=document.getElementById("navbarul");

let Testa=document.createElement("a");
Testa.textContent="Test";
Testa.classList.add("nav-link");
navbarul.appendChild(Testa);

let Tipsa=document.createElement("a");
Tipsa.textContent="Tips";
Tipsa.classList.add("nav-link");
navbarul.appendChild(Tipsa);

let Mediaa=document.createElement("a");
Mediaa.textContent="Media"
Mediaa.classList.add("nav-link")
navbarul.appendChild(Mediaa)


let contacta=document.createElement("a");
contacta.textContent="Contact Us"
contacta.classList.add("nav-link")
navbarul.appendChild(contacta)



showbtn.addEventListener("click",function(){
    if(row.style.display==="none")
    {row.style.display="block";
    showbtn.innerHTML="Show Less"
    }
    else{
    row.style.display="none";
    showbtn.innerHTML="Show More"
    }
})





let Interval;
function counter(){

let time=0;
let beginne=false;

 Interval=setInterval(() => {
    
  if(testArea.value !=""||beginne==true)
  {
  beginne=true;
  // Time calculations for  hours, minutes and seconds
  let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((time % (1000 * 60)) / 1000);
  
  // Display the result in the element with theTimer
  theTimer.innerHTML = ("0" + hours).slice(-2) + ":"+ ("0" + minutes).slice(-2) + ":"
   + ("0" + seconds).slice(-2) ;

  time=time+1000;
  //if the text was writen stop the Timer
  if (testArea.value==originText) {
    clearInterval(Interval);
    testWrapper.classList.add("test-wrapperFinish")
    theTimer.innerHTML = ("0" + hours).slice(-2) + ":"+ ("0" + minutes).slice(-2) + ":"
     + ("0" + seconds).slice(-2);
  }

}

}, 1000);

}

function Test() {
    var testText=testArea.value;

    if(originText.includes(testText))
    {
    if(testWrapper.classList.contains("test-wrapperF"))
    {
        testWrapper.classList.remove("test-wrapperF");
    }
    testWrapper.classList.add("test-wrapperT");
}
else{
    
    testWrapper.classList.add("test-wrapperF");
};
}

function reset(){
    if(testWrapper.classList.contains("test-wrapperF"))
    {
        testWrapper.classList.remove("test-wrapperF");
    }
    if(testWrapper.classList.contains("test-wrapperT"))
    {
        testWrapper.classList.remove("test-wrapperT");
    }
    if(testWrapper.classList.contains("test-wrapperFinish"))
    testWrapper.classList.remove("test-wrapperFinish")

    theTimer.innerHTML="00:00:00";
    testArea.value="";
    clearInterval(Interval);
    counter()


}

counter();
//testArea.addEventListener("keypress",counter);
testArea.addEventListener("input",Test);
resetButton.addEventListener("click",reset)



function w_open(text){
document.getElementById(text).style.display="block";
}
function w_close(text){
    document.getElementById(text).style.display="none";
}





// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    count(120);
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function gotop() {
    let elmnt = document.getElementById("myhead");
    elmnt.scrollIntoView();
  }


function count(max){
    if(document.getElementById("demo").textContent=="")
    {let counter=0;
    let intrval = setInterval(function() {
        document.getElementById("demo").innerHTML=counter;
        counter=counter+1;

        if (counter > max) {
       clearInterval(intrval);
       document.getElementById("demo").innerHTML = max;
     }
}, 20);

    }
}




btnNext.addEventListener("click",validation)

function validation(){

    
    if(Name.value=="")
    {
        document.getElementById("nam").textContent="This input field should not be empty "
        Name.classList.add("is-invalid");

    }
    else if (/[^a-zA-Z]/.test(Name.value)) {
        document.getElementById("nam").textContent="The Name should include only Letters"
        Name.classList.add("is-invalid");

    }
    else{
        document.getElementById("nam").textContent="";
        if(Name.classList.contains("is-invalid")){Name.classList.remove("is-invalid");}
        Name.classList.add("is-valid");
    }
    
    if(Phone.value=="")
    {
        document.getElementById("phone").textContent="This input field should not be empty "
        Phone.classList.add("is-invalid");

    }
    else if(Phone.value.slice(0,2)!=01 || Phone.value.length!=11){
        document.getElementById("phone").textContent="It is an invalid Number"
        Phone.classList.add("is-invalid");
    }
    else{
        document.getElementById("phone").textContent=""
        if(Phone.classList.contains("is-invalid")){Phone.classList.remove("is-invalid");};
        Phone.classList.add("is-valid");
    }
    ///////////////////////////////////////////////////
    if(Mail.value=="")
    {
        document.getElementById("mail").textContent="This input field should not be empty "
        Mail.classList.add("is-invalid");

    }
    else if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(Mail.value))
    {
        if(Mail.classList.contains("is-invalid")){Mail.classList.remove("is-invalid");};
        Mail.classList.add("is-valid");
        document.getElementById("mail").textContent=""
    }
    else{

        document.getElementById("mail").textContent="You have entered an invalid email address!"
        Mail.classList.add("is-invalid");

    }
    

}


///clicking the navbar item >>> scrolling the viewport to the target section. 
//clicking the navbar item >>> highlighting the item background for the user to follow easily where s/he surfing.

//Enable smooth scrolling when page scrolls to the section on clicking a nav link .
 const navLinks=document.querySelectorAll('.nav-link');
 const sections4=document.querySelectorAll('.Section4');

navLinks.forEach((Link_,i)=>{

Link_.addEventListener("click",function(){ 
    sections4[i].scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    navLinks.forEach((link,index)=>{   //(DRY)
        if(index===i)
        link.classList.add("active")
        else
        link.classList.remove("active")

    })
})

})
//The active state gets applied on the nav even when the page scrolls .
function changeLinkState(){
    navLinks.forEach((Link_,i)=>{                        //(DRY)
        if (window.scrollY >= sections4[i].offsetTop-300) {
            navLinks.forEach(link => {
              link.classList.remove('active');
            });
            Link_.classList.add('active');
          }
    })

}


window.addEventListener('scroll', changeLinkState);

