import { productDetails } from "../../constants/productDetails"
import { useDeviceDetect } from "../../hooks/useDeviceDetect"
//import { product_1 } from "../../images"
import "./products.scss"

export const Products = () => {
    const {isDesktop} = useDeviceDetect();

    return (
        <div className="Products-main-container">
            <div className="products-title">Our Products</div>
            <div className={`products-grid ${isDesktop ? "min-w-[1200px] max-w-[1200px]" : ""}`}>
                {productDetails.map((product) => (
                    <div className="product-detail-box" key={product.id}>
                        <div className="product-image">{product.image}</div>
                        <div className="product-detail">
                            <div className="product-title">{product.title}</div>
                            <div className="product-desc">{product.desc}</div>
                            <div className="product-price-box">
                                <div className="product-sale-price">{product.salePrice}</div>
                                <div className="product-main-price"><s>{product.mainPrice}</s></div>
                            </div>
                            {(product.offer || product.new) && 
                                <div className={`product-offer ${product.offer ?  "bg-red-400": "bg-green-300"}`}>{product.offer ? product.offer : product.new}</div>
                            }
                            
                        </div>
                    </div>
                ))}                
            </div>
            <div className="button-box">
                <button className="show-more-button">Show More</button>
            </div>
        </div>
    )
}