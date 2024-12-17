import cappuccinoImg1 from "../assets/img/cappuccino_1.jpg";
import cappuccinoImg2 from "../assets/img/cappuccino_2.jpg";
import americanoImg from "../assets/img/americano.jpg";
import espressoImg from "../assets/img/espresso.jpg";
import macchiatoImg from "../assets/img/macchiato.jpg";

export const drinksData = [
    {
        id: 1,
        title: "Cappuccino",
        roast: "Medium Roasted",
        comment: "With Steamed Milk",
        desc: "Cappuccino is a latte made with more foam than steamed milk, often with a sprinkle of cocoa powder or cinnamon on top.",
        price: 4.20,
        rating: 4.5,
        votes: 6.879,
        imgUrl: cappuccinoImg1,
        milk: true,
    },
    {
        id: 2,
        title: "Cappuccino",
        roast: "Medium Roasted",
        comment: "With Foam",
        desc: "Cappuccino is a latte made with more foam than steamed milk, often with a sprinkle of cocoa powder or cinnamon on top.",
        price: 4.20,
        rating: 4.2,
        votes: 6.879,
        imgUrl: cappuccinoImg2,
        milk: true,
    },
    {
        id: 3,
        title: "Americano",
        roast: "Medium Roasted",
        comment: "Without Milk",
        desc: "Americano is a diluted espresso made by adding hot water, resulting in a milder, smoother coffee.",
        price: 4.20,
        rating: 4.5,
        votes: 6.879,
        imgUrl: americanoImg,
        milk: false,
    },
    {
        id: 4,
        title: "Espresso",
        roast: "Medium Roasted",
        comment: "Without Milk",
        desc: "Espresso is a concentrated coffee brewed by forcing hot water through finely-ground beans, known for its rich and intense flavor.",
        price: 4.20,
        rating: 4.5,
        votes: 6.879,
        imgUrl: espressoImg,
        milk: false,
    },
    {
        id: 5,
        title: "Macchiato",
        roast: "Medium Roasted",
        comment: "Foamed Milk",
        desc: "Macchiato is an espresso-based drink topped with a small amount of foamed milk for a bold yet slightly creamy flavor.",
        price: 4.20,
        rating: 4.5,
        votes: 6.879,
        imgUrl: macchiatoImg,
        milk: true,
    },
];
