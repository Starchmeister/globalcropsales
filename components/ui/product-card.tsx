import Image from "next/image";

interface CardProps {
  imageSrc: string;
  productTitle: string;
  productDescription: string;
  productOrigin: string;
  productType: string;
  imageAlt: string;
}
export function ProductCard({
  imageSrc,
  imageAlt,
  productTitle,
  productDescription,
  productOrigin,
  productType,
}: CardProps) {
  return (
    <div className=" bg-white  rounded-b-[10px] overflow-hidden">
      <div className="relative w-full h-[250px]">
        <Image src={imageSrc} alt={imageAlt} layout="fill" />
      </div>
      <div className="bg-gcs_lightgreen h-full flex flex-col p-2 py-4">
        <h3 className="text-[16px] mb-2  md:text-left tracking-[-1px] font-medium">
          {productTitle} <span className="hidden">{productType}</span>{" "}
        </h3>
        <p className="text-gcs_green  text-[13px]">
          <span className="text-[13px] font-semibold">Origin: </span>
          {productOrigin}
        </p>
        <p className="text-gcs_green  text-[13px]">
          <span className="text-[13px] font-semibold"></span>
          {productDescription}
        </p>
      </div>
    </div>
  );
}
