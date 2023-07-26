import "@fontsource/roboto";
import "@fontsource/roboto-mono";
import "@fontsource/crafty-girls";
import "@fontsource/gloria-hallelujah";
import "@fontsource/hachi-maru-pop";
import "@fontsource/opendyslexic";

// Interactive elements
document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Add a click event on each of them
  $navbarBurgers.forEach(el => {
    el.addEventListener('click', () => {

      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');

    });
  });

  // Get all "navbar-dropdown" elements
  const $navbarDropdowns = Array.prototype.slice.call(document.querySelectorAll('.navbar-dropdown'), 0);

  // Add a click event on each of them
  $navbarDropdowns.forEach(el => {
    el.addEventListener('click', () => {

      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');

    });
  });

});