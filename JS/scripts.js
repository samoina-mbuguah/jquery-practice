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

$(document).ready(function() {
  $("p").click(function() {
    $(".walrus-showing").toggle();
    $(".walrus-hidden").toggle();
  });
});