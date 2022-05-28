import React, { useEffect, useState } from 'react';

const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://aqueous-bastion-42531.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);
    return [products, setProducts];
};

export default useProducts;