var txt = document.querySelector('.read-more');
var btn = document.getElementById('btn');
var show = true;

function showMore() {
    if(show == true) {
        txt.style.display = "block";
        show = false;
        btn.innerHTML = "Minimize";
    }
    else {
        txt.style.display = "none";
        show = true;
        btn.innerHTML = "Read More";
    }
}