import React, { useState } from 'react';
import axios from "axios";

const useFetch = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    const getData = async(category = "") => {
        setLoading(true)
        let url;
        if (category === ""){
            url = `https://fakestoreapi.com/products`;
        }else{
            url = `https://fakestoreapi.com/products/category/${category}`
        }
        try {
            const response = await axios(url);
            console.log(response.data);
            setData([...data, response.data])
            setLoading(false);
        } catch (error) {
            console.log(error.message)
            setError(error.message)
            setLoading(false)
        }
    }

    getData()

    return {data, loading, error};
}

export default useFetch
