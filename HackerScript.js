var aviso0 = String
function getInputValue(){
    // Selecting the input element and get its value 
    var inputVal = document.getElementById("myInput").value;
    if (inputVal <= ""){
    
        aviso0 = "Digite Algo na caixa de texto"
        alert(aviso0)

    }
    else
       {
    window.location.href = "https://duckduckgo.com/?q=" + inputVal;
      }
   
}