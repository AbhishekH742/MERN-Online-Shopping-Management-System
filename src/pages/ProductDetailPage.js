

import Footer from "../features/common/Footer";
import NavBar from "../features/navbar/NavBar";
import ProductDetail from "../features/product/components/ProductDetail";
function ProductDetailPage() {
    return ( 
        <div>
              <NavBar>
                <ProductDetail></ProductDetail>
            </NavBar>
            <Footer></Footer>
        </div>
     );
}

export default ProductDetailPage;