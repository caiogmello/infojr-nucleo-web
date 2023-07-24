var count = 0;

function compartilhar() {
    if(count%2==0)
        document.getElementById("social-medias").innerHTML = "<img src = 'images/Frame 4.png' >";
    else
        document.getElementById("social-medias").innerHTML = "<img src = '' >";
    count++;
}