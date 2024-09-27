import { Handshake, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Food Safety | Quality Assurance",
};

export default function FoodSafetyPage() {
  return (
    <div className="mt-20 text-black w-full flex flex-col gap-32 md:gap-4 justify-center items-center ">
      <section className="flex flex-col justify-center items-center md:py-[200px] py-[120px]">
        <ShieldCheck className="w-[24px] mb-2 h-[24px]" />
        <h1 className="text-center sm:text-[96px] text-[52px] mb-4 font-semibold tracking-[-6px] leading-[52px] sm:leading-[91px] ">
          <span className="text-gcs_green">Food</span>
          <br />
          Safety
        </h1>
        <p className="text-[13px] text-center">
          Our global business truly covers the full spectrum of peanuts’
          <br />
          potential. So no matter what variety, origin, or product type you’re
          <br />
          after, we can deliver it.
        </p>
      </section>
      <section className="px-4 mt-[-120px] md:pt-[-120px] w-full relative md:flex-row md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex justify-center items-center">
        <div className="w-full  h-[400px] relative">
          <Image
            src="/Soybean.svg"
            alt="Soybeans"
            layout="fill"
            objectFit="cover"
            className="rounded-[10px]"
            sizes="100vw"
          />
        </div>
      </section>
      <section className="px-4 md:mt-[50px]  mt-[-200px] py-[100px] w-full relative md:flex-row md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex justify-center items-center">
        <div className="rounded-[10px] z-20 bg-gcs_lightgreen relative  w-full md:flex flex-row ">
          <div className=" p-8 flex z-20 bg-gcs_lightgreen  justify-center py-8 md:items-start flex-col rounded-[10px]">
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
          <div className=" absolute top-[24px] right-8 md:right-12 md:top-[-80px] h-[300px] md:bg-gcs_lightgreen rounded-[10px] overflow-hidden">
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
    </div>
  );
}
