"use client"

import Image from "next/image";
import Link from "next/link";
import homeCss from "./styles/page.module.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation, Scrollbar } from 'swiper/modules';

// Icon
import { TbArrowBackUp, TbRosetteDiscountCheck } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { MdOutlineLocalShipping } from "react-icons/md";
import { FaShieldHeart, FaStar, FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

// Image
import Demo from "../../public/image/demo.png"
import Blog from "../../public/image/blog.jpg"

// Component
import Sidegap from "@/components/sidegap";


// Redux
import { useDispatch } from "react-redux";
import { addCart } from "@/redux/features/products/productSlice";
import { addWishlist } from "@/redux/features/wishlist/wishlistSlice";


// Products
const products = [
  {
      "id": 1,
      "quantity" : 1,
      "title": "iPhone 9",
      "slug" : "iphone-9",
      "description": "An apple mobile which is nothing like apple",
      "price": 549,
      "discountPercentage": 12.96,
      "rating": 4.69,
      "stock": 94,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      "images": [
        "https://i.dummyjson.com/data/products/1/1.jpg",
        "https://i.dummyjson.com/data/products/1/2.jpg",
        "https://i.dummyjson.com/data/products/1/3.jpg",
        "https://i.dummyjson.com/data/products/1/4.jpg",
        "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
      ]
    },
    {
      "id": 2,
      "quantity" : 1,
      "title": "iPhone X",
      "slug" : "iphone-x",
      "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      "price": 899,
      "discountPercentage": 17.94,
      "rating": 4.44,
      "stock": 34,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      "images": [
        "https://i.dummyjson.com/data/products/2/1.jpg",
        "https://i.dummyjson.com/data/products/2/2.jpg",
        "https://i.dummyjson.com/data/products/2/3.jpg",
        "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
      ]
    },
    {
      "id": 3,
      "quantity" : 1,
      "title": "Samsung Universe 9",
      "slug" : "Samsung-Universe-9",
      "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
      "price": 1249,
      "discountPercentage": 15.46,
      "rating": 4.09,
      "stock": 36,
      "brand": "Samsung",
      "category": "smartphones",
      "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
      "images": [
        "https://i.dummyjson.com/data/products/3/1.jpg"
      ]
    },
    {
      "id": 4,
      "quantity" : 1,
      "title": "OPPOF19",
      "slug" : "OPPOF19",
      "description": "OPPO F19 is officially announced on April 2021.",
      "price": 280,
      "discountPercentage": 17.91,
      "rating": 4.3,
      "stock": 123,
      "brand": "OPPO",
      "category": "smartphones",
      "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      "images": [
        "https://i.dummyjson.com/data/products/4/1.jpg",
        "https://i.dummyjson.com/data/products/4/2.jpg",
        "https://i.dummyjson.com/data/products/4/3.jpg",
        "https://i.dummyjson.com/data/products/4/4.jpg",
        "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
      ]
    },
    {
      "id": 5,
      "quantity" : 1,
      "title": "Huawei P30",
      "slug" : "Huawei-P30",
      "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      "price": 499,
      "discountPercentage": 10.58,
      "rating": 4.09,
      "stock": 32,
      "brand": "Huawei",
      "category": "smartphones",
      "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
      "images": [
        "https://i.dummyjson.com/data/products/5/1.jpg",
        "https://i.dummyjson.com/data/products/5/2.jpg",
        "https://i.dummyjson.com/data/products/5/3.jpg"
      ]
    },
    {
      "id": 6,
      "quantity" : 1,
      "title": "MacBook Pro",
      "slug" : "MacBook-Pro",
      "description": "MacBook Pro 2021 with mini-LED display may launch between September, November",
      "price": 1749,
      "discountPercentage": 11.02,
      "rating": 4.57,
      "stock": 83,
      "brand": "Apple",
      "category": "laptops",
      "thumbnail": "https://i.dummyjson.com/data/products/6/thumbnail.png",
      "images": [
        "https://i.dummyjson.com/data/products/6/1.png",
        "https://i.dummyjson.com/data/products/6/2.jpg",
        "https://i.dummyjson.com/data/products/6/3.png",
        "https://i.dummyjson.com/data/products/6/4.jpg"
      ]
    },
    {
      "id": 7,
      "quantity" : 1,
      "title": "Samsung Galaxy Book",
      "slug" : "Samsung-Galaxy-Book",
      "description": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
      "price": 1499,
      "discountPercentage": 4.15,
      "rating": 4.25,
      "stock": 50,
      "brand": "Samsung",
      "category": "laptops",
      "thumbnail": "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
      "images": [
        "https://i.dummyjson.com/data/products/7/1.jpg",
        "https://i.dummyjson.com/data/products/7/2.jpg",
        "https://i.dummyjson.com/data/products/7/3.jpg",
        "https://i.dummyjson.com/data/products/7/thumbnail.jpg"
      ]
    },
    {
      "id": 8,
      "quantity" : 1,
      "title": "Microsoft Surface Laptop 4",
      "slug" : "Microsoft-Surface-Laptop-4",
      "description": "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
      "price": 1499,
      "discountPercentage": 10.23,
      "rating": 4.43,
      "stock": 68,
      "brand": "Microsoft Surface",
      "category": "laptops",
      "thumbnail": "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
      "images": [
        "https://i.dummyjson.com/data/products/8/1.jpg",
        "https://i.dummyjson.com/data/products/8/2.jpg",
        "https://i.dummyjson.com/data/products/8/3.jpg",
        "https://i.dummyjson.com/data/products/8/4.jpg",
        "https://i.dummyjson.com/data/products/8/thumbnail.jpg"
      ]
    },
    {
      "id": 9,
      "quantity" : 1,
      "title": "Infinix INBOOK",
      "slug" : "Infinix-INBOOK",
      "description": "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
      "price": 1099,
      "discountPercentage": 11.83,
      "rating": 4.54,
      "stock": 96,
      "brand": "Infinix",
      "category": "laptops",
      "thumbnail": "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
      "images": [
        "https://i.dummyjson.com/data/products/9/1.jpg",
        "https://i.dummyjson.com/data/products/9/2.png",
        "https://i.dummyjson.com/data/products/9/3.png",
        "https://i.dummyjson.com/data/products/9/4.jpg",
        "https://i.dummyjson.com/data/products/9/thumbnail.jpg"
      ]
    },
    {
      "id": 10,
      "quantity" : 1,
      "title": "HP Pavilion 15-DK1056WM",
      "slug" : "HP-pavilion-15-DK1056WM",
      "description": "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
      "price": 1099,
      "discountPercentage": 6.18,
      "rating": 4.43,
      "stock": 89,
      "brand": "HP Pavilion",
      "category": "laptops",
      "thumbnail": "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
      "images": [
        "https://i.dummyjson.com/data/products/10/1.jpg",
        "https://i.dummyjson.com/data/products/10/2.jpg",
        "https://i.dummyjson.com/data/products/10/3.jpg",
        "https://i.dummyjson.com/data/products/10/thumbnail.jpeg"
      ]
    },
    {
      "id": 11,
      "quantity" : 1,
      "title": "perfume Oil",
      "slug" : "perfume-oil",
      "description": "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil",
      "price": 13,
      "discountPercentage": 8.4,
      "rating": 4.26,
      "stock": 65,
      "brand": "Impression of Acqua Di Gio",
      "category": "fragrances",
      "thumbnail": "https://i.dummyjson.com/data/products/11/thumbnail.jpg",
      "images": [
        "https://i.dummyjson.com/data/products/11/1.jpg",
        "https://i.dummyjson.com/data/products/11/2.jpg",
        "https://i.dummyjson.com/data/products/11/3.jpg",
        "https://i.dummyjson.com/data/products/11/thumbnail.jpg"
      ]
    },
    {
      "id": 12,
      "quantity" : 1,
      "title": "Brown Perfume",
      "slug" : "brown-perfume",
      "description": "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml",
      "price": 40,
      "discountPercentage": 15.66,
      "rating": 4,
      "stock": 52,
      "brand": "Royal_Mirage",
      "category": "fragrances",
      "thumbnail": "https://i.dummyjson.com/data/products/12/thumbnail.jpg",
      "images": [
        "https://i.dummyjson.com/data/products/12/1.jpg",
        "https://i.dummyjson.com/data/products/12/2.jpg",
        "https://i.dummyjson.com/data/products/12/3.png",
        "https://i.dummyjson.com/data/products/12/4.jpg",
        "https://i.dummyjson.com/data/products/12/thumbnail.jpg"
      ]
    },
    {
      "id": 13,
      "quantity" : 1,
      "title": "Fog Scent Xpressio Perfume",
      "slug" : "fog-scent-xpressio-perfume",
      "description": "Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men",
      "price": 13,
      "discountPercentage": 8.14,
      "rating": 4.59,
      "stock": 61,
      "brand": "Fog Scent Xpressio",
      "category": "fragrances",
      "thumbnail": "https://i.dummyjson.com/data/products/13/thumbnail.webp",
      "images": [
        "https://i.dummyjson.com/data/products/13/1.jpg",
        "https://i.dummyjson.com/data/products/13/2.png",
        "https://i.dummyjson.com/data/products/13/3.jpg",
        "https://i.dummyjson.com/data/products/13/4.jpg",
        "https://i.dummyjson.com/data/products/13/thumbnail.webp"
      ]
    },
    {
      "id": 14,
      "quantity" : 1,
      "title": "Non-Alcoholic Concentrated Perfume Oil",
      "slug" : "non-alcoholic-concentrated-perfume-oil",
      "description": "Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil",
      "price": 120,
      "discountPercentage": 15.6,
      "rating": 4.21,
      "stock": 114,
      "brand": "Al Munakh",
      "category": "fragrances",
      "thumbnail": "https://i.dummyjson.com/data/products/14/thumbnail.jpg",
      "images": [
        "https://i.dummyjson.com/data/products/14/1.jpg",
        "https://i.dummyjson.com/data/products/14/2.jpg",
        "https://i.dummyjson.com/data/products/14/3.jpg",
        "https://i.dummyjson.com/data/products/14/thumbnail.jpg"
      ]
    },
    {
      "id": 15,
      "quantity" : 1,
      "title": "Eau De Perfume Spray",
      "slug" : "iphone-9",
      "description": "Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality",
      "price": 30,
      "discountPercentage": 10.99,
      "rating": 4.7,
      "stock": 105,
      "brand": "Lord - Al-Rehab",
      "category": "fragrances",
      "thumbnail": "https://i.dummyjson.com/data/products/15/thumbnail.jpg",
      "images": [
        "https://i.dummyjson.com/data/products/15/1.jpg",
        "https://i.dummyjson.com/data/products/15/2.jpg",
        "https://i.dummyjson.com/data/products/15/3.jpg",
        "https://i.dummyjson.com/data/products/15/4.jpg",
        "https://i.dummyjson.com/data/products/15/thumbnail.jpg"
      ]
    },
]

export default function Home() {

  const dispatch = useDispatch()

  return (
    <>

      <div id={homeCss.hero_section}>
          <Swiper
            centeredSlides={true}
            grabCursor={true}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            scrollbar={{hide: true}}
            modules={[Autoplay, Scrollbar]}
            className="heroSwiper"
          >
            <SwiperSlide>
              <Image src={Blog} layout="responsive" width={0} height={0} alt=""></Image>
            </SwiperSlide>
            <SwiperSlide>
              <Image src={Blog} layout="responsive" width={0} height={0} alt=""></Image>
            </SwiperSlide>
            <SwiperSlide>
              <Image src={Blog} layout="responsive" width={0} height={0} alt=""></Image>
            </SwiperSlide>
          </Swiper>
      </div>

      <Sidegap>

        <div id={homeCss.productsCategories}>
          <div className="mb-4 text-center">
            <h3 className="mb-0">Top Categories</h3>
            <p>We have your occasion covered</p>
          </div>

          <Swiper
            slidesPerView="auto"
            spaceBetween={25}
            centeredSlides={true}
            grabCursor={true}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              300: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
              1100: {
                slidesPerView: 6,
                spaceBetween: 20,
              }
            }}
            navigation={{
              nextEl: ".women-product-button-next",
              prevEl: ".women-product-button-prev"
            }}
            modules={[Autoplay, Navigation]}
            className="womenProductSwiper"
          >
            <SwiperSlide>
              <div className={homeCss.categoryType}>
                <Link href="">
                  <div className="card">
                    <Image src={Demo} className="card-img" layout="responsive" width={0} height={0} alt=""></Image>
                    <div className="card-body">
                      <div className="text-center">
                        <h4 className="mb-0">T-Shirt</h4>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </SwiperSlide> 
            <SwiperSlide>
              <div className={homeCss.categoryType}>
                <Link href="">
                  <div className="card">
                    <Image src={Demo} className="card-img" layout="responsive" width={0} height={0} alt=""></Image>
                    <div className="card-body">
                      <div className="text-center">
                        <h4 className="mb-0">Polo Shirt</h4>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </SwiperSlide> 
            <SwiperSlide>
              <div className={homeCss.categoryType}>
                <Link href="">
                  <div className="card">
                    <Image src={Demo} className="card-img" layout="responsive" width={0} height={0} alt=""></Image>
                    <div className="card-body">
                      <div className="text-center">
                        <h4 className="mb-0">Kurti</h4>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </SwiperSlide> 
            <SwiperSlide>
              <div className={homeCss.categoryType}>
                <Link href="">
                  <div className="card">
                    <Image src={Demo} className="card-img" layout="responsive" width={0} height={0} alt=""></Image>
                    <div className="card-body">
                      <div className="text-center">
                        <h4 className="mb-0">Three Piece</h4>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </SwiperSlide> 
            <SwiperSlide>
              <div className={homeCss.categoryType}>
                <Link href="">
                  <div className="card">
                    <Image src={Demo} className="card-img" layout="responsive" width={0} height={0} alt=""></Image>
                    <div className="card-body">
                      <div className="text-center">
                        <h4 className="mb-0">Shirt</h4>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </SwiperSlide> 
            <SwiperSlide>
              <div className={homeCss.categoryType}>
                <Link href="">
                  <div className="card">
                    <Image src={Demo} className="card-img" layout="responsive" width={0} height={0} alt=""></Image>
                    <div className="card-body">
                      <div className="text-center">
                        <h4 className="mb-0">Pants</h4>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </SwiperSlide> 
            <SwiperSlide>
              <div className={homeCss.categoryType}>
                <Link href="">
                  <div className="card">
                    <Image src={Demo} className="card-img" layout="responsive" width={0} height={0} alt=""></Image>
                    <div className="card-body">
                      <div className="text-center">
                        <h4 className="mb-0">Hoodie</h4>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </SwiperSlide> 
            <SwiperSlide>
              <div className={homeCss.categoryType}>
                <Link href="">
                  <div className="card">
                    <Image src={Demo} className="card-img" layout="responsive" width={0} height={0} alt=""></Image>
                    <div className="card-body">
                      <div className="text-center">
                        <h4 className="mb-0">Shorts</h4>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </SwiperSlide> 
          </Swiper>
        </div>

        <div className={homeCss.three_banner_section}>
            <div className="row">
              <div className="col-lg-4 col-md-4">
                <Image src={Blog} alt="" layout="responsive" width={0} height={0} className="rounded"></Image>
              </div>
              <div className="col-lg-4 col-md-4">
                <Image src={Blog} alt="" layout="responsive" width={0} height={0} className="rounded"></Image>
              </div>
              <div className="col-lg-4 col-md-4">
                <Image src={Blog} alt="" layout="responsive" width={0} height={0} className="rounded"></Image>
              </div>
            </div>
        </div>

        <div id={homeCss.product_section_one}>
          <div className="d-flex justify-content-between align-items-center">
            <div className="mb-4">
              <h3 className="mb-0">Women's Clothing</h3>
              <p>We have your occasion covered</p>
            </div>
            <div>
              <ul className={homeCss.swiper_navigation}>
                <li>
                  <div className="women-product-button-prev"><FaArrowLeftLong /></div>
                </li>
                <li>
                  <div className="women-product-button-next"><FaArrowRightLong /></div>
                </li>
              </ul>
              <Link href="" className={homeCss.product_seemore}>See More</Link>
            </div>
          </div>

          <Swiper
            slidesPerView="auto"
            spaceBetween={25}
            centeredSlides={true}
            grabCursor={true}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              300: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              1100: {
                slidesPerView: 5,
                spaceBetween: 20,
              }
            }}
            navigation={{
              nextEl: ".women-product-button-next",
              prevEl: ".women-product-button-prev"
            }}
            modules={[Autoplay, Navigation]}
            className="womenProductSwiper"
          >

             {
              products.map((item) => {
                return (
                  <>      
                    <SwiperSlide key={item.id}>
                      <Link href={`/all-products/${item.category}/${item.slug}`}>
                        <div id={homeCss.imageWrap}>
                          <Image src={Demo} className="rounded-3" layout="responsive" width={0} height={0} alt=""></Image>
                        </div>
                      </Link>
                      <div id={homeCss.product_details}>
                        <Link href={`/all-products/${item.category}/${item.slug}`}>
                          <h5>{item.title}</h5>
                        </Link>
                        <div className="my-4">
                          <h4><span className={homeCss.cross_taka}>${item.price}</span> <b>${item.price - (item.price * item.discountPercentage / 100).toFixed(2)}</b></h4>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <button className="btn" id={homeCss.cart_btn} onClick={() => dispatch(addCart(item))} >Add To Cart</button>
                          </div>
                          <div>
                            <button className="btn" onClick={() => dispatch(addWishlist(item))}>
                              <FaShieldHeart className={homeCss.productWishlistBtn} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </>
                )
              })
            }
            {/* <SwiperSlide>
              <Link href={`/all-products/${proId.category}/${proId.slug}`}>
                <div id={homeCss.imageWrap}>
                  <Image src={Demo} className="rounded-3" layout="responsive" width={0} height={0} alt=""></Image>
                </div>
              </Link>
              <div id={homeCss.product_details}>
                <Link href="">
                  <h5>Sequin Prom Dreses Long Mermaid One Shoulder Formal Gowns Backless Evening Party Gowns with Slit</h5>
                </Link>
                <div className="my-4">
                  <h4><span className={homeCss.cross_taka}>৳400/-</span> <b>৳200/-</b></h4>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <Link className="btn" id={homeCss.cart_btn} href="">Add To Cart</Link>
                  </div>
                  <div>
                    <Link href="">
                      <FaShieldHeart className={homeCss.productWishlistBtn} />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="">
                <div id={homeCss.imageWrap}>
                  <Image src={Demo} className="rounded-3" layout="responsive" width={0} height={0} alt=""></Image>
                </div>
              </Link>
              <div id={homeCss.product_details}>
                <Link href="">
                  <h5>Sequin Prom Dreses Long Mermaid One Shoulder Formal Gowns Backless Evening Party Gowns with Slit</h5>
                </Link>
                <div className="my-4">
                  <h4><span className={homeCss.cross_taka}>৳400/-</span> <b>৳200/-</b></h4>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <Link className="btn" id={homeCss.cart_btn} href="">Add To Cart</Link>
                  </div>
                  <div>
                    <Link href="">
                      <FaShieldHeart className={homeCss.productWishlistBtn} />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="">
                <div id={homeCss.imageWrap}>
                  <Image src={Demo} className="rounded-3" layout="responsive" width={0} height={0} alt=""></Image>
                </div>
              </Link>
              <div id={homeCss.product_details}>
                <Link href="">
                  <h5>Sequin Prom Dreses Long Mermaid One Shoulder Formal Gowns Backless Evening Party Gowns with Slit</h5>
                </Link>
                <div className="my-4">
                  <h4><span className={homeCss.cross_taka}>৳400/-</span> <b>৳200/-</b></h4>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <Link className="btn" id={homeCss.cart_btn} href="">Add To Cart</Link>
                  </div>
                  <div>
                    <Link href="">
                      <FaShieldHeart className={homeCss.productWishlistBtn} />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="">
                <div id={homeCss.imageWrap}>
                  <Image src={Demo} className="rounded-3" layout="responsive" width={0} height={0} alt=""></Image>
                </div>
              </Link>
              <div id={homeCss.product_details}>
                <Link href="">
                  <h5>Sequin Prom Dreses Long Mermaid One Shoulder Formal Gowns Backless Evening Party Gowns with Slit</h5>
                </Link>
                <div className="my-4">
                  <h4><span className={homeCss.cross_taka}>৳400/-</span> <b>৳200/-</b></h4>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <Link className="btn" id={homeCss.cart_btn} href="">Add To Cart</Link>
                  </div>
                  <div>
                    <Link href="">
                      <FaShieldHeart className={homeCss.productWishlistBtn} />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="">
                <div id={homeCss.imageWrap}>
                  <Image src={Demo} className="rounded-3" layout="responsive" width={0} height={0} alt=""></Image>
                </div>
              </Link>
              <div id={homeCss.product_details}>
                <Link href="">
                  <h5>Sequin Prom Dreses Long Mermaid One Shoulder Formal Gowns Backless Evening Party Gowns with Slit</h5>
                </Link>
                <div className="my-4">
                  <h4><span className={homeCss.cross_taka}>৳400/-</span> <b>৳200/-</b></h4>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <Link className="btn" id={homeCss.cart_btn} href="">Add To Cart</Link>
                  </div>
                  <div>
                    <Link href="">
                      <FaShieldHeart className={homeCss.productWishlistBtn} />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="">
                <div id={homeCss.imageWrap}>
                  <Image src={Demo} className="rounded-3" layout="responsive" width={0} height={0} alt=""></Image>
                </div>
              </Link>
              <div id={homeCss.product_details}>
                <Link href="">
                  <h5>Sequin Prom Dreses Long Mermaid One Shoulder Formal Gowns Backless Evening Party Gowns with Slit</h5>
                </Link>
                <div className="my-4">
                  <h4><span className={homeCss.cross_taka}>৳400/-</span> <b>৳200/-</b></h4>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <Link className="btn" id={homeCss.cart_btn} href="">Add To Cart</Link>
                  </div>
                  <div>
                    <Link href="">
                      <FaShieldHeart className={homeCss.productWishlistBtn} />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="">
                <div id={homeCss.imageWrap}>
                  <Image src={Demo} className="rounded-3" layout="responsive" width={0} height={0} alt=""></Image>
                </div>
              </Link>
              <div id={homeCss.product_details}>
                <Link href="">
                  <h5>Sequin Prom Dreses Long Mermaid One Shoulder Formal Gowns Backless Evening Party Gowns with Slit</h5>
                </Link>
                <div className="my-4">
                  <h4><span className={homeCss.cross_taka}>৳400/-</span> <b>৳200/-</b></h4>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <Link className="btn" id={homeCss.cart_btn} href="">Add To Cart</Link>
                  </div>
                  <div>
                    <Link href="">
                      <FaShieldHeart className={homeCss.productWishlistBtn} />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="">
                <div id={homeCss.imageWrap}>
                  <Image src={Demo} className="rounded-3" layout="responsive" width={0} height={0} alt=""></Image>
                </div>
              </Link>
              <div id={homeCss.product_details}>
                <Link href="">
                  <h5>Sequin Prom Dreses Long Mermaid One Shoulder Formal Gowns Backless Evening Party Gowns with Slit</h5>
                </Link>
                <div className="my-4">
                  <h4><span className={homeCss.cross_taka}>৳400/-</span> <b>৳200/-</b></h4>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <Link className="btn" id={homeCss.cart_btn} href="">Add To Cart</Link>
                  </div>
                  <div>
                    <Link href="">
                      <FaShieldHeart className={homeCss.productWishlistBtn} />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide> */}
          </Swiper>
        </div>

        <div id={homeCss.twoImageSection}>
          <div className="container-lg">
            <div className="row">
              <div className="col-lg-6 col-md-6 mt-3">
                <div className={homeCss.twoImage}>
                  <Image src={Demo} layout="responsive" width={0} height={0} alt=""></Image>
                  <div className={homeCss.twoImageContents}>
                    <p>TOP COLLECTIONS</p>
                    <h3>Top Trand Style</h3>
                    <div className="mt-4">
                      <Link href="/mens">Shop Now</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 mt-3">
                <div className={homeCss.twoImage}>
                  <Image src={Demo} layout="responsive" width={0} height={0} alt=""></Image>
                  <div className={homeCss.twoImageContents}>
                    <p>PREMIUM ONLINE EXCLUSIVE</p>
                    <h3>Here Your Style</h3>
                    <div className="mt-4">
                      <Link href="/womens">Shop Now</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id={homeCss.product_section_one}>
          <div className="d-flex justify-content-between align-items-center">
            <div className="mb-4">
              <h3 className="mb-0">Men's Clothing</h3>
              <p>We have your occasion covered</p>
            </div>
            <div>
              <ul className={homeCss.swiper_navigation}>
                <li>
                  <div className="men-product-button-prev"><FaArrowLeftLong /></div>
                </li>
                <li>
                  <div className="men-product-button-next"><FaArrowRightLong /></div>
                </li>
              </ul>
              <Link href="" className={homeCss.product_seemore}>See More</Link>
            </div>
          </div>

          <Swiper
            slidesPerView="auto"
            spaceBetween={25}
            centeredSlides={true}
            grabCursor={true}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              300: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              1100: {
                slidesPerView: 5,
                spaceBetween: 20,
              }
            }}
            navigation={{
              nextEl: ".men-product-button-next",
              prevEl: ".men-product-button-prev"
            }}
            modules={[Autoplay, Navigation]}
            className="menProductSwiper"
          >

            {
              products.map((item) => {
                return (
                  <>      
                    <SwiperSlide key={item.id}>
                      <Link href={`/all-products/${item.category}/${item.slug}`}>
                        <div id={homeCss.imageWrap}>
                          <Image src={Demo} className="rounded-3" layout="responsive" width={0} height={0} alt=""></Image>
                        </div>
                      </Link>
                      <div id={homeCss.product_details}>
                        <Link href={`/all-products/${item.category}/${item.slug}`}>
                          <h5>{item.title}</h5>
                        </Link>
                        <div className="my-4">
                          <h4><span className={homeCss.cross_taka}>${item.price}</span> <b>${item.price - (item.price * item.discountPercentage / 100).toFixed(2)}</b></h4>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <button className="btn" id={homeCss.cart_btn} onClick={() => dispatch(addCart(item))} >Add To Cart</button>
                          </div>
                          <div>
                            <button className="btn">
                              <FaShieldHeart className={homeCss.productWishlistBtn} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </>
                )
              })
            }
            {/* <SwiperSlide>
              <Link href="">
                <div id={homeCss.imageWrap}>
                  <Image src={Demo} className="rounded-3" layout="responsive" width={0} height={0} alt=""></Image>
                </div>
              </Link>
              <div id={homeCss.product_details}>
                <Link href="">
                  <h5>Sequin Prom Dreses Long Mermaid One Shoulder Formal Gowns Backless Evening Party Gowns with Slit</h5>
                </Link>
                <div className="my-4">
                  <h4><span className={homeCss.cross_taka}>৳400/-</span> <b>৳200/-</b></h4>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <Link className="btn" id={homeCss.cart_btn} href="">Add To Cart</Link>
                  </div>
                  <div>
                    <Link href="">
                      <FaShieldHeart className={homeCss.productWishlistBtn} />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="">
                <div id={homeCss.imageWrap}>
                  <Image src={Demo} className="rounded-3" layout="responsive" width={0} height={0} alt=""></Image>
                </div>
              </Link>
              <div id={homeCss.product_details}>
                <Link href="">
                  <h5>Sequin Prom Dreses Long Mermaid One Shoulder Formal Gowns Backless Evening Party Gowns with Slit</h5>
                </Link>
                <div className="my-4">
                  <h4><span className={homeCss.cross_taka}>৳400/-</span> <b>৳200/-</b></h4>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <Link className="btn" id={homeCss.cart_btn} href="">Add To Cart</Link>
                  </div>
                  <div>
                    <Link href="">
                      <FaShieldHeart className={homeCss.productWishlistBtn} />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="">
                <div id={homeCss.imageWrap}>
                  <Image src={Demo} className="rounded-3" layout="responsive" width={0} height={0} alt=""></Image>
                </div>
              </Link>
              <div id={homeCss.product_details}>
                <Link href="">
                  <h5>Sequin Prom Dreses Long Mermaid One Shoulder Formal Gowns Backless Evening Party Gowns with Slit</h5>
                </Link>
                <div className="my-4">
                  <h4><span className={homeCss.cross_taka}>৳400/-</span> <b>৳200/-</b></h4>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <Link className="btn" id={homeCss.cart_btn} href="">Add To Cart</Link>
                  </div>
                  <div>
                    <Link href="">
                      <FaShieldHeart className={homeCss.productWishlistBtn} />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="">
                <div id={homeCss.imageWrap}>
                  <Image src={Demo} className="rounded-3" layout="responsive" width={0} height={0} alt=""></Image>
                </div>
              </Link>
              <div id={homeCss.product_details}>
                <Link href="">
                  <h5>Sequin Prom Dreses Long Mermaid One Shoulder Formal Gowns Backless Evening Party Gowns with Slit</h5>
                </Link>
                <div className="my-4">
                  <h4><span className={homeCss.cross_taka}>৳400/-</span> <b>৳200/-</b></h4>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <Link className="btn" id={homeCss.cart_btn} href="">Add To Cart</Link>
                  </div>
                  <div>
                    <Link href="">
                      <FaShieldHeart className={homeCss.productWishlistBtn} />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="">
                <div id={homeCss.imageWrap}>
                  <Image src={Demo} className="rounded-3" layout="responsive" width={0} height={0} alt=""></Image>
                </div>
              </Link>
              <div id={homeCss.product_details}>
                <Link href="">
                  <h5>Sequin Prom Dreses Long Mermaid One Shoulder Formal Gowns Backless Evening Party Gowns with Slit</h5>
                </Link>
                <div className="my-4">
                  <h4><span className={homeCss.cross_taka}>৳400/-</span> <b>৳200/-</b></h4>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <Link className="btn" id={homeCss.cart_btn} href="">Add To Cart</Link>
                  </div>
                  <div>
                    <Link href="">
                      <FaShieldHeart className={homeCss.productWishlistBtn} />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="">
                <div id={homeCss.imageWrap}>
                  <Image src={Demo} className="rounded-3" layout="responsive" width={0} height={0} alt=""></Image>
                </div>
              </Link>
              <div id={homeCss.product_details}>
                <Link href="">
                  <h5>Sequin Prom Dreses Long Mermaid One Shoulder Formal Gowns Backless Evening Party Gowns with Slit</h5>
                </Link>
                <div className="my-4">
                  <h4><span className={homeCss.cross_taka}>৳400/-</span> <b>৳200/-</b></h4>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <Link className="btn" id={homeCss.cart_btn} href="">Add To Cart</Link>
                  </div>
                  <div>
                    <Link href="">
                      <FaShieldHeart className={homeCss.productWishlistBtn} />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="">
                <div id={homeCss.imageWrap}>
                  <Image src={Demo} className="rounded-3" layout="responsive" width={0} height={0} alt=""></Image>
                </div>
              </Link>
              <div id={homeCss.product_details}>
                <Link href="">
                  <h5>Sequin Prom Dreses Long Mermaid One Shoulder Formal Gowns Backless Evening Party Gowns with Slit</h5>
                </Link>
                <div className="my-4">
                  <h4><span className={homeCss.cross_taka}>৳400/-</span> <b>৳200/-</b></h4>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <Link className="btn" id={homeCss.cart_btn} href="">Add To Cart</Link>
                  </div>
                  <div>
                    <Link href="">
                      <FaShieldHeart className={homeCss.productWishlistBtn} />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="">
                <div id={homeCss.imageWrap}>
                  <Image src={Demo} className="rounded-3" layout="responsive" width={0} height={0} alt=""></Image>
                </div>
              </Link>
              <div id={homeCss.product_details}>
                <Link href="">
                  <h5>Sequin Prom Dreses Long Mermaid One Shoulder Formal Gowns Backless Evening Party Gowns with Slit</h5>
                </Link>
                <div className="my-4">
                  <h4><span className={homeCss.cross_taka}>৳400/-</span> <b>৳200/-</b></h4>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <Link className="btn" id={homeCss.cart_btn} href="">Add To Cart</Link>
                  </div>
                  <div>
                    <Link href="">
                      <FaShieldHeart className={homeCss.productWishlistBtn} />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <Link href="">
                <div id={homeCss.imageWrap}>
                  <Image src={Demo} className="rounded-3" layout="responsive" width={0} height={0} alt=""></Image>
                </div>
              </Link>
              <div id={homeCss.product_details}>
                <Link href="">
                  <h5>Sequin Prom Dreses Long Mermaid One Shoulder Formal Gowns Backless Evening Party Gowns with Slit</h5>
                </Link>
                <div className="my-4">
                  <h4><span className={homeCss.cross_taka}>৳400/-</span> <b>৳200/-</b></h4>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <Link className="btn" id={homeCss.cart_btn} href="">Add To Cart</Link>
                  </div>
                  <div>
                    <Link href="">
                      <FaShieldHeart className={homeCss.productWishlistBtn} />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide> */}
          </Swiper>
        </div>

        <div id={homeCss.video_section}>
          <iframe width="100%" height="600" src="https://www.youtube.com/embed/VGUwYrAVIJ4?si=NvDe9xUJ-ibrgWVN" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>

        <div id={homeCss.nineSection}>
          <div className="container-lg">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-6">
                <Image src={Demo} layout="responsive" width={0} height={0} alt=""></Image>
              </div>
              <div className="col-lg-7 col-md-6">
                <h3>Shop the look</h3>
                <p>Here is your chance to upgrade your wardrobe with a variation of styles and fits that are both. your wardrobe with a variation of styles is your chance to upgrade</p>

                <div className="mt-5">
                  <Link href="/products" className="btn btn-lg">Discover Now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div id={homeCss.reviewSection}>
          <div className="text-center">
            <h3 className="mb-0">Client Reviews</h3>
            <p>All Client Reviews Here</p>
          </div>
          
          <div className="mt-4">
            <div id={homeCss.review_slider}>

              <Swiper
                slidesPerView="auto"
                spaceBetween={25}
                centeredSlides={true}
                grabCursor={true}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  300: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                  },
                  1100: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                  }
                }}
                navigation={{
                  nextEl: ".review-button-next",
                  prevEl: ".review-button-prev"
                }}
                modules={[Autoplay, Navigation]}
                className="reviewSwiper"
              >
                <SwiperSlide>
                  <div className={homeCss.reviewBox}>
                    <p>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa eligendi, aperiam inventore excepturi enim voluptatibus sequi voluptatem mollitia. Natus quasi iusto animi sed nesciunt esse porro harum necessitatibus repellendus facere!"</p>

                    <div className="mt-5">
                      <ul>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                      </ul>
                      <h5 className="mb-0">Michael L.</h5>
                      <p>London, UK</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={homeCss.reviewBox}>
                    <p>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa eligendi, aperiam inventore excepturi enim voluptatibus sequi voluptatem mollitia. Natus quasi iusto animi sed nesciunt esse porro harum necessitatibus repellendus facere!"</p>

                    <div className="mt-5">
                      <ul>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                      </ul>
                      <h5 className="mb-0">Michael L.</h5>
                      <p>London, UK</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={homeCss.reviewBox}>
                    <p>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa eligendi, aperiam inventore excepturi enim voluptatibus sequi voluptatem mollitia. Natus quasi iusto animi sed nesciunt esse porro harum necessitatibus repellendus facere!"</p>

                    <div className="mt-5">
                      <ul>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                      </ul>
                      <h5 className="mb-0">Michael L.</h5>
                      <p>London, UK</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={homeCss.reviewBox}>
                    <p>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa eligendi, aperiam inventore excepturi enim voluptatibus sequi voluptatem mollitia. Natus quasi iusto animi sed nesciunt esse porro harum necessitatibus repellendus facere!"</p>

                    <div className="mt-5">
                      <ul>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                      </ul>
                      <h5 className="mb-0">Michael L.</h5>
                      <p>London, UK</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={homeCss.reviewBox}>
                    <p>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa eligendi, aperiam inventore excepturi enim voluptatibus sequi voluptatem mollitia. Natus quasi iusto animi sed nesciunt esse porro harum necessitatibus repellendus facere!"</p>

                    <div className="mt-5">
                      <ul>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                      </ul>
                      <h5 className="mb-0">Michael L.</h5>
                      <p>London, UK</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={homeCss.reviewBox}>
                    <p>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa eligendi, aperiam inventore excepturi enim voluptatibus sequi voluptatem mollitia. Natus quasi iusto animi sed nesciunt esse porro harum necessitatibus repellendus facere!"</p>

                    <div className="mt-5">
                      <ul>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                      </ul>
                      <h5 className="mb-0">Michael L.</h5>
                      <p>London, UK</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={homeCss.reviewBox}>
                    <p>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa eligendi, aperiam inventore excepturi enim voluptatibus sequi voluptatem mollitia. Natus quasi iusto animi sed nesciunt esse porro harum necessitatibus repellendus facere!"</p>

                    <div className="mt-5">
                      <ul>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                      </ul>
                      <h5 className="mb-0">Michael L.</h5>
                      <p>London, UK</p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
            
            <div className="text-end mt-4">
              <ul className={homeCss.swiper_navigation}>
                <li>
                  <div className="review-button-prev"><FaArrowLeftLong /></div>
                </li>
                <li>
                  <div className="review-button-next"><FaArrowRightLong /></div>
                </li>
              </ul>
            </div>
        </div> */}

        <div id={homeCss.homeBlogSection}>
          <div className="text-center">
            <h3 className="mb-0">Latest Blog</h3>
            <p>From Our Journal</p>
          </div>

          <div className="mt-4">
            <div className="row">
              <div className="col-lg-3 col-md-6 mt-3">
                <div>
                  <div className="card">
                    <Image src={Blog} width={0} height={0} layout="responsive" className="card-img" alt=""></Image>
                    <div className="card-body">
                      <h4 className="card-heading">Blog One</h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, consequuntur! Dicta dolore laboriosam fugit libero. . .</p>
                      <div className="mt-4">
                        <Link href="">Learn More</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mt-3">
                <div>
                  <div className="card">
                    <Image src={Blog} width={0} height={0} layout="responsive" className="card-img" alt=""></Image>
                    <div className="card-body">
                      <h4 className="card-heading">Blog One</h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, consequuntur! Dicta dolore laboriosam fugit libero. . .</p>
                      <div className="mt-4">
                        <Link href="">Learn More</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mt-3">
                <div>
                  <div className="card">
                    <Image src={Blog} width={0} height={0} layout="responsive" className="card-img" alt=""></Image>
                    <div className="card-body">
                      <h4 className="card-heading">Blog One</h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, consequuntur! Dicta dolore laboriosam fugit libero. . .</p>
                      <div className="mt-4">
                        <Link href="">Learn More</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mt-3">
                <div>
                  <div className="card">
                    <Image src={Blog} width={0} height={0} layout="responsive" className="card-img" alt=""></Image>
                    <div className="card-body">
                      <h4 className="card-heading">Blog One</h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, consequuntur! Dicta dolore laboriosam fugit libero. . .</p>
                      <div className="mt-4">
                        <Link href="">Learn More</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div id={homeCss.faqSection}>
          <div className="text-center">
            <h3 className="mb-0">Frequently Asked Question</h3>
          </div>
          
          <div className="mt-4">
            <div className="container-lg">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Accordion Item #1
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <strong>This is the first item’s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Accordion Item #2
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <strong>This is the second item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Accordion Item #3
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <strong>This is the third item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

      </Sidegap>
       
       <hr />
        <div id={homeCss.icon_box}>
          <div className="container-lg">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="d-flex justify-content-start align-items-center gap-4" id={homeCss.iconBoxItem}>
                  <div>
                    <div><TbArrowBackUp className={homeCss.iconBoxIcon} /></div>
                  </div>
                  <div>
                    <h4>14-Day Returns</h4>
                    <p className="mb-0">Risk-free shopping with easy returns.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="d-flex justify-content-start align-items-center gap-4" id={homeCss.iconBoxItem}>
                  <div>
                    <div><MdOutlineLocalShipping className={homeCss.iconBoxIcon} /></div>
                  </div>
                  <div>
                    <h4>Free Shipping</h4>
                    <p className="mb-0">No extra costs, just the price you see.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="d-flex justify-content-start align-items-center gap-4" id={homeCss.iconBoxItem}>
                  <div>
                    <div><BiSupport className={homeCss.iconBoxIcon} /></div>
                  </div>
                  <div>
                    <h4>24/7 Support</h4>
                    <p className="mb-0">24/7 support, always here just for you.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="d-flex justify-content-start align-items-center gap-4" id={homeCss.iconBoxItem}>
                  <div>
                    <div><TbRosetteDiscountCheck className={homeCss.iconBoxIcon} /></div>
                  </div>
                  <div>
                    <h4>Member Discounts</h4>
                    <p className="mb-0">Special prices for our loyal customers.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

    </>
  );
}
