$(document).ready(function(){
  $("form#number").submit(function(event){
    event.preventDefault();
    var countTo = parseInt($("#countto").val());
    var countBy = parseInt($("#countby").val());
    console.log(countTo);
    console.log(countBy);
  });
});
