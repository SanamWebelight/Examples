import { useDeviceDetect } from "../../hooks/useDeviceDetect"
import "./homePageAddBox.scss"
export const HomePageAddBox = () => {
    const {isMobile} = useDeviceDetect();
    return (
        <div className={`add-main-container ${ isMobile ? "p-4" : "p-10"}`}>
            <div className="desc-1">New Arrival</div>
            <div className={`desc-2 ${isMobile ? "text-2xl": "text-3xl"}`}>Discover Our New Collection</div>        
            <div className={`desc-3 ${isMobile ? "text-xs": "text-sm"}`}>It is a long established fact that a reader will be distracted </div>
            <div className={`desc-3 ${isMobile ? "text-xs": "text-sm"}`}>by the readable content of a page when looking at its layout.</div>
            <div className="button-div">
                <button> Buy Now </button>
            </div>
        </div>
    )
}