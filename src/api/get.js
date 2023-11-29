const apiurl = process.env.EXPO_PUBLIC_API_URL;

export async function getPokemonsApi(enpontUrl) {
  try {    
    const result = await fetch(
      enpontUrl || `${apiurl}/pokemon?limit=${60}&offset=0`
    )
      .then((response) => response.json())
      .then((json) => {
        return json;
      })
      .catch((error) => {
        return error;
      });
    return result;
  } catch (error) {
    throw error;
  }
}

export async function getPokemonDetailsByUrlApi(url) {
  try {
    const response = await fetch(url); // Hace una solicitud a la URL proporcionada.
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const pokemonDetails = await response.json(); // Parsea la respuesta a formato JSON.
    return pokemonDetails; // Devuelve los detalles del Pokémon.
  } catch (error) {
    console.error("Error fetching pokemon details:", error);
    throw error; // Propaga el error.
  }
}
