import MetricItem from "@/components/ui/metric-item";
import { HeartHandshake } from "lucide-react";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community Impact",
};

const communityMetrics = [
  {
    title: "Fair Wages",
    metric: "15%",
    description: "above market",
    type: "community",
  },
  {
    title: "Farmers Supported",
    metric: "200",
    description: "",
    type: "community",
  },
  {
    title: "Increase in Farmer Income",
    metric: "25%",
    description: "",
    type: "community",
  },
  {
    title: "Full-Time Jobs Created",
    metric: "50",
    description: "",
    type: "community",
  },
  {
    title: "Seasonal Jobs Created",
    metric: "200",
    description: "",
    type: "community",
  },
  {
    title: "Sustainable Farming Practices",
    metric: "300",
    description: "",
    type: "community",
  },
  {
    title: "Rural Development",
    metric: "70%",
    description: "of Farmers able send children to school",
    type: "sustainability",
  },
  {
    title: "Gender Inclusion Farmers",
    metric: "40%",
    description: "Female Farmers",
    type: "sustainability",
  },
  {
    title: "Post-Harvest Loss Reduction",
    metric: "50%",
    description: "",
    type: "sustainability",
  },
  {
    title: "Enviromental Impact",
    metric: "30%",
    description: "Reduction in the use of chemicals",
    type: "sustainability",
  },
  {
    title: "Gender Inclusion Workers",
    metric: "60%",
    description: "Female Workers",
    type: "sustainability",
  },
];

export default function CommunityImpactPage() {
  return (
    <div className="mt-20 text-black w-full flex flex-col gap-32 md:gap-4 justify-center items-center ">
      <section className="flex flex-col justify-center items-center md:py-[200px] py-[120px]">
        <HeartHandshake className="w-[24px] mb-2 h-[24px]" />
        <h1 className="text-center sm:text-[96px] text-[52px] mb-4 font-semibold tracking-[-6px] leading-[52px] sm:leading-[91px] ">
          <span className="text-gcs_green">Community</span>
          <br />
          Impact
        </h1>
        <p className="text-[13px] text-center">
          Our global business truly covers the full spectrum of peanuts’
          <br />
          potential. So no matter what variety, origin, or product type you’re
          <br />
          after, we can deliver it.
        </p>
      </section>
      <section className="px-4 md:pb-0 pb-[120px] md:my-[60px] mb-[60px] w-full md:flex-row md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h3 className="text-[32px] text-center w-full pb-4 tracking-[-2px] font-medium">
          Community Impact Metrics
        </h3>
        <div className="rounded-[10px] bg-gcs_lightgreen w-full h-[452px] mb-[120px] md:mb-[0px]  md:pb-[0px]  md:flex flex-row ">
          <div className="md:w-1/2 p-8 flex justify-center  py-8 md:items-start flex-col">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full ">
              {communityMetrics
                .filter(
                  (communityMetric) => communityMetric.type === "community"
                )
                .map((communityMetric, index) => (
                  <MetricItem key={index} {...communityMetric} />
                ))}
            </div>
          </div>
          <div className="md:w-1/2 h-full relative">
            <Image
              src="/VisitMalawi.svg"
              fill
              alt={""}
              sizes="100vw"
              className="flex object-cover md:rounded-r-[10px] md:rounded-bl-none rounded-b-[10px]"
            />
          </div>
        </div>
      </section>
      <section className="px-4 md:pb-0 my-[40px] md:my-[180px] mb-[120px] w-full h-full md:flex-row md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h3 className="text-[32px] text-center pb-4 tracking-[-2px] font-medium">
          Social and Progressive Metrics
        </h3>
        <div className="rounded-[10px] bg-gcs_lightgreen w-full h-full  md:mb-[0px]  md:pb-[0px]  md:flex flex-row ">
          <div className="md:w-1/2 md:h-[452px] h-[320px] relative">
            <Image
              src="/community.svg"
              fill
              alt={""}
              sizes="100vw"
              className="flex object-cover md:rounded-l-[10px] md:rounded-r-none rounded-t-[10px]"
            />
          </div>
          <div className="md:w-1/2 p-8 flex justify-center h-[452px]  md:items-start flex-col">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 w-full">
              {communityMetrics
                .filter(
                  (communityMetric) => communityMetric.type === "sustainability"
                )
                .map((communityMetric, index) => (
                  <MetricItem key={index} {...communityMetric} />
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
