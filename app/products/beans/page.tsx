import { Bean, Store } from "lucide-react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductCard } from "@/components/ui/product-card";
import { Metadata } from "next";

export const metadata: Metadata = {
  keywords: [
    "bulk peanuts",
    "wholesale macadamia nuts",
    "bulk beans",
    "industrial nut supply",
    "commercial bean distributor",
    "large-scale peanut orders",
    "macadamia nuts wholesale",
    "bulk legume supplier",
    "peanut wholesaler",
    "commercial nut importer",
    "bulk dried beans",
    "wholesale raw nuts",
    "large quantity bean orders",
    "bulk food service nuts",
    "wholesale peanut supplier",
    "industrial bean processor",
    "bulk nut export",
    "commercial grade peanuts",
    "wholesale bean varieties",
    "bulk macadamia procurement",
    "large-volume nut orders",
    "wholesale legume distributor",
    "bulk peanut processing",
    "commercial bean buyer",
    "wholesale nut trader",
    "bulk bean importer",
    "large-scale nut distribution",
    "industrial peanut supply chain",
    "wholesale macadamia sourcing",
    "bulk bean wholesaler",
  ],
  title: "Beans | Explore our Range of Beans",
};

const products = [
  {
    imageSrc: "/Soybeandry.svg",
    imageAlt: "Soybeans (Non GMO)",
    productTitle: "Soybeans (Non GMO)",
    productDescription:
      "Used in producing soy milk, soy oil, and soy protein products.",
    productOrigin: "Malawi, Zambia and Tanzania.",
    productType: "dry",
  },
  {
    imageSrc: "/Soybeandry.svg",
    imageAlt: "Soybeans (GMO)",
    productTitle: "Soybeans (GMO)",
    productDescription:
      "Used in producing soy milk, soy oil, and soy protein products.",
    productOrigin: "Malawi, Zambia and Tanzania.",
    productType: "dry",
  },
  {
    imageSrc: "/RedSpeckledBeans.svg",
    imageAlt: "Red Speckled Beans",
    productTitle: "Red Speckled Beans",
    productDescription:
      "Used for canning, dry packaged goods and meal preparation.",
    productOrigin: "Malawi and Tanzania.",
    productType: "dry",
  },
  {
    imageSrc: "/SugarBeans.svg",
    imageAlt: "Sugar Beans",
    productTitle: "Red Speckled Beans",
    productDescription:
      "Ideal for stews, soups, and salads. They have high yield and robust disease resistance.",
    productOrigin: "Malawi, South Africa and Tanzania.",
    productType: "dry",
  },
  {
    imageSrc: "/SmallWhiteBeans.svg",
    imageAlt: "Small White Beans",
    productTitle: "Small White Beans",
    productDescription:
      "Often used for making baked beans and soups, ideal for canning.",
    productOrigin: "Malawi, South Africa and Tanzania.",
    productType: "dry",
  },
  {
    imageSrc: "/RedKidneyBeans.svg",
    imageAlt: "Red Kidney Beans",
    productTitle: "Red Kidney Beans",
    productDescription:
      "Used in chili and curry dishes, essential for restaurants and ready-meal producers.",
    productOrigin: "Malawi, South Africa and Tanzania.",
    productType: "dry",
  },
  {
    imageSrc: "/WhiteBeans.svg",
    imageAlt: "White Beans",
    productTitle: "White Beans",
    productDescription:
      "Large kernels and high quality, commonly used in snack food and confectionery.",
    productOrigin: "South Africa.",
    productType: "dry",
  },
  {
    imageSrc: "/JungoBeans.svg",
    imageAlt: "Jungo Beans",
    productTitle: "Jungo Beans",
    productDescription:
      "Used in traditional African dishes and for making nutrient-rich flour.",
    productOrigin: "South Africa.",
    productType: "dry",
  },
];

export default function BeansPage() {
  return (
    <div className="mt-20 text-black w-full flex flex-col gap-32 md:gap-4 justify-center items-center ">
      <section className="md:my-[120px]  p-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <div className="rounded-[10px] md:flex gap-8 flex-row w-full items-center">
          <div className="md:w-1/2  flex justify-center py-8 md:items-start flex-col">
            <Bean className="w-[24px] mb-8 h-[24px]" />
            <h1 className="text-left text-gcs_green sm:text-[96px] text-[52px] mb-4 font-semibold tracking-[-6px] leading-[52px] sm:leading-[91px]">
              Beans <br />
            </h1>
            <p className="text-[13px] md:text-left leading-relaxed">
              Global Crop Sales specializes in delivering high-quality bulk
              beans, including Red Speckled, Sugar Beans, Red Kidney Beans, and
              Non-GMO Soybeans, ideal for food manufacturers, ready-meal
              producers, canning companies, and distributors. Our beans are
              sourced to meet the needs of the culinary, food production, and
              animal feed industries, ensuring exceptional consistency, yield,
              and quality. With a focus on reliability and sustainability, we
              support large-scale processors, wholesalers, and distributors in
              maintaining a steady supply chain, enabling them to meet both
              domestic and international demand with confidence
            </p>
          </div>
          <div className="md:w-1/2 w-full  h-[500px] relative">
            <Image
              src="/Soybean.svg"
              alt="Soybeans"
              layout="fill"
              objectFit="cover"
              className="rounded-[10px]"
              sizes="100vw"
            />
          </div>
        </div>
      </section>
      <section className="md:mb-[120px] w-full bg-gcs_lightgreen/20 p-4 py-32 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <Store className="w-full text-center" />
        <h3 className="text-[42px] text-center pb-24 tracking-[-2px]  font-medium">
          Explore our Range of Beans
        </h3>
        <Tabs defaultValue="dry" className="w-full">
          <TabsList>
            <TabsTrigger value="dry">Dry Beans</TabsTrigger>
          </TabsList>
          <TabsContent value="dry">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {products
                .filter((product) => product.productType === "dry")
                .map((product, index) => (
                  <ProductCard key={index} {...product} />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}
