import axios from 'axios';
import { useEffect , useState } from 'react';
import { Header } from '../../components/Header.jsx'
import { ProductGrid } from './ProductGrid.jsx';
import './HomePage.css'

export function HomePage( { cart } ) {

    const [products , setProduct] = useState([]);
    
    useEffect(() => {
        // axios.get('http://localhost:3000/api/products')
        axios.get('/api/products')
            .then((response) => {
                // console.log(response.data);
                setProduct(response.data);
            });
    } , []);

    return (
        <>

            <Header cart = {cart} />
            <title>Ecommerce Project</title>
            <div className="home-page">
                <ProductGrid products={ products } /> 
            </div>
        </>
    )
}