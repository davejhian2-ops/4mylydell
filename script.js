/* ==========================================
   PINK LOVE WEBSITE
   SCRIPT.JS - PART 1
========================================== */

// ==========================================
// Loading Screen
// ==========================================

window.addEventListener("load", () => {

    const loading = document.getElementById("loadingScreen");

    setTimeout(() => {

        loading.style.opacity = "0";

        loading.style.pointerEvents = "none";

        setTimeout(() => {

            loading.style.display = "none";

        }, 1000);

    }, 1800);

});

// ==========================================
// Popup System
// ==========================================

const popup = document.getElementById("popup");
const popupBody = document.getElementById("popupBody");

function openPopup(content){

    popup.style.display = "flex";

    popupBody.innerHTML = content;

}

function closePopup(){

    popup.style.display = "none";

}

window.onclick = function(event){

    if(event.target == popup){

        closePopup();

    }

}

// ==========================================
// Love Letter
// ==========================================

function showLetter(){

    openPopup(`

        <h2>💌 My Letter For You 💌</h2>

        <br>

        <p id="letterText"></p>

    `);

    typeLetter();

}

// ==========================================
// Typewriter Effect
// ==========================================

const message =

`Hi Langga

I know you've been really tired lately.

I just want you to know that I'm so proud of you.

Thank you for always trying your best.

Even if today wasn't perfect...

you still did your best.

Please don't forget to eat.

Drink water.

Take a break.

Smile.

And remember...

You are loved.

You are appreciated.

You are enough.

I'm always cheering for you.

I love you so much.`;

function typeLetter(){

    let i = 0;

    const target = document.getElementById("letterText");

    target.innerHTML = "";

    const typing = setInterval(()=>{

        target.innerHTML += message.charAt(i);

        i++;

        if(i >= message.length){

            clearInterval(typing);

        }

    },25);

}

// ==========================================
// Virtual Hug
// ==========================================

function showHug(){

    openPopup(`

    <h2>🤗 Virtual Hug</h2>

    <br>

    <div style="font-size:90px;">
        🫂
    </div>

    <br>

    <h3>

        Sending the biggest hug...

    </h3>

    <br>

    <p>

        You don't have to carry everything alone.

        Rest if you need to.

        I'm always here for you.

        ❤️

    </p>

    `);

}

// ==========================================
// Coffee Break
// ==========================================

function makeCoffee(){

    openPopup(`

        <h2>☕ Brewing Coffee...</h2>

        <br>

        <h1 id="coffee">0%</h1>

    `);

    let percent = 0;

    const coffee = document.getElementById("coffee");

    const timer = setInterval(()=>{

        percent += 5;

        coffee.innerHTML = percent + "%";

        if(percent >= 100){

            clearInterval(timer);

            coffee.innerHTML =

            "☕<br><br>Your coffee is ready!";

        }

    },100);

}

// ==========================================
// Random Quotes
// ==========================================

const quotes=[

"🌸 You are stronger than you think.",

"💗 Don't forget to smile today.",

"☕ Drink some water.",

"❤️ I'm proud of you.",

"🌷 One step at a time.",

"✨ Everything will be okay.",

"💕 You deserve to rest."

];

let quoteIndex = 0;

setInterval(()=>{

    document.getElementById("quote").innerHTML =

    quotes[quoteIndex];

    quoteIndex++;

    if(quoteIndex >= quotes.length){

        quoteIndex = 0;

    }

},4000);

// ==========================================
// Scroll To Top
// ==========================================

const topButton = document.getElementById("topButton");

window.onscroll = ()=>{

    if(document.body.scrollTop > 400 ||

       document.documentElement.scrollTop > 400){

        topButton.style.display = "block";

    }

    else{

        topButton.style.display = "none";

    }

}

function scrollToTop(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}

/* ==========================================
   SCRIPT.JS - PART 2
========================================== */


// ==========================================
// FLOATING HEART GENERATOR
// ==========================================

function createHeart(){

    const heart = document.createElement("div");

    heart.classList.add("heart");

    const heartList = [
        "❤️",
        "💗",
        "💕",
        "💖",
        "🌸",
        "🩷"
    ];

    heart.innerHTML =
    heartList[
        Math.floor(Math.random()*heartList.length)
    ];


    heart.style.left =
    Math.random()*100 + "vw";


    heart.style.fontSize =
    (20 + Math.random()*30) + "px";


    heart.style.animationDuration =
    (5 + Math.random()*5) + "s";


    document.querySelector(".hearts")
    .appendChild(heart);


    setTimeout(()=>{

        heart.remove();

    },9000);

}


setInterval(createHeart,500);



// ==========================================
// SPARKLE GENERATOR
// ==========================================

function createSparkle(){

    const sparkle =
    document.createElement("div");


    sparkle.classList.add("sparkle");


    sparkle.style.left =
    Math.random()*100+"vw";


    sparkle.style.top =
    Math.random()*100+"vh";


    document.body.appendChild(sparkle);


    setTimeout(()=>{

        sparkle.remove();

    },3000);

}


setInterval(createSparkle,700);



// ==========================================
// MOOD CHECKER
// ==========================================


function moodChecker(){


openPopup(`

<h2>🌸 How are you feeling today?</h2>

<br>


<div class="moodButtons">


<button onclick="showMood('happy')">

😊 Happy

</button>


<button onclick="showMood('tired')">

🥺 Tired

</button>


<button onclick="showMood('sad')">

😢 Sad

</button>


<button onclick="showMood('stress')">

😵 Stressed

</button>


</div>

`);

}



function showMood(mood){


if(mood==="happy"){


openPopup(`

<h2>😊 I'm Happy For You!</h2>

<br>

<p>

Seeing you smile makes everything better.

Keep that beautiful smile.

💗

</p>

`);

}



else if(mood==="tired"){


openPopup(`

<h2>🥺 You Need Rest</h2>

<br>

<p>

You've been doing your best.

Please take a break.

Drink water.

Get some sleep.

You deserve rest.

❤️

</p>

`);

}



else if(mood==="sad"){


openPopup(`

<h2>💗 It's Okay</h2>

<br>

<p>

Bad days happen.

But remember...

You are not alone.

I'm always cheering for you.

🌸

</p>

`);

}



else{


openPopup(`

<h2>🌙 Take A Breath</h2>

<br>

<p>

Close your eyes.

Relax your mind.

One thing at a time.

Everything will be okay.

💕

</p>

`);

}


}



// ==========================================
// BREATHING EXERCISE
// ==========================================


function breathing(){


openPopup(`

<h2>🌙 Breathing Exercise</h2>

<br>


<div id="breathCircle">

4

</div>


<h3 id="breathText">

Breathe In...

</h3>


`);



let count = 4;

let phase = 0;


const number =
document.getElementById("breathCircle");


const text =
document.getElementById("breathText");



const exercise =
setInterval(()=>{


count--;


number.innerHTML=count;



if(count===0){


count=4;


phase++;



if(phase===1){


text.innerHTML=
"Hold...";


}


else if(phase===2){


text.innerHTML=
"Breathe Out...";


}


else{


clearInterval(exercise);


number.innerHTML="💗";

text.innerHTML=
"Good Job! Relax now.";


}



}



},1000);



}



// ==========================================
// SURPRISE
// ==========================================


function surprise(){


openPopup(`

<h2>🎁 A Little Surprise</h2>

<br>


<div style="font-size:100px">

💗

</div>


<br>


<p>

No matter how tired you are...

I hope you remember:

<br><br>

You are loved.

<br>

You are important.

<br>

You are appreciated.

<br><br>

Keep going.

I'm proud of you.

🌸

</p>


`);



heartExplosion();


}



// ==========================================
// HEART EXPLOSION
// ==========================================


function heartExplosion(){


for(let i=0;i<80;i++){


const heart =
document.createElement("div");


heart.innerHTML =
"💖";


heart.style.position =
"fixed";


heart.style.left =
"50%";


heart.style.top =
"50%";


heart.style.fontSize =
"25px";


heart.style.zIndex =
"99999";


document.body.appendChild(heart);



let x =
(Math.random()-0.5)*800;


let y =
(Math.random()-0.5)*800;



setTimeout(()=>{


heart.style.transform =
`translate(${x}px,${y}px)`;


heart.style.opacity=0;


heart.style.transition=
"2s";


},50);



setTimeout(()=>{


heart.remove();


},2500);



}



}

/* ==========================================
   SCRIPT.JS - PART 3 FINAL
========================================== */


// ==========================================
// LOVE TIMER
// Change the date below to your special date
// ==========================================


const loveStart =
new Date("2026-29-05");


function updateLoveTimer(){

    const now =
    new Date();


    const difference =
    now - loveStart;


    const days =
    Math.floor(
        difference /
        (1000*60*60*24)
    );


    const hours =
    Math.floor(
        (difference /
        (1000*60*60))
        %24
    );


    const minutes =
    Math.floor(
        (difference /
        (1000*60))
        %60
    );


    const seconds =
    Math.floor(
        (difference /
        1000)
        %60
    );


    const timer =
    document.getElementById("loveTimer");


    if(timer){

        timer.innerHTML =

        `💗 Together for:
        <br>
        ${days} Days
        ${hours} Hours
        ${minutes} Minutes
        ${seconds} Seconds`;

    }

}


setInterval(updateLoveTimer,1000);



// ==========================================
// AUTO SWEET MESSAGES
// ==========================================


const sweetMessages=[

"🌸 You are my favorite person.",

"💗 Please take care of yourself.",

"☕ Don't forget to rest.",

"❤️ I'm always cheering for you.",

"🌷 Your smile makes my day.",

"✨ You are doing amazing."

];


let messageNumber=0;



setInterval(()=>{


const autoMessage =
document.getElementById("autoMessage");



if(autoMessage){


autoMessage.innerHTML =
sweetMessages[messageNumber];


messageNumber++;


if(messageNumber >= sweetMessages.length){

messageNumber=0;

}


}



},3500);



// ==========================================
// NIGHT MODE
// ==========================================


function nightMode(){


document.body.classList.toggle(
"night"
);


}



// ==========================================
// GALLERY CLICK
// ==========================================


const photos =
document.querySelectorAll(".photo img");



photos.forEach(photo=>{


photo.addEventListener(
"click",
()=>{


openPopup(`

<h2>📸 Memory</h2>

<br>

<img src="${photo.src}"
style="
width:100%;
border-radius:20px;
">

`);

}

);


});



// ==========================================
// SCROLL REVEAL ANIMATION
// ==========================================


const sections =
document.querySelectorAll(
".section, .menuCard"
);



window.addEventListener(
"scroll",
()=>{


sections.forEach(section=>{


const position =
section.getBoundingClientRect()
.top;



if(position <
window.innerHeight - 100){


section.classList.add(
"fade"
);


}



});


});



// ==========================================
// MUSIC BUTTON
// ==========================================


function playMusic(){


const music =
document.getElementById(
"backgroundMusic"
);



if(music.paused){


music.play();


}


else{


music.pause();


}


}



// ==========================================
// CURRENT DATE
// ==========================================


function showDate(){


const date =
document.getElementById(
"date"
);



if(date){


date.innerHTML =
new Date()
.toDateString();


}


}


showDate();



// ==========================================
// CURSOR HEART EFFECT
// ==========================================


document.addEventListener(
"mousemove",
(e)=>{


const heart =
document.createElement(
"span"
);


heart.innerHTML="💗";


heart.style.position=
"fixed";


heart.style.left=
e.clientX+"px";


heart.style.top=
e.clientY+"px";


heart.style.pointerEvents=
"none";


heart.style.fontSize=
"15px";


heart.style.zIndex=
"9999";


heart.style.animation=
"fadeCursor 1s forwards";



document.body.appendChild(
heart
);



setTimeout(()=>{

heart.remove();

},1000);



});



// ==========================================
// CONSOLE MESSAGE
// ==========================================


console.log(
"Made with love for someone special."
);