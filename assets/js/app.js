document.addEventListener('DOMContentLoaded', function() {

    const listView = document.getElementById('main-section');
    const search=document.getElementById('search-btn');
    const searchInput=document.getElementById('search-input')
    let superheroes;

    fetch('/superheroes.php')
        .then(response=>response.json())
        .then(data=> {
            superheroes = data;
            const listHeroes= data.map(superhero=>`<li>${superhero.name}</li>`).join('');
            listView.innerHTML=`<ul>${listHeroes}</ul>`
        })
        .catch(err=>console.err(err));

    function onSearch() {
        const searchText = searchInput.value.toLowerCase();
        if (searchText===""){
            location.reload();
        }
        const filteredSuperheroes =
            superheroes.filter(superhero => superhero.name.toLowerCase().includes(searchText) || superhero.alias.toLowerCase().includes(searchText));
        const listHeroes = filteredSuperheroes.map(superhero => `
         <h1>${superhero.name}</h1>
         <h2>${superhero.alias}</h2> 
        <p>${superhero.biography}</p>
        `).join('');
        listView.innerHTML = `${listHeroes}`;
    }
    search.addEventListener('click', onSearch);

});
