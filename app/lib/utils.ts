import { StaticImageData } from "next/image";
import {
  foodImage1,
  foodImage2,
  foodImage3,
  foodImage4,
  foodImage5,
  foodImage6,
  foodImage7,
  foodImage8,
  snackImage1,
  snackImage2,
  snackImage3,
  snackImage4,
  snackImage5,
  snackImage6,
  beverageImage1,
  beverageImage2,
  beverageImage3,
  beverageImage4,
  beverageImage5,
  beverageImage6,
} from "@/public/assets/menu-images/export";

type MenuItem = {
  name: string;
  price: number;
  desc: string;
  img: StaticImageData;
};

export const menuItems: {
  food: MenuItem[];
  beverages: MenuItem[];
  snacks: MenuItem[];
} = {
  food: [
    {
      name: "Regular Beef Burger",
      price: 42,
      desc: "A classic, juicy beef patty with fresh lettuce, tomato, and our signature sauce.",
      img: foodImage1,
    },
    {
      name: "Black Beef Burger",
      price: 45,
      desc: "Bold and delicious with a charcoal-infused bun, premium beef, and melted cheese.",
      img: foodImage2,
    },
    {
      name: "Big Meaty",
      price: 15,
      desc: "A meat lover’s dream – loaded with extra beef and topped with crispy onions.",
      img: foodImage3,
    },
    {
      name: "Chicken Burger",
      price: 20,
      desc: "Crispy chicken fillet with lettuce, tomato, and creamy mayo, all in a soft bun.",
      img: foodImage4,
    },
    {
      name: "Double Mac Burger",
      price: 45,
      desc: "Double the patties, double the cheese – a towering delight for the hungriest appetites.",
      img: foodImage5,
    },
    {
      name: "Beef Cheese Burger",
      price: 35,
      desc: "Classic beef patty topped with melted cheese, pickles, and our special sauce.",
      img: foodImage6,
    },
    {
      name: "Double Meaty",
      price: 45,
      desc: "Twice the meat, twice the flavor – piled high with layers of juicy goodness.",
      img: foodImage7,
    },
    {
      name: "Crispy Chicken Burger",
      price: 25,
      desc: "Golden, crispy chicken with fresh lettuce and a zesty sauce – pure crunch satisfaction.",
      img: foodImage8,
    },
  ],
  beverages: [
    {
      name: "Sparkling Lemonade",
      price: 18,
      desc: "Zesty lemon with a sparkling twist, perfect for a sunny day.",
      img: beverageImage1,
    },
    {
      name: "Iced Mocha",
      price: 12,
      desc: "Rich chocolate blended with chilled coffee for a cool caffeine fix.",
      img: beverageImage2,
    },
    {
      name: "Classic Cola",
      price: 10,
      desc: "A refreshing burst of cola flavor with just the right amount of fizz.",
      img: beverageImage3,
    },
    {
      name: "Cola shots",
      price: 18,
      desc: "Rich in Taste and blended with chilled a secret ingredient. Tasty and relaxing.",
      img: beverageImage4,
    },
    {
      name: "Caramel Swirl Shake",
      price: 15,
      desc: "Creamy vanilla shake with rich caramel swirls, topped with whipped cream and a sprinkle of cookie crumbs.",
      img: beverageImage5,
    },
    {
      name: "Berry Smoothie",
      price: 20,
      desc: "A delightful mix of berries blended to perfection – sweet and refreshing.",
      img: beverageImage6,
    },
  ],
  snacks: [
    {
      name: "Hi-Chew Assorted",
      desc: "Chewy fruit-flavored snack suite with a creamy dip.",
      price: 8.99,
      img: snackImage1,
    },
    {
      name: "Spicy Curl Chips",
      desc: "Crunchy and spicy curled chips with a bold flavor.",
      price: 3.79,
      img: snackImage2,
    },
    {
      name: "Grilled Chicken Skewers",
      desc: "Tender and juicy grilled chicken skewers with a hint of herbs.",
      price: 5.89,
      img: snackImage3,
    },
    {
      name: "Chocolate Donut",
      desc: "Classic chocolate-covered donut, perfect for a sweet snack.",
      price: 4.59,
      img: snackImage4,
    },
    {
      name: "Charcuterie Platter",
      desc: "A luxurious assortment of cured meats, cheeses, and fresh fruits.",
      price: 14.99,
      img: snackImage5,
    },
    {
      name: "Samosa Platter",
      desc: "Crispy samosas served with a variety of flavorful chutneys.",
      price: 6.99,
      img: snackImage6,
    },
  ],
};
