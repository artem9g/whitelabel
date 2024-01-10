$(document).foundation()
//button description
$("[data-cardSelectButton]").click(function () {
  $(this).parent("[data-cardSelect]").toggleClass("is-selected")
})
