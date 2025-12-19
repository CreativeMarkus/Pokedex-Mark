let pokemonRepository = (function () {
  let pokemonList = [];
  let pokemonListElement = document.querySelector('.pokemon-list');
<<<<<<< HEAD
=======
  let modal = document.getElementById('pokemonModal');
  let closeModalButton = document.getElementById('closeModal');
>>>>>>> 98c147be915470fcc4e4092125c3d07834a57a01

  function loadList() {
    return fetch('https://pokeapi.co/api/v2/pokemon/?limit=150')
      .then(response => response.json())
      .then(data => {
        data.results.forEach(pokemon => {
          add({
            name: pokemon.name,
            detailsUrl: pokemon.url
          });
        });
      })
      .catch(error => console.error('Error loading the Pokémon list:', error));
  }

  function add(pokemon) {
    if (typeof pokemon === 'object' && 'name' in pokemon && 'detailsUrl' in pokemon) {
      pokemonList.push(pokemon);
    }
  }

  function getAll() {
    return pokemonList;
  }

  function loadDetails(pokemon) {
    return fetch(pokemon.detailsUrl)
      .then(response => response.json())
      .then(details => {
        pokemon.imageUrl = details.sprites.front_default;
        pokemon.height = details.height;
        pokemon.types = details.types.map(typeInfo => typeInfo.type.name);
      })
      .catch(error => console.error('Error loading Pokémon details:', error));
<<<<<<< HEAD
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(() => {
      document.getElementById('pokemonModalLabel').innerText = pokemon.name;
      document.getElementById('pokemonHeight').innerText = `Height: ${pokemon.height} m`;
      document.getElementById('pokemonImage').src = pokemon.imageUrl;

      let types = pokemon.types.join(', ');
      document.getElementById('pokemonTypes').innerText = `Types: ${types}`;

      $('#pokemonModal').modal('show');
    });
  }

  function addListItem(pokemon) {
    let listItem = document.createElement('li');
    listItem.classList.add('list-group-item');

    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('btn', 'btn-primary', 'btn-block', 'text-capitalize');
    button.setAttribute('type', 'button');
    button.setAttribute('data-toggle', 'modal'); 
    button.setAttribute('data-target', '#pokemonModal'); 

    button.addEventListener('click', function () {
      showDetails(pokemon);
    });

    listItem.appendChild(button);
    pokemonListElement.appendChild(listItem);
  }

  function displayPokemons() {
    getAll().forEach(addListItem);
  }

=======
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(() => {
      document.getElementById('pokemonName').innerText = pokemon.name;
      document.getElementById('pokemonHeight').innerText = `Height: ${pokemon.height} m`;
      document.getElementById('pokemonImage').src = pokemon.imageUrl;

      modal.style.display = 'block';
    });
  }

  function closeModalFunction() {
    modal.style.display = 'none';
  }

  function addListItem(pokemon) {
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('pokemon-button');
    button.addEventListener('click', function () {
      showDetails(pokemon);
    });
    listItem.appendChild(button);
    pokemonListElement.appendChild(listItem);
  }

  function displayPokemons() {
    getAll().forEach(addListItem);
  }

  closeModalButton.addEventListener('click', closeModalFunction);
  window.addEventListener('click', function (event) {
    if (event.target === modal) {
      closeModalFunction();
    }
  });
  window.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeModalFunction();
    }
  });

>>>>>>> 98c147be915470fcc4e4092125c3d07834a57a01
  return {
    getAll,
    add,
    loadList,
    loadDetails,
    showDetails,
    addListItem,
    displayPokemons
  };
})();

pokemonRepository.loadList().then(() => {
  pokemonRepository.displayPokemons();
});