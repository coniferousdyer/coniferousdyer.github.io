let prevPos = window.pageYOffset;

window.onscroll = () => {
    let currentPos = window.pageYOffset;

    if (prevPos < currentPos) {
        $('nav').css("margin-top", "-10vw")
    }
    else {
        $('nav').css("margin-top", "2vw")
    }

    prevPos = currentPos;

    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        $('nav').css("background-color", "rgba(0, 0, 0, 0.5)")
    }
    else {
        $('nav').css("background-color", "transparent")
    }
}