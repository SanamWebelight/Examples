import { headerTabList, helpList } from "../../constants/headerTabList"
import { useDeviceDetect } from "../../hooks/useDeviceDetect"
import "./footer.scss"

export const Footer = () => {
    const {isDesktop} = useDeviceDetect();

    return (
        <>
        <div className={`footer-main-container ${isDesktop ? "gap-[150px]" : "gap-[100px]"}`}>
            <div className="block-1">
                <div className="text-xl font-extrabold">Funiro.</div>
                <div className="flex flex-col items-start mt-10 text-sm text-gray-500">
                    <span>400 University Drive Suit 200 Coral</span>
                    <span>Globs,</span>
                    <span>FL 33134 USA</span>
                </div>
            </div>
            <div className="block-2">
                <div className="flex items-start text-sm text-gray-500">Links</div>
                <div className="flex flex-col gap-10 mt-10 ">
                    {headerTabList.map((tabs) => (
                        <div key={tabs.id} className="flex items-start text-sm">
                            <a href={tabs.src}>{tabs.title}</a>
                        </div>
                    ))}
                </div>
                
            </div>
            <div className="block-3">
                <div className="flex items-start text-sm text-gray-500">Helps</div>
                <div className="flex flex-col gap-10 mt-10 ">
                    {
                        helpList.map((help) => (
                            <div key={help.id} className="flex items-start text-sm">
                            <a href={help.src}>{help.title}</a>
                        </div>
                        ))
                    }
                </div>
            </div>
            <div className="block-4">
                <div className="flex items-start text-sm text-gray-500">Newsletter</div>
                <div className="flex gap-5 mt-10 ">
                <input type="text" id="default-input" className="bg-gray-50 border-b-2 border-black text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "/>
                    <button className="flex items-end justify-end text-sm border-b-2 border-black">SUBSCRIBE</button>
                </div>
            </div>            
        </div>
        <div className={`border-t-2 border-gray-300 ${isDesktop ? "mx-[220px]" : ""}`}></div>
        <div className={`flex p-7 ${isDesktop ? "ml-[200px]" : ""}`}>2023 furino. All rights reserved</div>
        </>
        
    )
}