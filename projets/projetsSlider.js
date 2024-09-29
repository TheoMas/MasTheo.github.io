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
    if(imgId-1 == 0){
        document.getElementById(1).classList.add("goDowntoBot");
        document.getElementById(5).classList.add("goDowntoMiddle");
        document.getElementById(4).classList.add("goDowntoTop");
        document.getElementById(2).classList.add("goDownfromBot");
        setTimeout(function() {
            document.getElementById(1).style.top = "90%";
            document.getElementById(5).style.top = "20%";
            document.getElementById(4).style.top = "-50%";
            document.getElementById(2).style.top = "100%";
            document.getElementById(1).classList.remove("goDowntoBot");
            document.getElementById(5).classList.remove("goDowntoMiddle");
            document.getElementById(4).classList.remove("goDowntoTop");
            document.getElementById(2).classList.remove("goDownfromBot");
            imgId = 5;
            console.log(imgId)
        }, 500);
    }
    else if(imgId-2 == 0){
        document.getElementById(2).classList.add("goDowntoBot");
        document.getElementById(1).classList.add("goDowntoMiddle");
        document.getElementById(5).classList.add("goDowntoTop");
        document.getElementById(3).classList.add("goDownfromBot");
        setTimeout(function() {
            document.getElementById(2).style.top = "90%";
            document.getElementById(1).style.top = "20%";
            document.getElementById(5).style.top = "-50%";
            document.getElementById(3).style.top = "100%";
            document.getElementById(2).classList.remove("goDowntoBot");
            document.getElementById(1).classList.remove("goDowntoMiddle");
            document.getElementById(5).classList.remove("goDowntoTop");
            document.getElementById(3).classList.remove("goDownfromBot");
            imgId -= 1;
            console.log(imgId)
        }, 500);
    }
    else if(imgId+1 == 6){
        document.getElementById(5).classList.add("goDowntoBot");
        document.getElementById(4).classList.add("goDowntoMiddle");
        document.getElementById(3).classList.add("goDowntoTop");
        document.getElementById(1).classList.add("goDownfromBot");
        setTimeout(function() {
            document.getElementById(5).style.top = "90%";
            document.getElementById(4).style.top = "20%";
            document.getElementById(3).style.top = "-50%";
            document.getElementById(1).style.top = "100%";
            document.getElementById(5).classList.remove("goDowntoBot");
            document.getElementById(4).classList.remove("goDowntoMiddle");
            document.getElementById(3).classList.remove("goDowntoTop");
            document.getElementById(1).classList.remove("goDownfromBot");
            imgId -= 1;
            console.log(imgId)
        }, 500);
    }
    else{
        document.getElementById(imgId).classList.add("goDowntoBot");
        document.getElementById(imgId-1).classList.add("goDowntoMiddle");
        document.getElementById(imgId-2).classList.add("goDowntoTop");
        document.getElementById(imgId+1).classList.add("goDownfromBot");
        setTimeout(function() {
            document.getElementById(imgId).style.top = "90%";
            document.getElementById(imgId-1).style.top = "20%";
            document.getElementById(imgId-2).style.top = "-50%";
            document.getElementById(imgId+1).style.top = "-100%";
            document.getElementById(imgId).classList.remove("goDowntoBot");
            document.getElementById(imgId-1).classList.remove("goDowntoMiddle");
            document.getElementById(imgId-2).classList.remove("goDowntoTop");
            document.getElementById(imgId+1).classList.remove("goDownfromBot");
            imgId = imgId-1;
            console.log(imgId)
        }, 500);
    }
    setTimeout(function(){
        document.getElementById("counter").textContent = `${imgId}/5`;
        changeText();
    }, 500)
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
        document.getElementById("counter").textContent = `${imgId}/5`;
        changeText();
    }, 500)
}

function changeText(){
    if(document.getElementById("docTitle").innerText == "Projets Professionnels")
    {
        switch(imgId)
        {
            case 1:
                document.getElementById("title").textContent = `1`;
                document.getElementById("text").textContent = `projetpro`;
                document.getElementById("buttonLink").setAttribute("href", "projet1.html");
                break;
            case 2:
                document.getElementById("title").innerHTML = `2`;
                document.getElementById("text").innerHTML = `dada`;
                document.getElementById("buttonLink").setAttribute("href", "projet1.html");
                break;
            case 3:
                document.getElementById("title").innerHTML = `3`;
                document.getElementById("text").innerHTML = `dzadad`;
                document.getElementById("buttonLink").setAttribute("href", "projet1.html");
                break;
            case 4:
                document.getElementById("title").innerHTML = `4`;
                document.getElementById("text").innerHTML = `vrebez`;
                document.getElementById("buttonLink").setAttribute("href", "projet1.html");
                break;
            case 5:
                document.getElementById("title").innerHTML = `5`;
                document.getElementById("text").innerHTML = `kukt`;
                document.getElementById("buttonLink").setAttribute("href", "projet1.html");
                break;
        }
    }

    if(document.getElementById("docTitle").innerText == "Projets Personnels")
    {
        switch(imgId)
        {
            case 1:
                document.getElementById("title").textContent = `1`;
                document.getElementById("text").textContent = `projetperso`;
                document.getElementById("buttonLink").setAttribute("href", "projet1.html");
                break;
            case 2:
                document.getElementById("title").innerHTML = `2`;
                document.getElementById("text").innerHTML = `dada`;
                document.getElementById("buttonLink").setAttribute("href", "projet1.html");
                break;
            case 3:
                document.getElementById("title").innerHTML = `3`;
                document.getElementById("text").innerHTML = `dzadad`;
                document.getElementById("buttonLink").setAttribute("href", "projet1.html");
                break;
            case 4:
                document.getElementById("title").innerHTML = `4`;
                document.getElementById("text").innerHTML = `vrebez`;
                document.getElementById("buttonLink").setAttribute("href", "projet1.html");
                break;
            case 5:
                document.getElementById("title").innerHTML = `5`;
                document.getElementById("text").innerHTML = `kukt`;
                document.getElementById("buttonLink").setAttribute("href", "projet1.html");
                break;
        }
    }
}