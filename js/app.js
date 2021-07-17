tsParticles.load("tsparticles", {
    "fps_limit": 60,
    "interactivity": {
        "detectsOn": "canvas",
        "events": {
            "onClick": { "enable": true, "mode": "push" },
            "onHover": {
                "enable": true, "mode": "repulse"
            },
            "resize": true
        },
        "modes": {
            "push": { "particles_nb": 4 },
            "repulse": { "distance": 100, "duration": 0.4 }
        }
    },
    "particles": {
        "color": { "value": "#ffffff" },
        "links": {
            "color": "#ffffff",
            "distance": 150,
            "enable": true,
            "opacity": 0.2,
            "width": 1
        },
        "move": {
            "bounce": false,
            "direction": "none",
            "enable": true,
            "outMode": "out",
            "random": false,
            "speed": 1,
            "straight": false
        },
        "number": {
            "density": { "enable": true, "area": 800 },
            "value": 100
        },
        "opacity": { "value": 0.5 },
        "shape": { "type": "circle" },
        "size": {
            "random": true,
            "value": 2
        }
    },
    "detectRetina": true
});