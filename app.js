window.onload = function(){

  document.getElementById("button").onclick = function(){
    show_result(document.getElementById("text_Field").value)
  }
}

function myFunction() {
    var xhr = new XMLHttpRequest();
   
    xhr.onreadystatechange = function() {
        if (xhr.readyState === xhr.DONE && xhr.status === 200){
            var res = xhr.response;
            alert(response);
        }else{
            alert("Error")
        }   
    };   
    
    xhr.open("GET", 'superheroes.php', true);
    xhr.send();      
}
