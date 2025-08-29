function popupold() {
    mywindow = window.open("popupold/index1.html", "mywindow", "location=1,status=1,scrollbars=1, width=400,height=300");
    mywindow.moveTo(20,10)
}

function playVideoo() {

    let vid = document.getElementById("beach");

    if (vid.paused) {
        vid.play();

    } else {
        vid.pause();
    }
}


function playVideo() {

    let vid = document.getElementById("skiing");

    if (vid.paused) {
        vid.play();

    } else {
        vid.pause();
    }
}


var i = 1; // Start point - the beginning of the 'index'
var time = 2000; //speed in ms
var images = [];// empty array


images[0] = 'images/VITAL OASIS.png';
images[1] = 'images/chapter1.png';
images[2] = 'images/chapter1.1.png';
images[3] = 'images/chapter1.2.png';
images[4] = 'images/chapter1.3.png';
images[5] = 'images/chapter1.4.png';
images[6] = 'images/chapter1.5.png';
images[7] = 'images/chapter1.6.png';
images[8] = 'images/chapter1.7.png';
images[9] = 'images/chapter1.8.png';



function changeImg(){
        
        
document.getElementById("slide1").setAttribute("src",images[i]); 
        
		if(i < images.length ){  
			i++;
		} else {
			destroyElements()
		}

setTimeout("changeImg()", time); 
    
    
	}

    function destroyElements() {

    document.getElementById("slide1").style.opacity = "0";
    document.getElementById("text1").style.opacity = "0";
    var Audio = document.getElementById("AudioSlide1");
   Audio.pause(); 
   audio.currentTime = 0;

    }


var x = 0;



 function words() { 

    var words = new Array()

    words[0] = "Welcome back to my channel";
    words[1] = "Just got my package from Vital Oasis!";
    words[2] = "placed the patch and got my vitals checked overnight";
    words[3] = "so apparently I have low Iron levels, aka iron deficient?! ";
    words[4] = "I have never felt that way but I guess the data doesn't lie";
    words[5] = "They automatically ordered me corresponding medication";
    words[6] = "My Oasis patch curated the perfect daily schedule for me";
    words[7] = "A lot of my favourite things are not good for me, I didn't know that!";
    words[8] = "Had to cancel a lot of plans, my boyfriend is not happy";
    words[9] = "but time to change and live my best life with Vital Oasis!";

     
      x = x + 1;


    document.getElementById("text1").innerHTML = words[x];
   
     
   if (x == 9) {
       
     x = -1;
       
   }

   setTimeout("words()", time); //setimeout runs the function every 1000 ms

   

     }
  
function disappear() {

    document.getElementById("playButton").style.opacity = "0";

}


function music1() {

    var Audio = document.getElementById("Audioplay");
    Audio.play();
}

function popup1() {

mywindow = window.open("popup1.html", "mywindow", "location=1,status=1,scrollbars=1, width=400,height=300");
mywindow.moveTo(20,10)

}


function changetext1() {

    document.getElementById('firstmonth').
    innerHTML = " <b>User Joyce first vitals assessment</b> <br> <br> achieved an average health score of 75. Lifestyle not meeting optimal health criteria. Social interactions not meeting optimal health criteria.relationships still under monitoring and assessment - no further actions will be implemented at this stage. <br> Restrictions and plans implemented with strict orders. <br> next assessment in 3 months.";

    var p = document.getElementById('firstmonth');
    p.style.fontFamily = "monospace";
    p.style.color = "#9c2020ff";

}


function changetext() {


    document.getElementById('emailtext').innerHTML = "<b>User204:</b> OMG You are in that prestigious club! So jealous!!! <br> <br> <b>Yogateacher:</b> My favourite influencer that inspired my health journey! <br> <br> <b>Jessialt:</b> Got my patch bc of your content, so happy for you <br> <br> <b>Coach333:</b> She joining the higher society now, see you in the club!";


}


function changeBackground() {
    document.body.style.backgroundImage = "url('images/2background.png')";
    document.body.style.backgroundSize = "cover"; 
}

function changetext2() {

    document.getElementById('fourthmonth').
    innerHTML = " <b>User Joyce second vitals assessment</b> <br> <br> achieved a higher health score of 82. Lifestyle is improving but not meeting optimal health criteria. Bio Data shows stable improvements. <br> Minor issues of increasing stress level and emotion stability. Medication prescripted. Not to be concerned. <br> <br> Relationship assessed and confirmed to be an ineffective factor towards optimal health goal. Social interactions to be reduced. <br> next assessment in 3 months.";

    var p = document.getElementById('fourthmonth');
    p.style.fontFamily = "monospace";
    p.style.color = "#9c2020ff";

}

function playAudioCall() {
    var audio = document.getElementById("phonecall");

     if (audio.paused) {
        audio.play();

    } else {
        audio.pause();
    }
}


var currentpic = 0;


function nextimg() {
    var images = new Array()
    images[0] = 'images/1m.png';
    images[1] = 'images/2m.png';
    images[2] = 'images/3m.png';
    images[3] = 'images/4m.png';
    images[4] = 'images/5m.png';


    var lastpic = images.length - 1;
    if (currentpic == lastpic) {
        currentpic = 0;
        document.getElementById('imgslide').src = images[currentpic];
    } else {
        currentpic++;
        document.getElementById('imgslide').src = images[currentpic];
    }
}

var currentsentence = 0;

function words2() {
    var words2 = new Array()

    words2[0] = "Perfect Health report this month";
    words2[1] = "Vital Oasis upgraded my insurance plan to the best one";
    words2[2] = "and I even got an exclusive invite to the latest medical testing trial";
    words2[3] = "Vital Oasis has been a game changer for me ";
    words2[4] = "my stress levels are high due to some minor relationship changes, but i got medications";
    

    var lastwords = words2.length - 1;
     

    if (currentsentence < lastwords) {
        currentsentence++;
        document.getElementById('text2').innerHTML = words2[currentsentence];
    } else {
        destroyElements2()
      
    }
 
}

 function destroyElements2() {

    document.getElementById("imgslide").style.opacity = "0";
    document.getElementById("text2").style.opacity = "0";
    }


function changeimg() {

  document.getElementById("health").src = "images/data health.png";
}

function changeimg2() {

  document.getElementById("food").src = "images/6.png";
}


function ending1() {

mywindow = window.open("ending1.html", "mywindow", "location=1,status=1,scrollbars=1, width=100vh,height=100vw");
mywindow.moveTo(10,10)

}


function ending2() {

mywindow = window.open("ending2.html", "mywindow", "location=1,status=1,scrollbars=1, width=600,height=700");
mywindow.moveTo(10,10)

}

function cancelEvent() {


    document.getElementById('cancel').innerHTML = "Vital Oasis has cancelled your scheduled event. Your health is our priority. <br> <br> health score +3 for compliances with health plans. ";

}

function happyendingmusic() {

    var audio = document.getElementById("happyending");

     if (audio.paused) {
        audio.play();

    } else {
        audio.pause();
    }
}

function sadendingmusic() {

    var audio = document.getElementById("sadending");

     if (audio.paused) {
        audio.play();

    } else {
        audio.pause();
    }
}



