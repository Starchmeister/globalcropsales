"use client";
import Image from "next/image";
import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { NavMenu } from "../nav-menu";
import { Button } from "../button";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Peanuts",
    href: "/products/peanuts",
    description:
      "Our global business truly covers the full spectrum of peanut's potential. So no matter what variety, origin, or product type you’re after, we can deliver it.",
  },
  {
    title: "Macadamia Nuts",
    href: "/products/macadamia-nuts",
    description:
      "Our global business truly covers the full spectrum of peanut's potential. So no matter what variety, origin, or product type you’re after, we can deliver it.",
  },
  {
    title: "Beans",
    href: "/products/beans",
    description:
      "Our global business truly covers the full spectrum of peanut's potential. So no matter what variety, origin, or product type you’re after, we can deliver it.",
  },
];

export function Navbar() {
  return (
    <nav className="bg-white h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 md:fixed md:top-0 md:left-0 md:right-0 z-50">
      {/* Mobile */}
      <div className="h-full flex items-center justify-between md:hidden">
        <Link className="text-black text-2xl font-medium " href="/">
          <div className="w-full">
            <Image
              className="mb-2"
              width={62}
              src="/Logo.svg"
              height={52}
              alt="logo"
            />
          </div>
        </Link>
        <NavMenu />
      </div>
      {/* Not Mobile */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        <div className="w-full flex gap-12  items-center justify-center">
          <div className="w-full">
            <div>
              <Image
                className="mb-2"
                width={82}
                src="/Logo.svg"
                height={52}
                alt="logo"
              />
            </div>
          </div>
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <Link
                className="inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm text-black font-medium transition-colors hover:bg-gcs_lightgreen hover:text-black focus:bg-neutral-100 focus:text-neutral-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-neutral-100/50 data-[state=open]:bg-neutral-100/50 dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 dark:focus:bg-neutral-800 dark:focus:text-neutral-50 dark:data-[active]:bg-neutral-800/50 dark:data-[state=open]:bg-neutral-800/50"
                href="/"
              >
                Home
              </Link>
              <Link
                className="inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm text-black font-medium transition-colors hover:bg-gcs_lightgreen hover:text-black focus:bg-neutral-100 focus:text-neutral-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-neutral-100/50 data-[state=open]:bg-neutral-100/50 dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 dark:focus:bg-neutral-800 dark:focus:text-neutral-50 dark:data-[active]:bg-neutral-800/50 dark:data-[state=open]:bg-neutral-800/50"
                href="/about-us"
              >
                About Us
              </Link>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/food-safety" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Food Safety
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/community-impact" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Community Impact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <Button size="sm">
                <Link href="/contact-us">Contact Us</Link>
              </Button>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </nav>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gcs_lightgreen hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
