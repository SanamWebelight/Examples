import { product_1, product_2, product_3, product_4, product_5, product_6, product_7, product_8 } from "../images";

export const productDetails = [
    {
        id: 1,
        image: <img src={product_1} alt="product-1"/>,
        title: "Syltherine",
        desc: "Stylish cafe chair",
        salePrice: "Rp 2.500.000",
        mainPrice: "Rp 3.500.000",
        offer : "-30%",
        new: ""
    },
    {
        id: 2,
        image: <img src={product_2} alt="product-2"/>,
        title: "Leviosa",
        desc: "Stylish cafe chair",
        salePrice: "Rp 2.500.000",
        mainPrice: "",
        offer : "",
        new: ""
    },
    {
        id: 3,
        image: <img src={product_3} alt="product-3"/>,
        title: "Lolito",
        desc: "Luxury big sofa",
        salePrice: "Rp 7.000.000",
        mainPrice: "Rp 14.000.000",
        offer : "-50%",
        new: ""
    },
    {
        id: 4,
        image: <img src={product_4} alt="product-4"/>,
        title: "Respira",
        desc: "Outdoor bar table and stool",
        salePrice: "Rp 500.000",
        mainPrice: "",
        offer : "",
        new: "New"
    },
    {
        id: 5,
        image: <img src={product_5} alt="product-5"/>,
        title: "Grifo",
        desc: "Night lamp",
        salePrice: "Rp 1.500.000",
        mainPrice: "",
        offer : "",
        new: "",
    },
    {
        id: 6,
        image: <img src={product_6} alt="product-6"/>,
        title: "Muggo",
        desc: "Small mug",
        salePrice: "Rp 150.000",
        mainPrice: "",
        offer : "",
        new: "New"
    },
    {
        id: 7,
        image: <img src={product_7} alt="product-7"/>,
        title: "Pingky",
        desc: "Cute bed set",
        salePrice: "Rp 7.000.000",
        mainPrice: "Rp 14.000.000",
        offer : "-50%",
        new: ""
    },
    {
        id: 8,
        image: <img src={product_8} alt="product-8"/>,
        title: "Potty",
        desc: "Minimalist flower pot",
        salePrice: "Rp 500.000",
        mainPrice: "",
        offer : "",
        new: "New"
    },
]