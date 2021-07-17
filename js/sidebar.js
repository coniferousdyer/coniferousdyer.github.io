function openSidebar() {
    let sidebar = document.getElementById("sidebar");
    sidebar.style.width = "100%";
    sidebar.style.opacity = "1"

    setTimeout(() => {
        $('#sidebar a').css("opacity", "1");
        $('#sidebar div').css("opacity", "1");
    }, 700);
}

function closeSidebar() {
    let sidebar = document.getElementById("sidebar");
    $('#sidebar div').css("opacity", "0");
    $('#sidebar a').css("opacity", "0");

    setTimeout(() => {
        sidebar.style.width = "0";
        sidebar.style.opacity = "0"
    }, 700);
}
