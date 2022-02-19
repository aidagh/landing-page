$(document).ready(function () {
  $(".hamburger-menu").click(function () {
    $(".sidebar").show("200");
  });
});

$(document).ready(function () {
  $(".close__btn").click(function () {
    $(".sidebar").hide("200");
  });
});
