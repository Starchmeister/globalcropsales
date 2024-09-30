import { useState } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";

export function NavMenu() {
  const [open, setOpen] = useState(false);

  const handleCloseMenu = () => setOpen(false);

  return (
    <div>
      <Menu
        className="text-gcs_green w-8 h-8 cursor-pointer relative"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="absolute z-50 bg-gcs_lightgreen text-gcs_green left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl">
          <Link href="/" onClick={handleCloseMenu}>
            Home
          </Link>
          <Link href="/about-us" onClick={handleCloseMenu}>
            About Us
          </Link>
          <div className="flex flex-col items-center justify-center gap-8 text-xl">
            <p className="text-black">Products</p>
            <Link href="/products/peanuts" onClick={handleCloseMenu}>
              Peanuts
            </Link>
            <Link href="/products/macadamia-nuts" onClick={handleCloseMenu}>
              Macadamia Nuts
            </Link>
            <Link href="/products/beans" onClick={handleCloseMenu}>
              Beans
            </Link>
          </div>
          <Link href="/food-safety" onClick={handleCloseMenu}>
            Food Safety
          </Link>
          <Link href="/community-impact" onClick={handleCloseMenu}>
            Community Impact
          </Link>
          <Link href="/contact-us" onClick={handleCloseMenu}>
            Contact Us
          </Link>
        </div>
      )}
    </div>
  );
}
