$(function(){
  $("button").click(function(){
    $(".modal-body > div").hide();

    // generate random number to be used as child selector in css. will only grab infor from one select element on quiz :(
    var min = 1;
    var max = 5;
    var random = Math.floor(Math.random() * (max - min + 1)) + min;

    console.log(random);

    if (random === 1){
      var answer= $("select#drink").val();
    }
    else if (random === 2){
      var answer= $("select#pasttime").val();
    }
    else if (random === 3){
      var answer= $("select#nude").val();
    }
    else if (random === 4){
      var answer= $("select#embarass").val();
    }
    else if (random === 5){
      var answer= $("select#hello").val();
    }

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
      $("#buster").show();
    }
  });
});
