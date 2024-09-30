"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gcs_lightgreen relative ">
      <div className="p-8 w-full text-black md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <div className="flex gap-8 w-full md:flex-row flex-col pb-8">
          {/*Top*/}
          <div className="md:w-1/2 w-full flex flex-col gap-4">
            <Image
              src="/Logo.svg"
              className="pb-4"
              width={82}
              height={52}
              alt={""}
            />
            <p className="text-[13px] pb-4">
              Global Crop Sales, your trusted supplier of premium nuts and
              beans, serves an international market across 15 countries. In
              partnership with Nutaria for food processing, we are equipped to
              meet your diverse needs with quality and efficiency.
            </p>
            <div className="h-[40px] flex gap-3 items-center">
              <Image
                src="/FSSC.svg"
                className="pb-4"
                width={139}
                height={36}
                alt={""}
              />
              <Image
                src="/Halaal.svg"
                className="pb-4"
                width={36}
                height={24}
                alt={""}
              />
              <Image
                src="/KCSA.svg"
                className="pb-4"
                width={36}
                height={24}
                alt={""}
              />
            </div>
          </div>
          <div className="md:w-1/2 w-full flex gap-8">
            <div className="w-1/2">
              <h3 className="text-[24px] pb-4  md:text-left tracking-[-2px] font-medium">
                Explore
              </h3>
              <div className="flex flex-col text-[13px] gap-2">
                <Link href="/">Home</Link>
                <Link href="/about-us">About Us</Link>
                <p>Products</p>
                <Link href="/">Food Safety</Link>
                <Link href="/">Community Impact</Link>
                <Link href="/">Contact Us</Link>
              </div>
            </div>
            <div className="w-1/2">
              <h3 className="text-[24px] pb-4 md:text-left tracking-[-2px] font-medium">
                Contact
              </h3>
              <div className="flex flex-col gap-2">
                <p className="flex gap-2 items-center text-[13px]">
                  <Phone className="w-[16px]" /> +27670629977
                </p>
                <p className="flex gap-2 items-center text-[13px]">
                  <span>
                    <Mail className="w-[16px]" />
                  </span>
                  info@globalcropsales.com
                </p>
                <div className="flex gap-2">
                  <div>
                    <MapPin className="w-[16px]" />
                  </div>

                  <div>
                    <p className="text-[13px]">
                      <span className="font-medium">Office:</span> 25 Fredman
                      Drive Sandton, 2196, Johannesburg
                    </p>
                    <br />
                    <p className="text-[13px]">
                      <span className="font-medium">Warehouse:</span> Flora Town
                      Building 52 Forssman Close Barbeque Downs, Kyalami Estate,
                      Johannesburg, 1684
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-11 w-full bottom-0 bg-gcs_green flex justify-center items-center md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <p className="text-white text-[13px] font-semibold">
          © Copyright Global Crop Sales, All Rights Reserved 2024.
        </p>
      </div>
    </footer>
  );
}
