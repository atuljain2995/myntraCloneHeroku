import React from 'react'
import './ProductList.css'
import TopFilter from '../TopFilter/TopFilter'
import ProductShowcase from '../ProductShowcase/ProductShowcase'
import {ProductConsumer} from "../../Context";

export const ProductList = () => {
    return (
        <div className="productListParent">
            <div className="topAction">
                <TopFilter/>
            </div>
            <div className="productShowCase"> 
            <ProductConsumer>
					{value => {
                        return value.products.map(product =>
                        {
                            return (
                                <div className="col-md-3 col-6 col-sm-6" key ={product.id}>
                                    <ProductShowcase  product = {product} />
                                 </div>
                            );
                        });
					}}
			</ProductConsumer>
            </div>
        </div>
    )
}
