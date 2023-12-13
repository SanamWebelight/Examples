import { cartIcon, likeIcon, searchIcon, userIcon } from "../../../icons"
import "./userAccount.scss"

interface Props {
    togglePopup: () => void;
    isPopupVisible: boolean;
}

export const UserAccount = ({togglePopup,isPopupVisible}: Props) => {
    const handleClose = () => {
        togglePopup();
    };

    return (
        <div className={`user-mobile-menuContainer ${!isPopupVisible ? "hidden" : ""}`}>
            <div className="user-mobile-menu">
                <div><a href="#"><img src={userIcon} alt="user-icon"/></a></div>
                <div><a href="#"><img src={searchIcon} alt="search-icon"/></a></div>
                <div><a href="#"><img src={likeIcon} alt="like-icon"/></a></div>
                <div><a href="#"><img src={cartIcon} alt="cart-icon"/></a></div>
            </div>
        </div>
        
    )
}