$(function(){
  $("button").click(function(){
    $(".modal-body > div").hide();






    var answer= $("select").val();
    console.log(answer);

    if(answer === "lucille"){
      $("#lucille").show();
    }
    else if(answer === "lindsey"){
      $("#lindsey").show();
    }
    else if(answer === "tobias"){
      $("#tobias").show();
    }
    else if(answer === "gob"){
      $("#gob").show();
    }
    else if(answer === "anyong"){
      $("#anyong").show();
    }
    else if(answer === "maybe"){
      $("#maybe").show();
    }
    else if(answer === "michael"){
      $("#michael").show();
    }
    else if(answer === "gmbluth"){
      $("#gmbluth").show();
    }
    else if(answer === "buster"){
      $("#").show();
    }
  });
});
