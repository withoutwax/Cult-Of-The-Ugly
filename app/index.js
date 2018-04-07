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

    // Section 04
    $(".container-04").click(function() {
      $("section.container-04").removeClass("container-04").addClass("container-04-02");
    });

    // Section 05
    $(".container-05").click(function() {
      $(".container-05-article-01").removeClass("container-05-article-01").addClass("container-05-article-01-02");
      $(".container-05-article-02").removeClass("container-05-article-02").addClass("container-05-article-02-02");
    });

    // Section 06
    $(".container-06").click(function() {
      $(".container-06").removeClass("container-06").addClass("container-06-02");
      $(".container-06-article-01").removeClass(".container-06-article-01").addClass("container-06-article-01-02");
      $(".container-06-article-02").removeClass(".container-06-article-02").addClass("container-06-article-02-02");

      $(".container-07-hide").removeClass("container-07-hide").addClass("container-07");
    });


});
