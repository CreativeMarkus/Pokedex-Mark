// Pokédex App - Working Version
let pokemonRepository = (function () {
  let pokemonList = [];
  let pokemonListElement = document.querySelector('.pokemon-list');

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

  return {
    getAll,
    add,
    loadList,
    loadDetails,
    showDetails,
    addListItem,
    displayPokemons,
    set pokemonListElement(element) {
      pokemonListElement = element;
    }
  };
})();

// Wait for DOM to be fully loaded before starting the app
document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM loaded, starting Pokédex...');

  // Re-initialize the list element since DOM is now ready
  pokemonRepository.pokemonListElement = document.querySelector('.pokemon-list');

  if (!pokemonRepository.pokemonListElement) {
    console.error('Pokemon list element not found!');
    return;
  }

  // Now load and display the Pokémon
  pokemonRepository.loadList().then(() => {
    console.log('Pokémon loaded, displaying list...');
    pokemonRepository.displayPokemons();
  });

  // Modal close functionality
  function closeModal() {
    $('#pokemonModal').modal('hide');
    setTimeout(() => {
      $('.modal-backdrop').remove();
      $('body').removeClass('modal-open');
      $('body').css('padding-right', '');
    }, 300);
  }

  const closeButton = document.querySelector('#pokemonModal .close');
  if (closeButton) {
    closeButton.addEventListener('click', function () {
      closeModal();
    });
  }

  $('#pokemonModal').on('click', function (event) {
    if (event.target === this) {
      closeModal();
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  });

  closeModal();
});