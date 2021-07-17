setTimeout(function expandHeader() {
    document.getElementById("header").style.width = "48%";
    setTimeout(() => {
        $('nav').css("opacity", "1")
    }, 2000);
}, 500);