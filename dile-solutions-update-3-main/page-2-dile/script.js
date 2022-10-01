// sidebar toggle mechanism
var el = document.getElementById("sidebar");
var toggleButton = document.getElementById("sidebarCollapse");

toggleButton.onclick = function () {
  el.classList.toggle("toggled");
};

// sidebar dropdown mechanism
$(document).ready(function () {
  $(".sidebar-menu > li.have-children a").on("click", function (i) {
    i.preventDefault();
    if (!$(this).parent().hasClass("active")) {
      $(".sidebar-menu li ul").slideUp();
      $(this).next().slideToggle();
      $(".sidebar-menu li").removeClass("active");
      $(this).parent().addClass("active");
    } else {
      $(this).next().slideToggle();
      $(".sidebar-menu li").removeClass("active");
    }
  });
});

// anyword switch toggle
let mainContent = document.querySelector("#anyword");

document
  .querySelector(".toggle-state input")
  .addEventListener("change", (e) => {
    mainContent.style.display = e.target.checked ? "block" : "none";
  });
