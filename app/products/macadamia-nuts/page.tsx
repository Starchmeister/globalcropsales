import { Nut, Store } from "lucide-react";
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
  title: "Macadamia Nuts | Explore our Range of Macadamia Nuts",
};

const products = [
  {
    imageSrc: "/Style0.svg",
    imageAlt: "Macadamia Style 0",
    productTitle: "Style 0 ",
    productDescription:
      "Sized bigger than 20mm, Min 95% Wholes. Perfect for gourmet snacking. ",
    productOrigin: "South Africa, Malawi and Kenya.",
    productType: "kernel",
  },
  {
    imageSrc: "/Style1L.svg",
    imageAlt: "Macadamia Style 1L",
    productTitle: "Style 1L",
    productDescription:
      "Sized 17mm - 20mm, Min 95% Wholes. Perfect for gourmet snacking.",
    productOrigin: "South Africa, Malawi and Kenya.",
    productType: "kernel",
  },
  {
    imageSrc: "/Style1S.svg",
    imageAlt: "Macadamia Style 1S",
    productTitle: "Style 1S ",
    productDescription:
      "Sized 14mm - 17mm, Min 95% Wholes. Perfect for gourmet snacking.",
    productOrigin: "South Africa, Malawi and Kenya.",
    productType: "kernel",
  },
  {
    imageSrc: "/Style2.svg",
    imageAlt: "Macadamia Style 2",
    productTitle: "Style 2 ",
    productDescription:
      "Sized bigger than 13mm, Min 50% Wholes. Perfect for gourmet snacking.",
    productOrigin: "South Africa, Malawi and Kenya.",
    productType: "kernel",
  },
  {
    imageSrc: "/Style4L.svg",
    imageAlt: "Macadamia Style 4L",
    productTitle: "Style 4L ",
    productDescription:
      "Sized 14mm - 17mm, Min 80% Halves. Ideal for bakery items, confectionery and fine foods.",
    productOrigin: "South Africa, Malawi and Kenya.",
    productType: "kernel",
  },
  {
    imageSrc: "/Style4S.svg",
    imageAlt: "Macadamia Style 4S",
    productTitle: "Style 4S ",
    productDescription:
      "Sized 10mm - 14mm, Min 50% Halves. Great for bakery items and garnishes.",
    productOrigin: "South Africa, Malawi and Kenya.",
    productType: "kernel",
  },
  {
    imageSrc: "/NutInShell20.svg",
    imageAlt: "Nut in Shell / 20mm - 22mm",
    productTitle: "Nut in Shell / 20mm - 22mm",
    productDescription: "Packaged in polypropylene bags.",
    productOrigin: "South Africa, Malawi and Kenya",
    productType: "in-shells",
  },
  {
    imageSrc: "/NutInShell22.svg",
    imageAlt: "Nut in Shell / 22mm - 25mm",
    productTitle: "Nut in Shell / 22mm - 25mm",
    productDescription: "Packaged in polypropylene bags.",
    productOrigin: "South Africa, Malawi and Kenya",
    productType: "in-shells",
  },
  {
    imageSrc: "/NutInShell25.svg",
    imageAlt: "Nut in Shell / 25mm",
    productTitle: "Nut in Shell / +25mm",
    productDescription: "Packaged in polypropylene bags.",
    productOrigin: "South Africa, Malawi and Kenya",
    productType: "in-shells",
  },
  {
    imageSrc: "/CoilPressedOil.svg",
    imageAlt: "Coil Pressed Oil",
    productTitle: "Coil Pressed Oil",
    productDescription:
      "Cold-pressed macadamia oil offers a pure, rich flavor and exceptional health benefits, ideal for gourmet cooking and premium cosmetic formulations.",
    productOrigin: "South Africa",
    productType: "oil",
  },
];

export default function MacadamiaNuts() {
  return (
    <div className="mt-20 text-black w-full flex flex-col gap-32 md:gap-4 justify-center items-center ">
      <section className="md:my-[120px]  p-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <div className="rounded-[10px] md:flex gap-8 flex-row w-full items-center">
          <div className="md:w-1/2  flex justify-center py-8 md:items-start flex-col">
            <Nut className="w-[24px] mb-8 h-[24px]" />
            <h1 className="text-left text-gcs_green sm:text-[96px] text-[52px] mb-4 font-semibold tracking-[-6px] leading-[52px] sm:leading-[91px]">
              Macadamia <br />
              <span className="text-black">Nuts</span>
            </h1>
            <p className="text-[13px] md:text-left leading-relaxed">
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
          <div className="md:w-1/2 w-full  h-[500px] relative">
            <Image
              src="/macadamiacover.svg"
              alt="Bulk Variety of Peanuts"
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
          Our Range of Macadamia Nuts
        </h3>
        <Tabs defaultValue="kernel" className="w-full">
          <TabsList>
            <TabsTrigger value="kernel">Kernel</TabsTrigger>
            <TabsTrigger value="in-shells">In-shells</TabsTrigger>
            <TabsTrigger value="oil">Oil</TabsTrigger>
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
          <TabsContent value="oil">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {products
                .filter((product) => product.productType === "oil")
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
