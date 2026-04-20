import axios from 'axios';
import { useEffect , useState } from 'react';
import { Header } from '../../components/Header.jsx'
import { ProductGrid } from './ProductGrid.jsx';
import './HomePage.css'

export function HomePage( { cart , loadCart } ) {

    const [products , setProduct] = useState([]);
    
    useEffect(() => {
        // axios.get('http://localhost:3000/api/products')
    //     axios.get('/api/products')
    //         .then((response) => {
    //             // console.log(response.data);
    //             setProduct(response.data);
    //         });
    // } , []);

        const getHomeData = async() => {
            const response = await axios.get('/api/products');
            setProduct(response.data);   
        }

        getHomeData();
    } , []);

    return (
        <>

            <Header cart = {cart} />
            <title>Ecommerce Project</title>
            <div className="home-page">
                <ProductGrid products={ products } loadCart = {loadCart}/> 
            </div>
        </>
    )
}