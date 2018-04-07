$(document).ready(function() {
    // Section 01
    $("#section01-cult").click(function() {
      $("#section01-cult").addClass("section01-cult");
    });
    $("#section01-of").click(function() {
      $("#section01-of").addClass("section01-of");
    });
    $("#section01-the").click(function() {
      $("#section01-the").addClass("section01-the");
    });
    $("#section01-ugly").click(function() {
      $("#section01-ugly").addClass("section01-ugly");
    });

    // Section 02
    $(".container-02").click(function() {
      $(".container-02-article-01 > #ugly").addClass("container-02-ugly");
      $(".container-02-article-02 > #beauty").addClass("container-02-beauty");
      $(".container-02-article-03 > #aesthetically").addClass("container-02-aesthetically");

      $(".container-02").addClass("container-02-01");
    });

    // Section 03
    $(".container-03").click(function() {
      $("section.container-03").removeClass("container-03").addClass("container-03-02");
    });
});
