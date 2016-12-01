$(document).ready(function() {
  $("#AddItem").click(function(event){
    event.preventDefault();
  var inputText=$("#shopping-list-entry").val();
  var output="<li><span class='shopping-item'>" +inputText+"</span><div class='shopping-item-controls'><button class='shopping-item-toggle'><span class='button-label'>check</span></button><button class='shopping-item-delete'><span class='button-label'>delete</span></button></div></li>"
  $(".shopping-list").append(output);
  registerToggleEvent();
});
function registerToggleEvent() {
  $(".shopping-item-toggle").click(function(event){
    var parent=$(this).parent().parent();
     var span=parent.find("span");
     span.addClass("shopping-item__checked");
    });
function registerToggleEvent() {
    $(".shopping-item-delete").click(function(event){
      var parent=$(this).parent().parent();
      var span=parent.find("span");
      span.addClass("shopping-item__checked");
      registerToggleEvent();
    });
};
