export class GetInfoCharactersDm {

    getApi(page) {
      return new Promise((resolve, reject) => {
        this.makeRequest('GET', `https://rickandmortyapi.com/api/character/?page=${page}`)
          .then(data => {
            const mappedData = this.mapper(data.results);
            const infoApi = {
              results: this.sortName(mappedData),
              info: data.info
            };
            console.log(infoApi);
            resolve(infoApi);
          })
          .catch(error => {
            console.error(error);
            reject({ results: [], info: {} });
          });
      });
    }
  
    mapper(results) {
      return results.map(character => ({
        image: character.image,
        name: character.name,
        species: character.species,
        status: character.status,
        location: character.location.name,
        gender: character.gender,
        created: character.created,
        episode: character.episode,
        origin: character.origin.name
      }));
    }
  
    sortName(data) {
      return data.sort((a, b) => a.name.localeCompare(b.name));
    }
  
    makeRequest(type, url) {
      return new Promise((resolve, reject) => {
        const options = {
          method: type,
        };
        fetch(url, options)
          .then(response => response.json())
          .then(data => resolve(data))
          .catch(error => reject(new Error('Error: ' + error.message)));
      });
    }
  }
  