
function onImage(name, nameLink, textNameButton) { 
    document.getElementById(name).style.clipPath = 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%, 100% 0)';
    document.getElementById(nameLink).style.backgroundColor = 'rgb(4,252,220)'
    document.getElementById(textNameButton).style.paddingLeft = '30px'
}

function outImage(name, nameLink, textNameButton) {
    document.getElementById(name).style.clipPath = 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 7%, 92% 0)'
    document.getElementById(nameLink).style.backgroundColor = 'rgba(9,7,17,255)'
    document.getElementById(textNameButton).style.paddingLeft = '0px'
}