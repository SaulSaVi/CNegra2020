import React, { useEffect, useState } from 'react';
import Product from './Product';
import axios from 'axios';

const NewProducts = () => {
    const [newProduct, setNewProduct] = useState([]);
}

useEffect(() => {
    axios.post('http://localhost:4040/api/products', (req,res) => {
        const { body } = req;
        const 
    })
        
})

router.post('/api/products', (req, res) => {
    const { body } = req;
    // Product.create
    const newProduct = new Product(body);

    newProduct.save()
      .then(dbRes => res.status(201).json(dbRes))
      .catch(err => res.status(400).json(err));
});