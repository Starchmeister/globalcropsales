import Link from "next/link";
import { Button } from "./button";
import Image from "next/image";
import { MoveRight } from "lucide-react";

interface ImageCardWrapper {
  backgroundImageUrl: string;
  backgroundImageAlt: string;
  buttonHref: string;
  cardText: string;
}

export function ImageCard({
  backgroundImageUrl,
  backgroundImageAlt,
  buttonHref,
  cardText,
}: ImageCardWrapper) {
  return (
    <div className="w-full">
      <Link href={buttonHref} className="flex w-full  ">
        <div className="relative w-full h-[400px]">
          <Image
            src={backgroundImageUrl}
            alt={backgroundImageAlt}
            className="rounded-[10px] absolute object-cover hover:opacity-90"
            sizes="33vw"
            fill
          />
          <p className="text-white absolute  left-3 bottom-3 z-20 text-[24px] tracking-[-2px] font-medium">
            {cardText}
          </p>
        </div>
      </Link>

      <Button className="mt-2" size="sm">
        <Link
          className="flex gap-2 items-center transition ease-in-out delay-250 hover:gap-4 duration-300"
          href={buttonHref}
        >
          Explore <MoveRight />
        </Link>
      </Button>
    </div>
  );
}
