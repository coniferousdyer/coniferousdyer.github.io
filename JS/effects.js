let prevPos = window.pageYOffset;
window.onscroll = () => {
    let currentPos = window.pageYOffset;
    if (prevPos > currentPos)
        document.getElementsByTagName("nav")[0].style.top = "0";
    else
        document.getElementsByTagName("nav")[0].style.top = "-10%";

    prevPos = currentPos;
};