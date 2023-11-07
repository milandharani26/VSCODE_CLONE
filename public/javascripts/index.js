function turnOffBoth(){
    var allelems = [...document.querySelectorAll('form')];
    allelems.forEach(function(elem){
      elem.style.display = "none";
    })
  }

  var filecreateicon = document.querySelector('#filecreate')

  filecreateicon.addEventListener("click",function(){
    turnOffBoth();
      document.querySelector('#fileform').style.display= "initial";
  })

  var foldercreateicon = document.querySelector("#foldercreate");

  foldercreateicon.addEventListener("click",function(){
    turnOffBoth();
    document.querySelector("#folderform").style.display = "initial";
  })