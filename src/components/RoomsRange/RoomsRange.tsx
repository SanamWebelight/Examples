
import { roomsRangeList } from "../../constants/roomsRangeList"
import "./roomsRange.scss"

export const RoomsRange = () => {
    return (
        <div className="rooms-range-main-container">
            <div className="title">Browse The Range</div>
            <div className="desc"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <div className="rooms-card-main"> 
                {roomsRangeList.map((room) => (
                    <div key={room.id}>
                        <div className="rooms-image">{room.image}</div>
                        <div className="rooms-name">{room.title}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}