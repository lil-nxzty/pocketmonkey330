// ── PROVIDED STARTER CODE — do not modify ──────────────────
async function fetchData() {
  try {
    const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
    const response   = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }

    const data          = await response.json();
    const pokemonSprite = data.sprites.front_default;
    const imgElement    = document.getElementById("pokemonSprite");

    imgElement.src           = pokemonSprite;
    imgElement.style.display = "block";
  } catch (error) {
    console.error(error);
  }
}
let goomba = document.getElementById("buttion");
goomba.addEventListener("click", handleSearch);

function handleSearch() {
    let poki = document.getElementById("pokemonName").value.toLowerCase();
    let lobo = document.getElementById("errorMessage");
    let sprite = document.getElementById("pokemonSprite");

    lobo.textContent = "";

    lobo.textContent = "";
    sprite.style.display = "none";

    let trimmed = poki.trim(); 
     if (trimmed === "") {
        lobo.textContent = "Please enter a Pokémon name.";
        return;
    } if (!/^[a-zA-Z-]+$/.test(trimmed)) {
        lobo.textContent = "Only letters and hyphens are allowed.";
        return;
    } if (trimmed.length > 30) {
        lobo.textContent = "Name must be under 30 characters.";
        return;
    };
    fetchData();
}