import { Contact } from "lucide-react";
import { ContactUsForm } from "@/components/ui/contact-us-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Global Crop Sales | Contact Us",
};

export default function ContactUsPage() {
  return (
    <div className="mt-20 text-black w-full flex flex-col  gap-12 md:gap-0 justify-center items-center">
      <section className="flex justify-center w-full flex-col  md:flex-row gap-8 items-center md:py-[40px] py-[10px] md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <div className="flex flex-col justify-center  items-center px-8">
          <Contact className="w-[24px] mb-2 h-[24px]" />
          <h1 className="text-center sm:text-[96px] text-[52px] mb-4 font-semibold tracking-[-4px] leading-[52px] sm:leading-[91px] ">
            <span className="text-gcs_green">Get In Touch</span>
            <br />
            With Us
          </h1>
          <p className="text-[13px] text-center">
            If you have any queries, please do not hesitate to contact us. We
            aim to reply within 48 hours.
            <br />
            Please note that our Customer Service opening times are 9am-5pm,
            Monday to Friday.
          </p>
        </div>
      </section>
      <section className="px-4 md:pb-[80px]  md:my-[20px] mb-[160px]  md:flex-row md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <div className="rounded-[10px] bg-gcs_lightgreen  md:pb-[0px]  md:flex flex-row ">
          <div className=" flex justify-center  md:items-start flex-col">
            <ContactUsForm />
          </div>
        </div>
      </section>
    </div>
  );
}
