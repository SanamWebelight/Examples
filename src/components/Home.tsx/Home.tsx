import { useDeviceDetect } from "../../hooks/useDeviceDetect"
import { Footer } from "../Footer/Footer"
import { Header } from "../Header/Header"
import { HomePageAddBox } from "../HomePageAddBox/HomePageAddBox"
import { Products } from "../Products/Products"
import { RoomsInspiration } from "../RoomsInspiration/RoomsInspiration"
import { RoomsRange } from "../RoomsRange/RoomsRange"
import { ShareYourSetup } from "../ShareYourSetup/ShareYourSetup"
import "./home.scss"

export const Home = () => {
    const {isDesktop} = useDeviceDetect();
    return(
        <div className="main-container">
            <div className="header-div">
                <Header/>
                <div className={`add-div ${isDesktop ? "bottom-[150px] right-[100px]" : "bottom-[40px] right-[40px]" }`}><HomePageAddBox/></div>                
            </div> 
            <RoomsRange/>
            <Products/> 
            <RoomsInspiration/> 
            <ShareYourSetup/>
            <div className="border-t-2 border-gray-300"></div>
            <Footer/>
        </div>
    )
}