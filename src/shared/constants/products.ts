import {
  product1,
  product1_2x,
  product2,
  product2_2x,
  product3,
  product3_2x,
  product4,
  product4_2x,
  product5,
  product5_2x,
  product6,
  product6_2x,
  product7,
  product7_2x,
  product8,
  product8_2x,
  product9,
  product9_2x,
  product10,
  product10_2x,
} from "../../assets";

// Products Constants
export const PRODUCTS = [
  {
    id: "1",
    name: "Akıllı Saat",
    price: "399,90 TL",
    image: product1,
    image2x: product1_2x,
    hasFreeDelivery: true,
    categoryId: "2", // Elektronik
  },
  {
    id: "2",
    name: "Parfüm",
    price: "299,90 TL",
    image: product2,
    image2x: product2_2x,
    categoryId: "12", // Parfüm
  },
  {
    id: "3",
    name: "Bonsai",
    price: "199,90 TL",
    image: product3,
    image2x: product3_2x,
    hasFreeDelivery: true,
    categoryId: "3", // Ev ve Yaşam
  },
  {
    id: "4",
    name: "Bileklik",
    price: "149,90 TL",
    image: product4,
    image2x: product4_2x,
    quantity: 4,
    categoryId: "10", // Moda, Aksesuar
  },
  {
    id: "5",
    name: "Sırt Çantası",
    price: "249,90 TL",
    image: product5,
    image2x: product5_2x,
    hasFreeDelivery: true,
    categoryId: "10", // Moda, Aksesuar
  },
  {
    id: "6",
    name: "Satranç Takımı",
    price: "179,90 TL",
    image: product6,
    image2x: product6_2x,
    categoryId: "11", // Ofis, Kırtasiye
  },
  {
    id: "7",
    name: "Peluş Ayı",
    price: "89,90 TL",
    image: product7,
    image2x: product7_2x,
    hasFreeDelivery: true,
    categoryId: "6", // Oyuncak
  },
  {
    id: "8",
    name: "Broş",
    price: "69,90 TL",
    image: product8,
    image2x: product8_2x,
    categoryId: "10", // Moda, Aksesuar
  },
  {
    id: "9",
    name: "Çikolata Kutusu",
    price: "129,90 TL",
    image: product9,
    image2x: product9_2x,
    hasFreeDelivery: true,
    categoryId: "9", // Hediye
  },
  {
    id: "10",
    name: "Gül Buketi",
    price: "199,90 TL",
    image: product10,
    image2x: product10_2x,
    hasFreeDelivery: true,
    categoryId: "8", // Çiçek
  },
] as const;
