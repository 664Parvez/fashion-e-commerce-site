import Image from "next/image";
import Link from "next/link";
import homeCss from "./styles/page.module.css";

// Icon
import { TbArrowBackUp, TbRosetteDiscountCheck } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { MdOutlineLocalShipping } from "react-icons/md";

// Image
import Demo from "../../public/image/demo.png"

// Component
import Sidegap from "@/components/sidegap";

export default function Home() {
  return (
    <>
      <Sidegap>

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
        </div>

        <div id={homeCss.homeBlogSection}>
          <div className="text-center">
            <h3 className="mb-0">Latest Blog</h3>
            <p>From Our Journal</p>
          </div>
        </div>

        <div id={homeCss.faqSection}>
          <div className="text-center">
            <h3 className="mb-0">Frequently Asked Question</h3>
          </div>
        </div>

        <div id={homeCss.ourclientsLogo}>

        </div>
      </Sidegap>
       
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
