import React, { useState, useEffect } from 'react';
import './product-category.scss'

const productCategoryUrl = "/json/collections.json";


function ProductCategory() {
    const [categoryCard, setcategoryCard] = useState();

    const getProductData = () => {
        fetch(productCategoryUrl)
          .then((res) => res.json())
          .then((productCardJson) => {
            setcategoryCard(productCardJson);
          });
      };
    
      useEffect(() => {
        getProductData();
      }, []);

    return ( 
        <div className="row collection-card">
            { categoryCard && categoryCard.map( categ => (
                <div className="col-3 cards">
                    <img src={categ.imgurl} alt={categ.text}/>
                    <span>{categ.text}</span>
                    <span>More info</span>
                </div>
            ))}
        </div>
     );
}

export default ProductCategory;