function changeFeatures(x) {
    if (x.matches) {
        $('nav').html("<div onclick='openSidebar()' id='hamburger-icon'>&#9776;</div>");
        $('#mes3').html("Press anywhere to find out more about me!")
    }
    else {
        $('nav').html(
            '<a href="#welcome"><i class="fa fa-home" aria-hidden="true"></i></a><a href="#">About</a><a href="#">Skills</a><a href="#">Projects</a><a href="#">Contact</a><a href="#">Social Media</a>'
        );
        $('#mes3').html("Click anywhere to find out more about me!")
    }
}

let x = window.matchMedia("(max-width: 480px) and (orientation:portrait)");
changeFeatures(x);
x.addListener(changeFeatures);

