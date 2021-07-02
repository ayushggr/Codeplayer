function updateOutput() {
  $("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#cssPanel").val() + "</style></head><body>" + $("#htmlPanel").val() + "</body></html>");
};
$(".nav-links").hover(function(){
  $(this).addClass("highlighted-button");
}, function(){
  $(this).removeClass("highlighted-button");
});
$(".nav-links").click(function(){
  $(this).toggleClass("active");
  $(this).removeClass("highlighted-button");
  var panelId = $(this).attr("id")+"Panel";
  $("#"+panelId).toggleClass("hidden");
  var numberOfActivePanels = 4 - $(".hidden").length;
  $(".textContainer").width(($(window).width()/numberOfActivePanels)-3);
});
$(".textContainer").height($(window).height()-$(".nav").height()-6);
$(".textContainer").width(($(window).width()/2)-3);
updateOutput();
$("textarea").on('change keyup paste', function() {
  updateOutput();
});
$("#javascript-run").click(function (){
  document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val());
  $(this).toggleClass("active");
  $(this).removeClass("highlighted-button");
});