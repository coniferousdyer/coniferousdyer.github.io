function changeFeatures(x) {
    if (x.matches) {
        $('nav').html("<div onclick='openSidebar()' id='hamburger-icon'>&#9776;</div>");
    }
    else {
        $('nav').html(
            '<a href="#"><i class="fa fa-home" aria-hidden="true"></i></a><a href="#">ABOUT</a><a href="#">SKILLS</a><a href="#">PROJECTS</a><a href="#">CONTACT</a>'
        );
    }
}

let x = window.matchMedia("(max-width: 480px) and (orientation:portrait)");
changeFeatures(x);
x.addListener(changeFeatures);