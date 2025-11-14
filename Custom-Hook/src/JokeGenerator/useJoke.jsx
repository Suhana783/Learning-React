import {useState} from 'react';

const useFetch = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async (url) => {
        setLoading(true);
        setError(null);
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch");

        const result = await response.json();
        setData(result);
    } catch (err) {
        setError(err.message);
    }  finally {
        setLoading(false);
    }

    };

    return {data, loading, error, fetchData};
};

export default useFetch;