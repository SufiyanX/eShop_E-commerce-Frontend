import React from "react";
import "./css/Home.css";
import Product from "./Product";

function Home() {
  const products = [
    {
      productImg:
        "https://rukminim2.flixcart.com/image/832/832/k3ahbww0/wallet-card-wallet/p/j/w/preet-brown-bmmww-wallet-for-men-preet-brown-bmwmw-wallet-for-original-imafgxappxaczjxy.jpeg?q=70&crop=true",
      productName: "Leather Wallet - Mini",
      productDescription:
        "Men Brown Artificial Leather Wallet - Mini  (5 Card Slots) Men Brown Artificial Leather Wallet - Mini  (5 Card Slots)",
      productRating: 5,
      productPrice: 525,
    },
    {
      productImg:
        "https://5.imimg.com/data5/SELLER/Default/2022/12/BY/CF/XZ/124700993/hp-laptop-backpack-bag.jpg",
      productName: "Laptop Backpack",
      productDescription:
        "Medium 30 L Laptop Backpack ASHPER CB  (Blue) Medium 30 L Laptop Backpack ASHPER CB  (Blue)",
      productRating: 3,
      productPrice: 459,
    },
    {
      productImg:
        "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/h/t/v/beluga-kreo-original-imagtmn6hquq3jwj.jpeg?q=70&crop=false",
      productName: "Beluga Gaming headphones",
      productDescription:
        "Kreo Beluga Gaming headphones over the head wired Headphones with mic cooling earpads Wired Gaming Headset  (3.5mm, Black & Purple, On the Ear)",
      productRating: 3,
      productPrice: 745,
    },
    {
      productImg:
        "https://rukminim2.flixcart.com/image/416/416/xif0q/headphone/7/8/n/em06-in-ear-type-c-earphone-with-mic-and-deep-bass-hd-sound-with-original-imagxw48ecuwyzkh.jpeg?q=70&crop=false",
      productName: "EM06 in-Ear Type C earphone",
      productDescription:
        "Blaupunkt EM06 in-Ear Type C earphone with Mic and Deep Bass,HD Sound with Noise Isolation Wired Headset  (Blue, In the Ear)",
      productRating: 4,
      productPrice: 299,
    },
    {
      productImg:
        "https://rukminim2.flixcart.com/image/416/416/xif0q/tv-entertainment-unit/8/e/f/particle-board-od-tu-lime-wgwt-32-odestar-white-original-imagu5j7gcwpdkfc.jpeg?q=70&crop=false",
      productName: "TV Entertainment Unit",
      productDescription:
        "Odestar Odestar Engineered Wood TV Entertainment Unit Set Top Box Stand, Mounted TV Unit Engineered Wood TV Entertainment Unit  (Finish Color - WHITE, DIY(Do-It-Yourself))",
      productRating: 5,
      productPrice: 1525,
    },
    {
      productImg:
        "https://rukminim2.flixcart.com/image/416/416/kuyf8nk0/sports-action-camera/p/e/z/black-waterproof-action-camera-with-front-lcd-and-touch-rear-original-imag7yg4haansvzn.jpeg?q=70&crop=false",
      productName: "GoPro Hero 10",
      productDescription:
        "GoPro Hero 10 Waterproof with Front LCD and Touch Rear Screens, 5.3K60 Ultra HD Video, 1080p Live Streaming, Webcam, Stabilization Sports and Action Camera  (Black, 23 MP)",
      productRating: 4,
      productPrice: 6584,
    },
  ];

  return (
    <div>
      <div className="home">
        <div className="home_container">
          <img
            src="https://www.jdmedia.co.za/images/carousel/Ecommerce-Banner-1920.jpg"
            alt="banner image"
            className="home_image"
          />
          <div className="product_container">
            {products.map((item) => {
              return <Product item={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
