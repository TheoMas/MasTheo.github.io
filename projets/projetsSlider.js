var imgId = 1
window.onload = resetId;
window.onload = initializeImg;

function resetId() {
    imgId = 1;
}

function initializeImg(){
    document.getElementById("1").style.top = "20%";
    document.getElementById("5").style.top = "-50%";
    document.getElementById("2").style.top = "90%";
    console.log(imgId)
}

function goUp(){
    // si on vas vers le haut depuis l'img 5 on repars a l'img 1
    document.getElementById(imgId).style.animation = "goUptoTop"
    document.getElementById(imgId+1).style.animation = "goUpfromTop"
    document.getElementById(imgId-1).style.animation = "goUptoMiddle"
}

function goDown(){
    if(imgId-1 == 0){
        document.getElementById(1).classList.add("goUptoTop");
        document.getElementById(2).classList.add("goUptoMiddle");
        document.getElementById(3).classList.add("goUptoBottom");
        document.getElementById(5).classList.add("goUpfromTop");
        setTimeout(function() {
            document.getElementById(1).style.top = "-50%";
            document.getElementById(2).style.top = "20%";
            document.getElementById(3).style.top = "90%";
            document.getElementById(5).style.top = "-200%";
            document.getElementById(1).classList.remove("goUptoTop");
            document.getElementById(2).classList.remove("goUptoMiddle");
            document.getElementById(3).classList.remove("goUptoBottom");
            document.getElementById(5).classList.remove("goUpfromTop");
            imgId += 1;
            console.log(imgId)
        }, 500);
    }
    else if(imgId+2 == 6){
        document.getElementById(4).classList.add("goUptoTop")
        document.getElementById(5).classList.add("goUptoMiddle")
        document.getElementById(1).classList.add("goUptoBottom")
        document.getElementById(3).classList.add("goUpfromTop")
        setTimeout(function() {
            document.getElementById(4).style.top = "-50%"
            document.getElementById(5).style.top = "20%"
            document.getElementById(1).style.top = "90%"
            document.getElementById(3).style.top = "-200%"
            document.getElementById(4).classList.remove("goUptoTop")
            document.getElementById(5).classList.remove("goUptoMiddle")
            document.getElementById(1).classList.remove("goUptoBottom")
            document.getElementById(3).classList.remove("goUpfromTop")
            imgId += 1;
        }, 500);
    }
    else if(imgId+1 == 6){
        document.getElementById(5).classList.add("goUptoTop")
        document.getElementById(1).classList.add("goUptoMiddle")
        document.getElementById(2).classList.add("goUptoBottom")
        document.getElementById(4).classList.add("goUpfromTop")
        setTimeout(function() {
            document.getElementById(5).style.top = "-50%"
            document.getElementById(1).style.top = "20%"
            document.getElementById(2).style.top = "90%"
            document.getElementById(4).style.top = "-200%"
            document.getElementById(5).classList.remove("goUptoTop")
            document.getElementById(1).classList.remove("goUptoMiddle")
            document.getElementById(2).classList.remove("goUptoBottom")
            document.getElementById(4).classList.remove("goUpfromTop")
            imgId = 1;
        }, 500);
    }
    else{
        document.getElementById(imgId).classList.add("goUptoTop")
        document.getElementById(imgId+1).classList.add("goUptoMiddle")
        document.getElementById(imgId+2).classList.add("goUptoBottom")
        document.getElementById(imgId-1).classList.add("goUpfromTop")
        setTimeout(function() {
            document.getElementById(imgId).style.top = "-50%"
            document.getElementById(imgId+1).style.top = "20%"
            document.getElementById(imgId+2).style.top = "90%"
            document.getElementById(imgId-1).style.top = "-200%"
            document.getElementById(imgId).classList.remove("goUptoTop")
            document.getElementById(imgId+1).classList.remove("goUptoMiddle")
            document.getElementById(imgId+2).classList.remove("goUptoBottom")
            document.getElementById(imgId-1).classList.remove("goUpfromTop")
            imgId += 1;
            console.log(imgId)
        }, 500);
    }
    setTimeout(function(){
        document.getElementById("counter").innerHTML = `${imgId}/5`;
    }, 500)
}