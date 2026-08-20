(function () {
  var toggle = document.querySelector(".menu-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      document.body.classList.toggle("nav-open");
      var expanded = document.body.classList.contains("nav-open");
      toggle.setAttribute("aria-expanded", String(expanded));
    });
  }

  document.querySelectorAll(".primary-nav a").forEach(function (link) {
    link.addEventListener("click", function () {
      document.body.classList.remove("nav-open");
    });
  });

  var tabButtons = document.querySelectorAll(".install-tabs button");
  tabButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var target = btn.getAttribute("data-target");
      document.querySelectorAll(".install-tabs button").forEach(function (b) {
        b.setAttribute("aria-selected", "false");
      });
      document.querySelectorAll(".install-panel").forEach(function (p) {
        p.classList.remove("active");
      });
      btn.setAttribute("aria-selected", "true");
      var panel = document.getElementById(target);
      if (panel) panel.classList.add("active");
    });
  });
})();
