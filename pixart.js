var color;

$("#set-color").click(updateC)
function updateC(evt){
  color = $("#color-field").val();
  evt.preventDefault();
  $("div.brush").css("background", color)
  console.log(color);
}

function divMaker() {
for(i = 0; i < 20; i++) {
  $("body").append("<div class ='square'></div>");
  }
}
divMaker()
