window.onload = initLinks;

var myPix = new Array("images/step-1.jpg","images/step-2.jpg","images/step-3.jpg","images/step-4.jpg");
var thisPic = 0;

function initLinks(){
    document.getElementById("nextLink").onclick = processNext;
    }

function processNext(){
    thisPic++;
        if(thisPic == myPix.length){
            thisPic = 0;
            }
            document.getElementById("myPicture").src = myPix[thisPic];
            return false;
    }