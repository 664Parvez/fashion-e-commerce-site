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
import { Autoplay, Navigation } from 'swiper/modules';

// Icon
import { TbArrowBackUp, TbRosetteDiscountCheck } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { MdOutlineLocalShipping } from "react-icons/md";
import { FaShieldHeart, FaStar } from "react-icons/fa6";

// Image
import Demo from "../../public/image/demo.png"
import Blog from "../../public/image/blog.jpg"

// Component
import Sidegap from "@/components/sidegap";

export default function Home() {
  return (
    <>
      <Sidegap>

        <div id={homeCss.product_section_one}>
          <div className="d-flex justify-content-between align-items-center">
            <div className="mb-4">
              <h3 className="mb-0">Women's Clothing</h3>
              <p>We have your occasion covered</p>
            </div>
            <div>
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
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="womenProductSwiper"
          >
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
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="menProductSwiper"
          >
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

        <div id={homeCss.reviewSection}>
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
                navigation={true}
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
        </div>

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

        <div id={homeCss.faqSection}>
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
        </div>

        <div id={homeCss.ourclientsLogo}>

        </div>
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
