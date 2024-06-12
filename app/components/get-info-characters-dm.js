export class GetInfoCharactersDm{


    getInfoCharacters( ){
      return new Promise( (resolve, reject) => {
        this.makerequest('GET', 'https://rickandmortyapi.com/api/character?page=5')
        .then(data => {
          const mapperData =  this.mapper(data.results);
          const infoCharacter = {
            results: this.instanciainfo(mapperData),
            info: data.info,
          }
          console.log(infoCharacter);
          resolve(infoCharacter);
        })
        .catch(error => {
          console.error(error);
          reject( {results: [], info: {}});
        });
      });
      }

      mapper(results) {
        return results.map(info => ({
          image: info.image,
          id: info.id,
          name: info.name,
          type: info.type,
          status: info.status,
          species: info.species,
          gender: info.gender,
          created: info.created,
        }));
      }

      instanciainfo(data){
        return data.sort((a, b) => a.name.localeCompare(b.name));
      }

    makerequest(type, url){

      return new Promise( (resolve, reject) => {
        
        const options = {
            method: type,
          }; 
        fetch(url, options)
        .then(response =>  response.json())
        .then(data => resolve(data))
        .catch(error => reject(new Error( 'Error: ' + error.message) ));
      });

  }
}