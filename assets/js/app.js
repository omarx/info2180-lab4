function loadAvengers(){
    fetch('/superheroes.php')
        .then(response=>response.text())
        .then(data=>alert(data))
        .catch(error=>{
            console.error("No response from server: ",error);
        })
}
