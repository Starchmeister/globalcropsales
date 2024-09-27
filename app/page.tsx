import { Button } from "@/components/ui/button";
import { ImageCard } from "@/components/ui/card";
import { BookMarked, Earth, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mt-20 text-black w-full flex flex-col gap-32 md:gap-4 justify-center items-center ">
      <section className="flex flex-col justify-center items-center md:py-[200px] py-[120px]">
        <p className="sm:text-[24px] text-[13px] tracking-[-1px]  sm:tracking-[-2px] font-medium">
          Quality You Can Rely On
        </p>
        <h1 className="text-center sm:text-[96px] text-[52px] mb-4 font-semibold tracking-[-6px] leading-[52px] sm:leading-[91px] ">
          <span className="text-gcs_green">Trusted</span> Global <br /> Supplier
          of <span className="text-gcs_green">Premium</span> <br /> Nuts & Beans
        </h1>
        <Button>Request a Quote</Button>
      </section>
      <section className="flex gap-4  mt-[-120px] flex-col w-full justify-between px-4 md:flex-row md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <ImageCard
          backgroundImageUrl="/test.svg"
          buttonHref="/products/peanuts"
          cardText="Peanuts"
          backgroundImageAlt="Peanuts"
        ></ImageCard>
        <ImageCard
          backgroundImageUrl="/MacadamiaHands.svg"
          buttonHref="/products/macadamia-nuts"
          cardText="Macadamia Nuts"
          backgroundImageAlt="Macadamia Nuts"
        ></ImageCard>
        <ImageCard
          backgroundImageUrl="/Soybean.svg"
          buttonHref="/products/beans"
          cardText="Beans"
          backgroundImageAlt="Beans"
        ></ImageCard>
      </section>
      <section className="px-4 md:pb-0 pb-[120px] md:mt-[120px] mb-[142px] md:mb-0  md:flex-row md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <div className="rounded-[10px] bg-gcs_lightgreen h-[452px]  md:flex flex-row ">
          <div className="md:w-1/2 p-8 flex justify-center  py-8 md:items-start flex-col">
            <BookMarked className="w-[24px] mb-2 h-[24px]" />
            <h3 className="text-[24px] pb-4  md:text-left tracking-[-2px] font-medium">
              Our Story
            </h3>
            <p className="text-sm md:text-left">
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
            <div>
              <Button className="mt-2" size="sm">
                <Link
                  className="flex gap-2 items-center transition ease-in-out delay-250 hover:gap-4 duration-300"
                  href="/about-us"
                >
                  More About Us <MoveRight />
                </Link>
              </Button>
            </div>
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
      <section className="px-4 mt-[100px] py-[200px] w-full relative md:flex-row md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex justify-center items-center">
        <Image
          src="/Global.svg"
          alt="Global"
          className="absolute z-10 object-cover"
          sizes="100vw"
          fill
        />
        <div className="rounded-[10px] z-20 bg-white  w-full md:flex flex-row ">
          <div className=" p-8 flex z-20 bg-white  justify-center py-8 md:items-start flex-col rounded-[10px]">
            <Earth className="w-[24px] mb-2 h-[24px]" />
            <h3 className="text-[24px] pb-4 md:text-left tracking-[-2px] font-medium">
              Global Operations
            </h3>
            <p className="text-[13px] md:text-left">
              We proudly operate in 12 countries across Africa, driving
              innovation and operational excellence in:
              <br />
              <ul className="list-disc ml-4">
                <li>South Africa</li>
                <li>Mozambique</li>
                <li>Zimbabwe</li>
                <li>Malawi</li>
                <li>Zambia</li>
                <li>Tanzania</li>
                <li>Kenya</li>
                <li>Benin</li>
                <li>Senegal</li>
                <li>Egypt</li>
              </ul>
              <br />
            </p>
            <p className="text-[13px]">
              Beyond Africa, our global footprint extends to 4 key international
              markets:{" "}
            </p>

            <ul className="list-disc text-[13px] ml-4">
              <li>Netherlands</li>
              <li>Lithuania</li>
              <li>Vietnam</li>
              <li>China</li>
            </ul>
            <br />

            <p className="text-[13px]">
              With a presence in 16 countries worldwide, we are committed to
              delivering solutions that empower industries with actionable
              insights and digital transformation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
