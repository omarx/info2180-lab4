document.addEventListener('DOMContentLoaded',()=>{
    const listView=document.getElementById('main-section');

    fetch('/superheroes.php')
        .then(response=>response.text())
        .then(data=>
            {
                listView.innerHTML=data;
            }
        )
        .catch(error=>{
            console.error("No response from server: ",error);
        })

})