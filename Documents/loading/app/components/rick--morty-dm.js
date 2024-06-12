export class RickAndMortyAPI {
  async getCharacters() { 
    try {
      const rawData = await this.makeRequest();
      const mappedData = this.mapper(rawData);
      console.log("Mapped Data:", mappedData);
      return mappedData;
    } catch (error) {
      console.error("Error fetching characters:", error);
      return []; 
    }
  }

  async makeRequest() {
    try {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data.results; // Acceder directamente a los resultados de los personajes
    } catch (error) {
      console.error("Error making request:", error);
      throw error; 
    }
  }

  mapper(rawData) {
    return rawData.map(character => ({
      id: character.id,
      name: character.name,
      status: character.status,
      species: character.species,
      type: character.type,
      gender: character.gender,
      origin: character.origin,
      location: character.location,
      image: character.image,
      episode: character.episode,
      url: character.url,
      created: character.created
    }));
  }
}