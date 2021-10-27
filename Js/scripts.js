$(document).ready(function() {
  $(".design-text").click(function(){
    $(".design-showing").toggle();
    $(".design-hidden").toggle();
  })
})
$(document).ready(function() {
  $(".development-text").click(function(){
    $(".development-showing").toggle();
    $(".development-hidden").toggle();
  })
})
$(document).ready(function() {
  $(".product-management-text").click(function(){
    $(".product-management-showing").toggle();
    $(".product-management-hidden").toggle();
  })
})
function submit(){
  alert("we have received your message. Thank you for reaching out to us.")
}



