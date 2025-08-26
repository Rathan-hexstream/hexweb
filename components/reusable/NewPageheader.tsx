import React from "react";
import Image, { StaticImageData } from "next/image";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import slider1 from "@/public/assets/slider/Slide1.jpeg";
import slider2 from "@/public/assets/slider/Slide2.jpeg";
import slider3 from "@/public/assets/slider/Slide3.jpeg";
import slider4 from "@/public/assets/slider/Slide4.jpeg";
import slider5 from "@/public/assets/slider/Slide5.jpeg";
//import u360 from "@/public/assets/slider/Utility360Video.mp4";

function NewPageheader({
  img,
  title,
  description,
  richText,
  aboutClient,
  type,
}: {
  img?: StaticImageData;
  title: string;
  description?: string;
  richText?: any;
  aboutClient?: any;
  type?: string;
}) {
  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  return (
      <div className="relative lg:overflow-hidden bg-prime flex justify-between context-innter-pages">
        <div className="bg-prime pb-8 sm:pb-8">
            <svg
              className="absolute inset-y-0 -right-24 hidden h-full w-52 fill-prime translate-x-1/2 transform text-accent lg:block"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="-50000,0 100,0 50,100" />
            </svg>
            <div className="">
              <main className="mx-auto max-w-7xl sm:pt-14 md:px-4  lg:px-8 ">
                <div className="sm:absolute lg:hidden top-0 left-0 -z-10 h-full w-full overflow-clip">
                  <div className="sm:absolute top-0 left-0 w-full h-full" />
                  {img && (
                    <Image
                      alt="Pageheader Image"
                      src={img}
                      className="w-full h-full brightness-50"
                      width={1200}
                      height={1200}
                    />
                  )}
                  <div className="" />
                </div>
                <div className="text-center lg:text-left w-15/12 mx-auto">
                  {type && (
                    <div className="pb-3">
                      <span className="bg-primary/80 rounded-full px-3 py-1 text-white text-sm">
                        {type}
                      </span>
                    </div>
                  )}
                  <h1 className="text-2xl font-bold tracking-tight !text-primary lg:!text-primary sm:text-3xl">
                    <span className="block xl:inline">{title}</span>{" "}
                  </h1>

                  {description && (
                    <p className="mt-3 text-base  !text-primary lg:!text-primary sm:mx-auto sm:max-w-xl sm:text-lg md:text-xl lg:mx-0">
                      {description}
                    </p>
                  )}

                  {richText && (
                    <div className="mt-4 prose prose-teal leading-relaxed !text-primary sm:!text-white lg:!text-primary">
                      <RichText content={richText} />
                    </div>
                  )}
                  {aboutClient && (
                    <div>
                      <h2
                        className={`md:text-4xl text-2xl font-bold !text-primary sm:!text-white lg:!text-primary pt-4`}
                      >
                        About the Client
                      </h2>
                      <div className="md:prose prose-teal leading-5 !text-primary sm:!text-white lg:!text-primary lg:text-left text-center">
                        <RichText content={aboutClient} />
                      </div>
                    </div>
                  )}
                </div>
              </main>
            </div>
          </div>
        <div className="lg:block lg:inset-y-0 lg:right-0 lg:w-1/2">
          {(img && title !== "Utility360") &&  (
              <Image
                  className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full object- image-custom"
                  src={img}
                  alt="Two women discussing a business plan."
                  width={400}
                  height={300}
              />
          )}
          {(img && title === "Utility360")  && (
              <div className={'mt-5 mb-5 content-center'}>
                <video width="550" height="360"  preload="metadata"  controlsList="nodownload"  poster="@/public/assets/slider/Slide2.jpeg" autoPlay={true} muted={true}>
                  <source src="https://media.graphassets.com/wjSzY48pTm2k94ET26Om" type="video/mp4" className="object-cover"/>
                </video>
{/*                <Slide
                    nextArrow={<button style={{
                      background: 'none',
                      border: '0px',
                      width: '30px'
                    }}><svg fill="#fc4102" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z" /></svg></button>}
                    prevArrow={<button style={{
                      background: 'none',
                      border: '0px',
                      width: '30px'
                    }}><svg fill="#fc4102" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" /></svg></button>}>
                  <div>
                    <Image
                        src={slider1}
                        alt="Utility360"
                        width={1200}
                        height={800}
                    />
                  </div>
                  <div>
                    <Image
                        src={slider2}
                        alt="Utility360"
                        width={1200}
                        height={800}
                    />
                  </div>
                  <div>
                    <Image
                        src={slider3}
                        alt="Utility360"
                        width={1200}
                        height={800}
                    />
                  </div>
                  <div>
                    <Image
                        src={slider4}
                        alt="Utility360"
                        width={1200}
                        height={800}
                    />
                  </div>
                  <div>
                    <Image
                        src={slider5}
                        alt="Utility360"
                        width={1200}
                        height={800}
                    />
                  </div>
                </Slide>*/}
              </div>
          )}
        </div>
      </div>
  );
}

export default NewPageheader;
