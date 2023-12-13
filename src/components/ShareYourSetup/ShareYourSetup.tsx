import { useDeviceDetect } from "../../hooks/useDeviceDetect"
import { product_1, product_2, product_3, product_4, product_5, product_6, product_7, product_8 } from "../../images"
import "./shareYourSetup.scss"

export const ShareYourSetup = () => {
    const {isDesktop} = useDeviceDetect();
    return (
        <div className="shareYourSetup-main-container">
            <div className="title">Share your setup with</div>
            <div className="desc">#FuniroFurniture</div>
            <div className="image-grid">
                <div className="row-1">
                    <img src={product_1} alt="1" className="img-1"/>
                    <img src={product_2} alt="2" className="img-2"/>
                </div> 
                <div className="row-2">
                    <img src={product_3} alt="3" className="img-3"/>
                </div> 
                <div className="row-1">
                    <img src={product_4} alt="4" className="img-4"/>
                    <img src={product_5} alt="5" className="img-5"/>
                </div>
                <div className="row-3">
                    <img src={product_6} alt="6" className="img-6"/>
                    <img src={product_7} alt="7" className="img-7"/>
                </div> 
                {isDesktop && <div className="blank" />}
                <div className="row-3">
                    <img src={product_8} alt="6" className="img-8"/>
                    <img src={product_6} alt="7" className="img-9"/>
                </div>             
                
            </div>
        </div>
    )
}