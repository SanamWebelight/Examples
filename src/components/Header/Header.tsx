import { useEffect, useRef, useState } from "react"
import ClickAwayListener from "react-click-away-listener";
import { headerTabList } from "../../constants/headerTabList"
import { useDeviceDetect } from "../../hooks/useDeviceDetect"
import { cartIcon, likeIcon, searchIcon, tabsIcon, userIcon } from "../../icons"
import webLogo from "../../images/logo.png"
import { MobileTabList } from "../MobileHeader/TabList/MobileTabList"
import "./header.scss"
import { UserAccount } from "../MobileHeader/UserAccount/UserAccount";

export const Header = () => {
    const {isMobile} = useDeviceDetect();
    const divRef = useRef<HTMLDivElement | null>(null);

    const [isTabPopupVisible, setIsTabPopupVisible] = useState(false);
    const [isUserPopupVisible, setIsUserPopupVisible] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event: any) => {
          if (divRef.current) {
            if (!divRef.current.contains(event.target)) {
                setIsTabPopupVisible(false);
                setIsUserPopupVisible(false)
            }
          }
        };
    
        const container = document.querySelector(".primary-layout");
        container?.addEventListener("click", handleClickOutside);
        container?.addEventListener("scroll", handleClickOutside);
    
        return () => {
          container?.removeEventListener("click", handleClickOutside);
          container?.removeEventListener("scroll", handleClickOutside);
        };
      }, []);

    const toggleTabPopup = () => {
        setIsTabPopupVisible(!isTabPopupVisible);
      };
    
    const toggleUserPopup = () => {
        setIsUserPopupVisible(!isUserPopupVisible);
      };
    console.log(isMobile,"isMob")

    return(
        <div className="header-container" ref={divRef}>
            <div className="logo-container">
                <div className="logo">
                    <img src={webLogo} alt="user-icon"/>
                </div>
                <div className="logo-title"><span>Furniro</span></div>
            </div>
            <div className="header-tab-container">
                {isMobile 
                ? (
                    <ClickAwayListener
                        onClickAway={() => {
                        setIsTabPopupVisible(false);
                        }}
                    >
                        <div className="flex items-center">
                        <button onClick={toggleTabPopup}>
                            <img src={tabsIcon} alt="tabs-icon"/>
                        </button>
                        <MobileTabList
                            togglePopup={toggleTabPopup}
                            isPopupVisible={isTabPopupVisible}
                        />
                    </div>
                    </ClickAwayListener>
                    
                ) 
                : (
                    <ul className="tab-list">
                    {headerTabList.map((tabs) => (
                        <li key={tabs.id}>
                            <a href={tabs.src}>{tabs.title}</a>
                        </li>
                    ))}
                </ul>
                )                
                }
                
            </div>
            <div className="user-menuContainer">
            {isMobile 
                ? (
                    <ClickAwayListener
                        onClickAway={() => {
                        setIsUserPopupVisible(false);
                        }}
                    >
                        <div className="flex items-center">
                        <button onClick={toggleUserPopup}>
                            <img src={userIcon} alt="user-icon"/>
                        </button>
                        <UserAccount
                            togglePopup={toggleUserPopup}
                            isPopupVisible={isUserPopupVisible}
                        />
                    </div>

                    </ClickAwayListener>
                    
                )
                : (
                    <>
                        <div><a href="#"><img src={userIcon} alt="user-icon"/></a></div>
                        <div><a href="#"><img src={searchIcon} alt="search-icon"/></a></div>
                        <div><a href="#"><img src={likeIcon} alt="like-icon"/></a></div>
                        <div><a href="#"><img src={cartIcon} alt="cart-icon"/></a></div>
                    </>
                )
            }
                
            </div>
        </div>
    )
}