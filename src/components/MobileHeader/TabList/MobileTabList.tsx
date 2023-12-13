import { headerTabList } from "../../../constants/headerTabList"
import "./mobileTabList.scss"

interface Props {
    togglePopup: () => void;
    isPopupVisible: boolean;
}

export const MobileTabList = ({togglePopup,isPopupVisible}: Props) => {
    const handleClose = () => {
        togglePopup();
      };
      
     return (
            <div className={`header-tab-popup ${ !isPopupVisible ? "hidden" : "" }`} id="mobile-header">
                <div className="btn-wrapper">
                    <ul className="mobile-tab-list">
                        {headerTabList.map((tabs) => (
                            <li key={tabs.id}>
                                <a href={tabs.src}>{tabs.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>                
            </div>
     )
}