import { useState, useEffect, useCallback } from "react";

// Custom Hook
export function useGet(url) {
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
