let prevPos = window.pageYOffset;

window.onscroll = function () {
    let currentPos = window.pageYOffset;
    if (prevPos > currentPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-10vw";
    }

    prevPos = currentPos;

    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        document.getElementById("navbar").style.backgroundColor = "rgba(0, 0, 0, 0.5)"
    }
    else {
        document.getElementById("navbar").style.backgroundColor = "transparent"
    }
}

function fadeInNavbar() {
    setTimeout(() => {
        document.getElementById("navbar").style.opacity = "1";
    }, 2500);
}