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

import {
  reviewImage1,
  reviewImage2,
  reviewImage3,
} from "@/public/assets/review/export";

import {
  articleImage1,
  articleImage2,
  articleImage3,
} from "@/public/assets/article/export";

type MenuItem = {
  name: string;
  price: number;
  desc: string;
  img: StaticImageData;
};

type Review = {
  img: StaticImageData;
  name: string;
  comment: string;
  occupation: string;
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
      desc: "Creamy vanilla shake with rich caramel swirls, topped with whipped cream and a sprinkle of strawberry toppings.",
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
      desc: "Chewy fruit-flavored snack suite. Courtesy of cro-cato",
      price: 25.99,
      img: snackImage1,
    },
    {
      name: "Cheetos Crunchy",
      desc: "Crunchy and spicy curled chips with a bold flavor.",
      price: 3.79,
      img: snackImage2,
    },
    {
      name: "Mixed Candy Box",
      desc: "An assortment of everyone's favorite candies, including Snickers, Twix, Kit-Kat, Reese's, and more. Perfect for satisfying any sweet tooth!",
      price: 12.99,
      img: snackImage3,
    },
    {
      name: "Sugar Donut",
      desc: "Classic Sugar-covered donut, perfect for a sweet snack.",
      price: 4.59,
      img: snackImage4,
    },
    {
      name: "Doritos Variety Pack",
      desc: "A collection of Doritos flavors including Cool Ranch, Spicy Sweet Chili, Spicy Nacho, and Nacho Cheese. Perfect for snack lovers who enjoy bold and zesty tastes.",
      price: 9.99,
      img: snackImage5,
    },
    {
      name: "Ridged Potato Chips",
      desc: "Crispy and crunchy ridged potato chips with a perfectly salted flavor. Great for snacking or pairing with your favorite dip.",
      price: 4.99,
      img: snackImage6,
    },
  ],
};

export const reviews: Review[] = [
  {
    img: reviewImage1,
    comment:
      "Absolutely loved the crispy chicken burger! The flavors were spot on, and the delivery was super fast. Highly recommend!",
    name: "Samantha Lee",
    occupation: "Food Vlogger",
  },
  {
    img: reviewImage2,
    comment:
      "The Double Mac Burger is a must-try! Juicy patties with melted cheese – hands down the best I’ve had in town.",
    name: "David Chen",
    occupation: "YouTube Creator",
  },
  {
    img: reviewImage3,
    comment:
      "Great food, great service! Ordering through the app was easy, and the free delivery was a nice bonus. I’ll definitely be back!",
    name: "Mia Thompson",
    occupation: "Lifestyle Blogger",
  },
];

export const articles = [
  {
    title: "Look How We Make Beef Meat Tasty with This Technique",
    category: "Food",
    img: articleImage1,
    beginning:
      "Ever wondered why our beef burgers are so flavorful and juicy? Discover the secret technique behind our perfectly seasoned patties and learn how we bring out the best in every bite.",
  },
  {
    title: "Get a 20% Discount at Our Birthday Event for $20 and Above Spend",
    category: "News",
    img: articleImage2,
    beginning:
      "We’re celebrating another year of serving deliciousness! Join us at our birthday event and enjoy a 20% discount when you spend $20 or more. Don’t miss out on this special offer!",
  },
  {
    title: "Strawberry Smoothie is The Best Beverage for Your Hot Day",
    category: "Beverage",
    img: articleImage3,
    beginning:
      "Cool off with our refreshing strawberry smoothie! Made with fresh strawberries and a hint of sweetness, it’s the perfect drink to beat the heat and satisfy your cravings.",
  },
];
