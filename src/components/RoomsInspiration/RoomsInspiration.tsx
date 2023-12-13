import { Swiper, SwiperSlide } from "swiper/react"
import { Mousewheel, Pagination,Navigation } from "swiper/modules";
import { rightArrow } from "../../icons"
import { livingRoom } from "../../images"
import "./roomsInspiration.scss"
import { roomsRangeList } from "../../constants/roomsRangeList";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useDeviceDetect } from "../../hooks/useDeviceDetect";

export const RoomsInspiration = () => {
    const {isMobile} = useDeviceDetect();
    return (
        <div className="room-inspiration-main-container">
            <div className="room-inspiration-desc">
                <div className="title">
                    <span>50+ Beautiful rooms</span>
                    <span>inspiration</span>
                </div>
                <div className="desc">
                    <span>Our designer already made a lot of beautiful</span>
                    <span>prototype of rooms that inspire you.</span>
                </div>
                <div className="button-box">
                    <button>Explore More</button>
                </div>
            </div>
            <div className="room-inspiration-image">
                <img src={livingRoom} alt="living-room"/>
                <div className="room-desc">
                    <div className="room-title">
                        <div className="room-title-1">01----- Bed Room</div>
                        <div className="room-title-2">Inner Peace</div>
                    </div>                
                    <div className="next-button">
                        <button><img src={rightArrow} alt="right-arrow"/></button>
                    </div>
                </div>
            </div>
            <div className={`room-inspiration-image-slider ${!isMobile ? " min-w-[500px] max-w-[500px]": ""}`}>
                <Swiper
                    navigation
                    draggable
                    grabCursor
                    slidesPerView={1}
                    modules={[Pagination, Mousewheel,Navigation]}
                    direction="horizontal"
                    spaceBetween="10"
                    className="w-full"
                    pagination={{
                        clickable: true,
                      }}
                >
                    {roomsRangeList.map((rooms) => (
                    <SwiperSlide key={rooms.id}>
                       <div className="flex flex-col items-start max-w-[375px] w-full h-[250px] mx-auto">{rooms.image}</div>
                    </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            
        </div>
    )
}