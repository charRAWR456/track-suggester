(document).ready(function(){

  $("#submitButton").click(function() {
    var cSharp = 0;
    var java = 0;
    var css = 0;
    var php = 0;
    var ruby = 0;
    var type = $("#type").val();

    if ($(type) == "cSharp"){
      alert("yes")
    };
    else {alert("no")
};
    if ($("input:radio[name=language]:checked").val() == "cSharp") {
        cSharp += 1;
      }
        else if($("input:radio[name=language]:checked").val() == "java") {
            java += 1;
          }
            else if($("input:radio[name=language]:checked").val() == "css") {
                css += 1;
              }
                else if ($("input:radio[name=language]:checked").val() == "php") {
                    php += 1;
                  }
                    else ($("input:radio[name=language]:checked").val() == "ruby") {
                        ruby += 1;
                      }

    if ($("input:radio[name=language]:checked").val() == "cSharp") {
        cSharp += 1;
      }
        else if($("input:radio[name=language]:checked").val() == "java") {
            java += 1;
          }
            else if($("input:radio[name=language]:checked").val() == "css") {
                css += 1;
              }
                else if ($("input:radio[name=language]:checked").val() == "php") {
                    php += 1;
                  }
                    else ($("input:radio[name=language]:checked").val() == "ruby") {
                        ruby += 1;
                      }
    if ($("input:radio[name=task]:checked").val() == "cSharp") {
        cSharp += 1;
      }
        else if($("input:radio[name=task]:checked").val() == "java") {
            java += 1;
          }
            else if($("input:radio[name=task]:checked").val() == "css") {
                css += 1;
              }
                else if ($("input:radio[name=task]:checked").val() == "php") {
                    php += 1;
                  }
                    else ($("input:radio[name=task]:checked").val() == "ruby") {
                        ruby += 1;
                      }
      if ($("input:radio[name=environment]:checked").val() == "cSharp") {
          cSharp += 1;
        }
          else if($("input:radio[name=environment]:checked").val() == "java") {
              java += 1;
            }
              else if($("input:radio[name=environment]:checked").val() == "css") {
                  css += 1;
                }
                  else if ($("input:radio[name=environment]:checked").val() == "php") {
                      php += 1;
                    }
                      else ($("input:radio[name=environment]:checked").val() == "ruby") {
                          ruby += 1;
                        }
      if ($("input:radio[name=workPlace]:checked").val() == "cSharp") {
          cSharp += 1;
        }
          else if($("input:radio[name=workPlace]:checked").val() == "java") {
              java += 1;
            }
              else if($("input:radio[name=workPlace]:checked").val() == "css") {
                  css += 1;
                }
                  else if ($("input:radio[name=workPlace]:checked").val() == "php") {
                      php += 1;
                    }
                      else ($("input:radio[name=workPlace]:checked").val() == "ruby") {
                          ruby += 1;
                        }

      alert("cSharp = " + cSharp + " java = " + java + " CSS = " + css + "PHP = " + php + " ruby = " + ruby)

});
