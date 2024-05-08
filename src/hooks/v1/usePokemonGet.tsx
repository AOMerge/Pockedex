import { useState, useEffect, useCallback } from "react";
import getHTTP from "~/api/v1/getHTTP";

// Custom Hook
export function useGet(url: string) {
  const [dataGet, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Función para refrescar los datos
  const GetFetchData = useCallback(() => {
    // Reiniciar el estado
    setLoading(true);
    setError(null);

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data.result || data.error || data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [url]);

  useEffect(() => {
    GetFetchData();
  }, [GetFetchData]);

  return { dataGet, loading, error, GetFetchData };
}

export default class usePokemonGet {
    /**
     * Hook to get the data of a pokemon
     * @param id - The id of the pokemon
     * @param apiurl - The url of the API
     * @returns {pockemon, PockemonPages, setPockemonPages} 
     */

  static useAllDataPokemon(id: number, apiurl: string | undefined) {
    const [PockemonPages, setPockemonPages] = useState(1);
    const [pockemon, setPockemon]: any[] = useState(null);

    useEffect(() => {
      const dataPokemon = new getHTTP();
      const getPockemon = dataPokemon
        .getPockemon(apiurl, id)
        .then((res) => {
          setPockemon(res);
        })
        .catch((error) => {
          console.error("Error fetching pokemon details:", error);
          throw error;
        });
      /* changeBackgroundColor(colors.typesPokemon[firstItemType]); */
    }, []);

    return { pockemon, PockemonPages, setPockemonPages };
  }
}