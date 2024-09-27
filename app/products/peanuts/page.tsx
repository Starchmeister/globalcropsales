import { Nut } from "lucide-react";
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
  title: "Peanuts | Explore our Range of Peanuts",
};

const products = [
  {
    imageSrc: "/Chalimbana.svg",
    imageAlt: "Chalimbana Kernel",
    productTitle: "Chalimbana",
    productDescription:
      "Large Kernels and excellent flavour, used in confectionary and local markets.",
    productOrigin: "Malawi, Zambia and Mozambique.",
    productType: "kernel",
  },
  {
    imageSrc: "/RedSkins.svg",
    imageAlt: "Redskins (Valencia)",
    productTitle: "Redskins (Valencia)",
    productDescription:
      "High yields and drought tolerance, widely grown and exported",
    productOrigin: "Malawi and Zambia",
    productType: "kernel",
  },
  {
    imageSrc: "/HighOleic.svg",
    imageAlt: "High Oleic(HOPE)",
    productTitle: "High Oleic(HOPE)",
    productDescription:
      "High in monounsaturated fats making up to 75% to 80% of the total fat content",
    productOrigin: "Argentina",
    productType: "kernel",
  },
  {
    imageSrc: "/Fleur11.svg",
    imageAlt: "Fleur11(Spanish) Kernel",
    productTitle: "Fleur11 (Spanish)",
    productDescription: "High yields and resistance to common peanut diseases.",
    productOrigin: "Senegal.",
    productType: "kernel",
  },
  {
    imageSrc: "/SpanCross.svg",
    imageAlt: "SpanCross(Spanish) Kernel",
    productTitle: "SpanCross (Spanish)",
    productOrigin: "Senegal.",
    productDescription:
      "High oil content and suitability for oil extraction and confectionery production.",
    productType: "kernel",
  },
  {
    imageSrc: "/AshfordVirginia.svg",
    imageAlt: "Ashford (Virginia) Kernel",
    productTitle: "Ashford (Virginia)",
    productOrigin: "Sudan.",
    productDescription:
      "Large kernel size and very aflatoxin resistant due to dry weather conditions in Sudan.",
    productType: "kernel",
  },
  {
    imageSrc: "/IsmaliaVirginia.svg",
    imageAlt: "Ismailia 1 (Virginia) Kernel",
    productTitle: "Ismailia 1 (Virginia)",
    productOrigin: "Egypt.",
    productDescription:
      "Large kernels and high quality, commonly used in snack food and confectionery.",
    productType: "kernel",
  },
  {
    imageSrc: "/Sellie(Spanish).svg",
    imageAlt: "Sellie(Spanish) Kernel",
    productTitle: "Sellie (Spanish)",
    productOrigin: "South Africa.",
    productDescription:
      "High yield and good oil content, used for oil production and  roasting.",
    productType: "kernel",
  },
  {
    imageSrc: "/Natal(Spanish).svg",
    imageAlt: "Natal(Spanish) Kernel",
    productTitle: "Natal (Spanish)",
    productOrigin: "South Africa.",
    productDescription:
      "Small, round kernels and high oil content, making it ideal for oil extraction.",
    productType: "kernel",
  },
  {
    imageSrc: "/Giza6(Spanish).svg",
    imageAlt: "Giza6(Spanish) Kernel",
    productTitle: "Giza 6 (Spanish)",
    productOrigin: "Egypt.",
    productDescription:
      "High oil content and excellent oil quality due to high oleic acid levels.",
    productType: "kernel",
  },

  {
    imageSrc: "/DarkRoast.svg",
    imageAlt: "Dark Roast Roasted",
    productTitle: "Dark Roast",
    productDescription:
      "Sought by manufacturers of bold-flavored snacks and peanut sauces.",
    productOrigin: "Malawi and South Africa.",
    productType: "roasted",
  },
  {
    imageSrc: "/MediumRoast.svg",
    imageAlt: "Medium Roast Roasted",
    productTitle: "Medium Roast",
    productDescription:
      "Chosen for a balanced flavor, in both snacks and peanut butters.",
    productOrigin: "Malawi and South Africa.",
    productType: "roasted",
  },
  {
    imageSrc: "/LightRoast.svg",
    imageAlt: "Light Roast Roasted",
    productTitle: "Light Roast",
    productDescription:
      "Used in products where subtlety is needed without overwhelming other ingredients.",
    productOrigin: "Malawi and South Africa.",
    productType: "roasted",
  },
  {
    imageSrc: "/Unroasted.svg",
    imageAlt: "Unroasted",
    productTitle: "Unroasted",
    productDescription:
      "Selected for applications where full control over the flavor profile is necessary.",
    productOrigin: "Malawi and South Africa.",
    productType: "roasted",
  },

  {
    imageSrc: "/Chopped.svg",
    imageAlt: "Chopped Roasted",
    productTitle: "Chopped",
    productDescription:
      "Ideal for baking, salads, granola bars, and as crunchy coatings in various recipes.",
    productOrigin: "Malawi and South Africa.",
    productType: "roasted",
  },
  {
    imageSrc: "/Chalimbana.svg",
    imageAlt: "In-Shell Peanuts",
    productTitle: "Chalimbana (Virginia)",
    productDescription:
      "Roasted with skins, ideal for manufacturers and distributors who use roasted peanuts.",
    productOrigin: "Malawi, Zambia and Mozambique",
    productType: "roasted",
  },
  {
    imageSrc: "/Natal(Spanish).svg",
    imageAlt: "Natal (Spanish)",
    productTitle: "Natal (Spanish)",
    productDescription:
      "Roasted with skins, ideal for manufacturers and distributors who use roasted peanuts.",
    productOrigin: "South Africa.",
    productType: "roasted",
  },
  {
    imageSrc: "/Redskins.svg",
    imageAlt: "Redskins (Valenica)",
    productTitle: "Redskins (Valenica)",
    productDescription:
      "Roasted with skins, ideal for manufacturers and distributors who use roasted peanuts.",
    productOrigin: "Malawi and Zambia",
    productType: "roasted",
  },
  {
    imageSrc: "/Chalimbana(Shell).svg",
    imageAlt: "Chalimbana (Virginia) In-Shell",
    productTitle: "Chalimbana (Virginia)",
    productDescription:
      "Large kernels and excellent flavour, used in confectionery and local markets.",
    productOrigin: "Malawi, Mozambique and Zambia",
    productType: "in-shells",
  },
  {
    imageSrc: "/Redskin(Shell).svg",
    imageAlt: "Red Skins (Valencia) In-Shell Peanuts",
    productTitle: "Red Skins (Valencia)",
    productDescription:
      "High yields and drought tolerance, widely grown and exported.",
    productOrigin: "Malawi and Zambia",
    productType: "in-shells",
  },
  {
    imageSrc: "/Natal(Shell).svg",
    imageAlt: "Natal (Spanish)",
    productTitle: "Natal (Spanish)",
    productDescription:
      "Small, round kernels and high oil content, making it ideal for oil extraction.",
    productOrigin: "South Africa",
    productType: "in-shells",
  },
  {
    imageSrc: "/FarmerStock.svg",
    imageAlt: "Farmer Stock In-shell",
    productTitle: "Farmer Stock",
    productDescription: "Primarily used for further grading and processing.",
    productOrigin: "Malawi and South Africa",
    productType: "in-shells",
  },

  {
    imageSrc: "/Chalimbana(Blanched).svg",
    imageAlt: "Chalimbana (Virginia) blanched peanuts",
    productTitle: "Chalimbana (Virginia)",
    productDescription:
      "Large kernels and excellent flavour, used in confectionery and local markets.",
    productOrigin: "Malawi, Mozambique and Zambia.",
    productType: "blanched",
  },
  {
    imageSrc: "/Redskin(Blanched).svg",
    imageAlt: "Red Skins (Valencia) blanched peanuts",
    productTitle: "Red Skins (Valencia)",
    productDescription:
      "High yields and drought tolerance, widely grown and exported.",
    productOrigin: "Malawi and Zambia.",
    productType: "blanched",
  },
  {
    imageSrc: "/Natal(Blanched).svg",
    imageAlt: "Natal (Spanish) blanched peanuts ",
    productTitle: "Natal (Spanish)",
    productDescription:
      "Small, round kernels and high oil content, making it ideal for oil extraction.",
    productOrigin: "South Africa.",
    productType: "blanched",
  },
  {
    imageSrc: "/Splits.svg",
    imageAlt: "Splits Blanched",
    productTitle: "Splits Blanched",
    productDescription:
      "Ideal for confectioneries, and snack mixes, offering a smooth texture without skins.",
    productOrigin: "Malawi and South Africa.",
    productType: "blanched",
  },

  // Add more product objects as needed
];

export default function Peanuts() {
  return (
    <div className="mt-20 text-black w-full flex flex-col gap-32 md:gap-4 justify-center items-center ">
      <section className="md:my-[120px] p-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <div className="rounded-[10px] md:flex gap-8 flex-row w-full items-center">
          <div className="md:w-1/2 flex justify-center py-8 md:items-start flex-col">
            <Nut className="w-[24px] mb-8 h-[24px]" />
            <h1 className="text-left text-gcs_green sm:text-[96px] text-[52px] mb-4 font-semibold tracking-[-6px] leading-[52px] sm:leading-[91px]">
              Peanuts
            </h1>
            <p className="text-[13px] md:text-left">
              Global Crop Sales specializes in supplying high-quality peanut
              products, including peanut kernels, roasted peanuts, in-shell
              peanuts, and blanched peanuts, tailored for bulk buyers across
              various industries. Our peanuts cater to confectionery
              manufacturers, oil processors, snack food companies, culinary
              industries, nut butter producers, and animal feed suppliers. With
              a commitment to consistency, reliability, and premium quality, we
              support large-scale food processors, wholesalers, and distributors
              in meeting their production needs and enhancing their product
              offerings, ensuring a reliable supply for both domestic and
              international markets.
            </p>
          </div>
          <div className="md:w-1/2 w-full h-[500px] relative">
            <Image
              src="/PeanutsHero.svg"
              alt="Bulk Variety of Peanuts"
              layout="fill"
              objectFit="cover"
              className="rounded-[10px]"
              sizes="100vw"
            />
          </div>
        </div>
      </section>
      <section className="md:mb-[120px] w-full p-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h3 className="text-[32px] text-center pb-4 tracking-[-2px] font-medium">
          Our Range of Peanuts
        </h3>
        <Tabs defaultValue="kernel" className="w-full">
          <TabsList>
            <TabsTrigger value="kernel">Kernel</TabsTrigger>
            <TabsTrigger value="in-shells">In-shells</TabsTrigger>
            <TabsTrigger value="blanched">Blanched</TabsTrigger>
            <TabsTrigger value="roasted">Roasted</TabsTrigger>
          </TabsList>
          <TabsContent value="kernel">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {products
                .filter((product) => product.productType === "kernel")
                .map((product, index) => (
                  <ProductCard key={index} {...product} />
                ))}
            </div>
          </TabsContent>
          <TabsContent value="in-shells">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {products
                .filter((product) => product.productType === "in-shells")
                .map((product, index) => (
                  <ProductCard key={index} {...product} />
                ))}
            </div>
          </TabsContent>
          <TabsContent value="blanched">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {products
                .filter((product) => product.productType === "blanched")
                .map((product, index) => (
                  <ProductCard key={index} {...product} />
                ))}
            </div>
          </TabsContent>
          <TabsContent value="roasted">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {products
                .filter((product) => product.productType === "roasted")
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
