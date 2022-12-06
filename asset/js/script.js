//modal
$(".learn-more").click(function () {
  var modal = $(this).val();
  $(`#${modal}`).removeAttr("class").addClass('modal_container one');
  $("body").addClass("modal-active");
});

$(".modal_container").click(function () {
  $(this).addClass("out");
  $("body").removeClass("modal-active");
});