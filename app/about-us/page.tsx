import { BookMarked, Fingerprint, Handshake, Ticket } from "lucide-react";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
};

export default function AboutUs() {
  return (
    <div className="mt-20 text-black w-full flex flex-col gap-32 md:gap-4 justify-center items-center">
      <section className="md:my-[120px]  p-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <div className="rounded-[10px] md:flex gap-8 flex-row w-full items-center">
          <div className="md:w-1/2  flex justify-center py-8 md:items-start flex-col">
            <BookMarked className="w-[24px] mb-8 h-[24px]" />
            <h1 className="text-left sm:text-[96px] text-[52px] mb-4 font-semibold tracking-[-6px] leading-[52px] sm:leading-[91px]">
              <span className="text-gcs_green">Our</span>
              <br />
              <span>Story</span>
            </h1>
            <p className="text-[13px] md:text-left">
              Global Crop Sales (GCS) was founded by William Kumwenda, a lawyer
              with a wealth of experience in agribusiness. William saw an
              opportunity to create a global company focused on marketing and
              selling premium nuts and beans. Starting with this vision, William
              quickly attracted leading nuts and beans producers who became
              dedicated supply and processing partners.
              <br />
              <br />
              This collaboration helped establish GCS gain global credibility
              through supplying premium produce over a period of time. GCS is
              now known as a trusted supplier of high-quality peanuts, macadamia
              nuts, and beans. Since its inception, GCS has grown significantly,
              now operating in over 10 African countries and having a presence
              in European and Asian markets.
            </p>
          </div>
          <div className="md:w-1/2 w-full  h-[500px] relative">
            <Image
              src="/test.svg"
              alt="About Us illustration"
              layout="fill"
              objectFit="cover"
              className="rounded-[10px]"
              sizes="100vw"
            />
            <div className=" absolute bottom-24 h-[300px] bg-white  rounded-r-[10px] overflow-hidden">
              <div className="relative w-full h-[250px]">
                <Image
                  src="/Founder.svg"
                  alt="William Kumwenda"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="py-2 pl-2 pr-3">
                <p className="text-[10px] ml-1">Mr William Kumwenda, Founder</p>
                <Image
                  width={24}
                  height={24}
                  src="/LinkedIn.svg"
                  alt="Will Kumwenda"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 md:pb-0 pb-[120px] md:my-[120px] mb-[60px]  md:flex-row md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <div className="rounded-[10px] bg-gcs_lightgreen h-[452px] md:pb-[0px] pb-[200px]  md:flex flex-row ">
          <div className="md:w-1/2 p-8 flex justify-center  py-8 md:items-start flex-col">
            <Fingerprint className="w-[24px] mb-2 h-[24px]" />
            <h3 className="text-[24px] pb-4  md:text-left tracking-[-2px] font-medium">
              Who are we?
            </h3>
            <p className="text-[13px] md:text-left">
              Global Crop Sales is a trusted international trading company
              specializing in the supply of premium peanuts, macadamia nuts, and
              beans.
              <br />
              <br />
              With a proven track record of delivering high-quality products to
              clients worldwide, we are committed to upholding the highest
              standards in both sourcing and service. Our extensive global
              network ensures reliable and timely distribution, making us the
              preferred partner for businesses seeking the best in agricultural
              products.
            </p>
          </div>
          <div className="md:w-1/2 h-full relative">
            <Image
              src="/farm.svg"
              fill
              alt={""}
              sizes="100vw"
              className="flex object-cover md:rounded-r-[10px] md:rounded-bl-none rounded-b-[10px]"
            />
          </div>
        </div>
      </section>
      <section className="px-4 md:mt[0px] md:mt-[100px] py-[200px] w-full relative md:flex-row md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex justify-center items-center">
        <Image
          src="/BackgroundPartners.svg"
          alt="BackgroundPartners"
          className="absolute z-10 object-cover"
          sizes="100vw"
          fill
        />
        <div className="rounded-[10px] z-20 bg-white relative  w-full md:flex flex-row ">
          <div className=" p-8 flex z-20 bg-white  justify-center py-8 md:items-start flex-col rounded-[10px]">
            <Handshake className="w-[24px] mb-2 h-[24px]" />
            <h3 className="text-[24px] pb-4 md:text-left tracking-[-2px] font-medium">
              Our Partners
            </h3>
            <p className="text-[13px] md:text-left">
              At Global Crop Sales, we partner closely with Nutaria, a trusted
              food processor renowned for its industry-leading standards and
              commitment to excellence.
              <br />
              <br />
              Nutaria holds essential food safety certifications, including ISO
              22000 and FSSC 22000, ensuring the highest levels of compliance
              with international food safety regulations. Nutarias
              state-of-the-art processing facilities are equipped with the
              latest technology, enabling precise and efficient handling of
              crops such as nuts, beans, and other produce. Their rigorous
              quality control processes are designed to maintain the integrity,
              safety, and freshness of every product, from farm to export.
              <br />
              <br />
              Together, our partnership guarantees that the crops we export
              globally meet the stringent quality and safety standards expected
              by our customers, ensuring trust and reliability at every step of
              the supply chain.
            </p>
          </div>
          <div className=" absolute top-[24px] right-8 md:right-12 md:top-[-80px] h-[300px] md:bg-white   rounded-[10px] overflow-hidden">
            <div className="relative flex justify-center items-center md:w-[233px] md:h-[250px]">
              <Image
                src="/Nutaria.svg"
                alt="William Kumwenda"
                width={96}
                height={68}
                className="z-20 "
              />
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 md:pb-0 pb-[120px] md:my-[120px] mb-[60px] md:flex-row md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <div className="rounded-[10px] bg-gcs_lightgreen md:h-[452px] h-full md:pb-[0px]   md:flex flex-row ">
          <div className="md:w-1/2 p-8 flex justify-center  py-8 md:items-start flex-col">
            <div>
              <Ticket className="w-[24px] mb-2 h-[24px]" />
            </div>

            <h3 className="text-[24px] pb-4  md:text-left tracking-[-2px] font-medium">
              Events: Gulfood Tradeshow
            </h3>
            <p className="text-[13px] md:text-left">
              Gulfood is one of the world’s most influential food and beverage
              trade shows, held annually in Dubai. It brings together over 5,000
              exhibitors from more than 200 countries, offering an unparalleled
              platform for businesses to showcase their products and form
              lasting global partnerships.
              <br />
            </p>
            <div className="">
              <div className="flex justify-center  py-2 md:items-start flex-col">
                <h3 className="text-[13px] pb-4   tracking-[-1px] font-medium">
                  Other Events you can find us at
                </h3>
              </div>
              <div className=" h-[100px] w-full flex gap-8 relative">
                <div className=" relative h-full">
                  <Image
                    src="/GTR.svg"
                    width={100}
                    height={100}
                    alt={""}
                    sizes="100vw"
                  />
                </div>

                <div className=" h-full relative">
                  <Image
                    src="/CIIME.svg"
                    width={315}
                    height={100}
                    alt={""}
                    sizes="100vw"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 h-[452px] aspect-w-16 aspect-h-[452px]">
            <iframe
              className="md:rounded-r-[10px] rounded-b-[10px] md:rounded-bl-none"
              src="https://www.youtube.com/embed/dxYnk2fibeY?si=94W1LR6iaGXhLNAn"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
