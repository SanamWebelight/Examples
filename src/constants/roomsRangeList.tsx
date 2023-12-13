import { bedRoom, diningRoom, livingRoom } from "../images";

export const roomsRangeList = [
    {
        id: 1,
        image: <img src={diningRoom} alt="dining-room"/>,
        title: "Dining",
    },
    {
        id: 2,
        image: <img src={livingRoom} alt="living-room"/>,
        title: "Living",
    },
    {
        id: 3,
        image: <img src={bedRoom} alt="bedroom-room"/>,
        title: "Bedroom",
    },
]