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