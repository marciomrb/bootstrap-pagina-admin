var button = document.querySelectorAll('a.dropdown-item');


button.forEach(function(button) {
    button.addEventListener('click', function() {
        var dropdown = this.nextElementSibling;
        if (dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
            dropdown.classList.remove('active');
        }
        else {
            dropdown.classList.add('show');
            dropdown.classList.add('active');
        }
    });
});
