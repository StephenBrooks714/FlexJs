// dropdown menu
function toggleDropdown() {
    document.getElementById("dropdownMenu").classList.toggle("show");

    if (document.getElementById("dropdownMenu").classList.contains("show")) {
        document.getElementById("dropdownMenu").style.opacity = "1";
    } else {
        document.getElementById("dropdownMenu").style.opacity = "0";
    }
}

toggleDropdown()