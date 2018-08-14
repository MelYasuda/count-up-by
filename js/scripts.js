$(document).ready(function(){
  $("form#number").submit(function(event){
    event.preventDefault();
    var countTo = parseInt($("#countto").val());
    var countBy = parseInt($("#countby").val());

    if (isNaN(countTo) || isNaN(countBy)) {
      alert("put numbers");
    }  else if (countTo < 0 || countBy < 0){
        alert("put positive numbers");
    } else if (countTo < countBy){
        alert("Count by number needs to be smaller than the count to number");
    } else {
      for (var index = countBy; index <= countTo; index += countBy) {
        $("#result").append(" " + index + " ");
      }
    }
  });
});
