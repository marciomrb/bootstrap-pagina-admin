const alldropdown = document.querySelectorAll("#sidebar .side-dropdown");

alldropdown.forEach(iten => {
    const a = item.parentElement.querySelector("a:first-child");
    a.addEventListener("click", function(e) {
        e.preventDefault();
        this.classList.toogle("active");
        item.classList.toogle("show");


    })



})