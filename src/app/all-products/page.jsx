"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Sidegap from '@/components/sidegap'

// Style
import ProductCss from "../../app/styles/products.module.css"

// Image
import CateMen from "../../../public/image/men-cate.jpg"
import CateWomen from "../../../public/image/women-cate.jpg"
import CateKid from "../../../public/image/kid-cate.jpg"
import CateOther from "../../../public/image/other-cate.jpg"


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

// import required modules
import { Autoplay, Scrollbar } from 'swiper/modules';


const page = () => {
  return (
    <>
        <Sidegap>
            <div className="text-center my-5">
              <h1>Products</h1>
              <p><Link href="/">Home</Link> | Products</p>
            </div>
            
            <div id="product_category" className='mb-5'>
                <div className='row'>
                    <div className="col-lg-3 col-md-6 mt-4">
                        <div>
                            <Link href="">
                                <Swiper
                                    scrollbar={{
                                        hide: true,
                                    }}
                                    loop={true}
                                    autoplay={{
                                        delay: 2000,
                                        disableOnInteraction: false,
                                    }}
                                    modules={[Autoplay, Scrollbar]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <Image id={ProductCss.categoriesImage} src={CateMen} width={0} height={0} layout='responsive' alt=''></Image>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Image id={ProductCss.categoriesImage} src={CateMen} width={0} height={0} layout='responsive' alt=''></Image>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Image id={ProductCss.categoriesImage} src={CateMen} width={0} height={0} layout='responsive' alt=''></Image>
                                    </SwiperSlide>
                                </Swiper>
                                <div id={ProductCss.categoryName}>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <h4 className='mb-0'>Men's</h4>
                                        </div>
                                        <div>
                                            <p className='mb-0'>Items: 23</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-4">
                        <div>
                            <Link href="">
                                <Swiper
                                    scrollbar={{
                                        hide: true,
                                    }}
                                    loop={true}
                                    autoplay={{
                                        delay: 2200,
                                        disableOnInteraction: false,
                                    }}
                                    modules={[Autoplay, Scrollbar]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <Image id={ProductCss.categoriesImage} src={CateWomen} width={0} height={0} layout='responsive' alt=''></Image>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Image id={ProductCss.categoriesImage} src={CateWomen} width={0} height={0} layout='responsive' alt=''></Image>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Image id={ProductCss.categoriesImage} src={CateWomen} width={0} height={0} layout='responsive' alt=''></Image>
                                    </SwiperSlide>
                                </Swiper>
                                <div id={ProductCss.categoryName}>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <h4 className='mb-0'>Women's</h4>
                                        </div>
                                        <div>
                                            <p className='mb-0'>Items: 23</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-4">
                        <div>
                            <Link href="">
                                <Swiper
                                    scrollbar={{
                                        hide: true,
                                    }}
                                    loop={true}
                                    autoplay={{
                                        delay: 2400,
                                        disableOnInteraction: false,
                                    }}
                                    modules={[Autoplay, Scrollbar]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <Image id={ProductCss.categoriesImage} src={CateKid} width={0} height={0} layout='responsive' alt=''></Image>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Image id={ProductCss.categoriesImage} src={CateKid} width={0} height={0} layout='responsive' alt=''></Image>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Image id={ProductCss.categoriesImage} src={CateKid} width={0} height={0} layout='responsive' alt=''></Image>
                                    </SwiperSlide>
                                </Swiper>
                                <div id={ProductCss.categoryName}>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <h4 className='mb-0'>Kid's</h4>
                                        </div>
                                        <div>
                                            <p className='mb-0'>Items: 23</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-4">
                        <div>
                            <Link href="">
                                <Swiper
                                    scrollbar={{
                                        hide: true,
                                    }}
                                    loop={true}
                                    autoplay={{
                                        delay: 2600,
                                        disableOnInteraction: false,
                                    }}
                                    modules={[Autoplay, Scrollbar]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <Image id={ProductCss.categoriesImage} src={CateOther} width={0} height={0} layout='responsive' alt=''></Image>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Image id={ProductCss.categoriesImage} src={CateOther} width={0} height={0} layout='responsive' alt=''></Image>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Image id={ProductCss.categoriesImage} src={CateOther} width={0} height={0} layout='responsive' alt=''></Image>
                                    </SwiperSlide>
                                </Swiper>
                                <div id={ProductCss.categoryName}>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <h4 className='mb-0'>Accessories</h4>
                                        </div>
                                        <div>
                                            <p className='mb-0'>Items: 23</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center my-5">
              <h1>Our All Products</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, repellendus enim, quo laboriosam laudantium, iure harum fuga reiciendis ullam similique velit vitae cupiditate. Fugit alias quod repellendus est non molestiae, amet temporibus commodi praesentium officiis provident! Omnis mollitia dolorum in.</p>
            </div>

            <div className="my-5">
                <div id={ProductCss.all_products}>
                    
                </div>
            </div>
        </Sidegap>
    </>
  )
}

export default page