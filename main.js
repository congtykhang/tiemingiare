document.addEventListener("DOMContentLoaded", function () {
    // Tự động tải Header
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-placeholder").innerHTML = data;
            
            // Kích hoạt chức năng Menu Mobile ngay sau khi nạp xong Header
            const mobileMenu = document.getElementById("mobile-menu");
            const navLinks = document.getElementById("nav-links");
            const dropBtn = document.querySelector(".dropbtn");
            const dropdownContent = document.querySelector(".dropdown-content");

            if (mobileMenu) {
                mobileMenu.addEventListener("click", function () {
                    navLinks.classList.toggle("active");
                    mobileMenu.classList.toggle("is-active");
                });
            }

            if (dropBtn) {
                dropBtn.addEventListener("click", function (e) {
                    if (window.innerWidth <= 768) {
                        e.preventDefault();
                        dropdownContent.classList.toggle("show");
                    }
                });
            }
        });

    // Tự động tải Footer
    fetch("footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-placeholder").innerHTML = data;
        });
});
