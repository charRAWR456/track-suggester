$(document).ready(function(){

  $("#submit-button").click(function() {
    var cSharp = 0;
    var java = 0;
    var css = 0;
    var php = 0;
    var ruby = 0;
    var name =$("#name").val();
    var type = $("#type").val();


    if (type == "frontEnd"){
      css+=1;
    }
    else {
      cSharp += 1;
      java += 1;
      php += 1;
      ruby += 1;
    }

    if ($("input:radio[name=language]:checked").val() == "cSharp") {
      cSharp += 1;
    } else if($("input:radio[name=language]:checked").val() == "java") {
      java += 1;
    } else if($("input:radio[name=language]:checked").val() == "css") {
      css += 1;
    } else if ($("input:radio[name=language]:checked").val() == "php") {
      php += 1;
    } else if ($("input:radio[name=language]:checked").val() == "ruby") {
      ruby += 1;
    }

    if ($("input:radio[name=task]:checked").val() == "cSharp") {
      cSharp += 1;
    } else if($("input:radio[name=task]:checked").val() == "java") {
      java += 1;
    } else if($("input:radio[name=task]:checked").val() == "css") {
      css += 1;
    } else if ($("input:radio[name=task]:checked").val() == "php") {
      php += 1;
    } else if ($("input:radio[name=task]:checked").val() == "ruby") {
      ruby += 1;
    }

    if ($("input:radio[name=environment]:checked").val() == "enterprise") {
      java += 1;
      cSharp += 1;
      php += 1;
      css += 1;
    } else if($("input:radio[name=environment]:checked").val() == "government") {
      cSharp += 1;
      php += 1;
      css += 1;
    } else if($("input:radio[name=environment]:checked").val() == "startUp") {
      ruby += 1;
      css += 1;
    }

    if ($("input:radio[name=workPlace]:checked").val() == "intel") {
      php += 1;
      css += 1;
    } else if($("input:radio[name=workPlace]:checked").val() == "livingSocial") {
      ruby += 1;
      css += 1;
    } else if($("input:radio[name=workPlace]:checked").val() == "nike") {
      java += 1;
      css += 1;
    } else if ($("input:radio[name=workPlace]:checked").val() == "microsoft") {
      cSharp += 1;
      css += 1;
    }

    if (cSharp > php && css && java && ruby){
      alert("Hi "+ name+"! based off your answers you should take the C#/.NET track!" );
    }else if(php > cSharp && css && java && ruby){
      alert("Hi "+ name+"! based off your answers you should take the PHP/Drupal track!" );
    }else if(java > cSharp && css && php && ruby){
      alert("Hi "+ name+"! based off your answers you should take the Java/Android track!" );
    }else if(ruby > cSharp && css && java && php){
      alert("Hi "+ name+"! based off your answers you should takethe Ruby/Rails track!" );
    }
    else{
      alert("Hi "+ name+"! based off your answers you should take the CSS/Design track!" );
    }


    alert("Hi "+ name+"! based off your answers you should take"+ " cSharp = " + cSharp + " java = " + java + " CSS = " + css + " PHP = " + php + " ruby = " + ruby)
    });

  });
