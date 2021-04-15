// jQuery(document).ready(function() {
//   jQuery("h1").click(function() {
//     alert("This is a heading tag")
//     alert("I have just said this is a heading tag")
//   });
  
//   jQuery("p").click(function() {
//     alert("This is a paragraph")
//   });
  
//   jQuery("img").click(function() {
//     alert("This is an image")
//   });
  
// })

//Use to create toggle effect
// $(document).ready(function() {
//   $("p").click(function() {
//     $(".walrus-showing").toggle();
//     $(".walrus-hidden").toggle();
//   });
// });

//To include the clickable class that we just added on CSS, which then calls on the next two functions to toggle
// $(document).ready(function() {
//   $(".clickable").click(function() {
//     $(".walrus-showing").toggle();
//     $(".walrus-hidden").toggle();
//   });
// });

//trying methods on W3 schools
$(document).ready(function() {
  $(".newpara").dblclick(function() {
    $(".newpara").hide();
  });
});

//working on adding and removing classes on jQuery. .addClass method () adds one or more classes to the selected element, does not remove existing classes. Before adding to CSS, changes do not reflect. Remember, jQuery handles all events on a page, cSS styles

$("button#green").click(function() {
  $("body").removeClass();
  $("body").addClass("green-background");
});

$("button#yellow").click(function() {
  $("body").removeClass();
  $("body").addClass("yellow-background");
});

$("button#red").click(function() {
  $("body").removeClass();
  $("body").addClass("red-background");
});