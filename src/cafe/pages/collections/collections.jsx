import ProductCategory from '../../components/product-category/product-category';
import './collections.scss'

function Collections() {
    return ( 
        <div className="container collection-main-container">
            <h2>COLLECTIONS</h2>
            <ProductCategory/>
        </div>
     );
}

export default Collections;