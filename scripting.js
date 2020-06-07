function hide1() {

    animate("step-1")
}

function animate(id) {
    var elem = document.getElementById(id);
    var pos = 0;
    var id = setInterval(frame, 10);

    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}