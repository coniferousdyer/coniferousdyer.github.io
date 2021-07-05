function changeFeatures(x) {
    if (x.matches) {
        $('.new-addition').css("font-size", "3vw");
        $('#new-message-addition').css("top", "36vw");
        $('nav').html("<div onclick='openSidebar()' id='hamburger-icon'>&#9776;</div>");
    }
    else {
        $('.new-addition').css("font-size", "1.4vw");
        $('#new-message-addition').css("top", "21vw");
        $('nav').html(
            '<a href="#welcome"><i class="fa fa-home" aria-hidden="true"></i></a><a href="#">About</a><a href="#">Skills</a><a href="#">Projects</a><a href="#">Contact</a><a href="#">Social Media</a>'
        );
    }
}

let x = window.matchMedia("(max-width: 480px) and (orientation:portrait)");
changeFeatures(x);
x.addListener(changeFeatures);

