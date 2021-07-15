function changeFeatures(x) {
    if (x.matches) {
        $('#header p').html("I am a Computer Science and Engineering student at International Institute of Technology, Hyderabad, India. I am passionate about coding and development.");
    }
    else {
        $('#header p').html("I am a Computer Science and Engineering student at International Institute of Technology, Hyderabad, India. I am passionate about coding, development and using my skills to solve real-world problems. I am always looking to broaden my horizons. When I am not coding, I am usually playing a game of FIFA or humming to Avicii.");
    }
}

let x = window.matchMedia("(max-width: 480px) and (orientation:portrait)");
changeFeatures(x);
x.addListener(changeFeatures);