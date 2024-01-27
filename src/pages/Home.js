import Footer from '../features/common/Footer';
import NavBar from '../features/navbar/NavBar'
import ProductList from '../features/product/components/ProductList';



function Home() {
    return ( 
        <div>
                <NavBar>
                    <ProductList></ProductList>
            </NavBar>
            <Footer></Footer>
        </div>
     );
}

export default Home;