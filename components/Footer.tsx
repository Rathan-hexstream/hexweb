import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo3 from "../public/assets/bigHeaderLogo.png";
import { ArrowLongUpIcon } from "@heroicons/react/24/outline";

const services = [
  { name: "Data management", href: "/capabilities/data-management" },
  {
    name: "Cloud/Hybrid",
    href: "/capabilities/cloud-hybrid",
  },
  { name: "Data Warehouse", href: "/capabilities/data-warehouse" },
  { name: "Disaster Recovery", href: "/capabilities/disaster-recovery" },
  { name: "High Availability", href: "/capabilities/high-availability" },
  {
    name: "Advisory",
    href: "/capabilities/advisory",
  },
];
// .sort((a, b) => a.name.localeCompare(b.name));

const accelerators = [
  {
    name: "Outage Management Analytics",
    href: "/capabilities/outage-management-analytics",
  },
  {
    name: "Asset Management Analytics",
    href: "/capabilities/asset-management-analytics",
  },
  {
    name: "Preventative Asset Maintenance",
    href: "/capabilities/preventative-asset-maintenance",
  },
  {
    name: "Field Services Analytics",
    href: "/capabilities/field-services-analytics",
  },
].sort((a, b) => a.name.localeCompare(b.name));

const technologies = [
  {
    name: "Oracle Utility Analytics (OUA)",
    href: "/capabilities/technologies",
  },
];

const navigation = [
  { name: "Success Stories", href: "/success-stories" },
  { name: "Tech Corner", href: "/tech-corner" },
  { name: "Blogs", href: "/blogs" },
  { name: "Whitepapers", href: "/whitepapers" },
  { name: "UAUG", href: "/uaug" },
  { name: "About Us", href: "/about" },
  { name: "Careers", href: "/careers" },
  { name: "Contact Us", href: "https://info.hexstream.com/contact" },
];

const socials = [
  {
    name: "Twitter",
    href: "https://twitter.com/HEXstreamHQ",
    icon: (props: any) => (
      <svg
        fill="#071757"
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 448 512"
        {...props}
      >
        <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z" />
      </svg>
    ),
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/company/advanced-analytics-llc/",
    icon: (props: any) => (
      <svg
        fill="#071757"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        {...props}
      >
        <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
      </svg>
    ),
  },
];

const Footer = () => {
  const toTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-prime w-full text-primary ">
      <div className="grid md:grid-cols-4 grid-cols-1 gap-8 place-items-center pt-8 pb-4 relative container px-8 lg:px-32 mx-auto">
        <div className="self-start ">
          <Link href={"/"}>
            <div className="pt-6 md:pt-0  flex justify-center items-center md:justify-start md:items-start">
              <Image
                priority
                alt=""
                className="hover:scale-95 transition-all duration-200"
                height={140}
                width={140}
                src={logo3}
              />
            </div>
          </Link>
          <div className="py-8 flex flex-wrap gap-2 justify-center items-center md:justify-start md:items-center">
            {socials.map((soc) => (
              <Link
                key={soc.name}
                target="_blank"
                rel="noopener noreferrer"
                href={soc.href}
              >
                <soc.icon className="h-6 w-6 hover:fill-secondary duration-200 transition-colors" />
              </Link>
            ))}
          </div>
          <div className="flex gap-2 justify-start items-start  w-fit mx-auto">
            <div className="pt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16.879"
                height="16.879"
                viewBox="0 0 16.879 16.879"
              >
                <path
                  id="Icon_awesome-location-arrow"
                  data-name="Icon awesome-location-arrow"
                  d="M14.654.116.948,6.442A1.6,1.6,0,0,0,1.58,9.5h5.8v5.8a1.6,1.6,0,0,0,3.058.633L16.763,2.225A1.645,1.645,0,0,0,14.654.116Z"
                  transform="translate(0 0)"
                  fill="#071757"
                />
              </svg>
            </div>
            <div className="text-center md:text-left">
              <Link
                href={`https://maps.app.goo.gl/QchjhcLp6qoQ9o9YA`}
                target="_blank"
                className="hover:text-secondary transition-all duration-300"
              >
                HQ: 311 S Wacker Drive, Suite 6550 Chicago, IL 60606
              </Link>
            </div>
          </div>
          <div className="mt-4 flex gap-2 justify-center items-center md:justify-start md:items-start">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
                fill="#071757"
                className="h-5 w-5"
              >
                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
              </svg>
            </div>
            <div className="">
              <Link
                href="mailto:info@hexstream.com"
                className="hover:text-secondary transition-all duration-300"
              >
                info@hexstream.com
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center md:text-left p-5 md:p-0 w-[100%] self-start">
          <ul>
            <li className="py-1.5 font-bold text-xl text-primary">
              Our Services
            </li>
            {services.map((serv) => (
              <li key={serv.name} className="py-2">
                <Link className="hover:text-secondary" href={serv.href}>
                  {serv.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center md:text-left p-5 md:p-0 w-[100%] self-start">
          <ul>
            <li className="py-1.5 font-bold text-xl text-primary ">
              Accelerators
            </li>
            {accelerators.map((acc) => (
              <li key={acc.name} className="py-2">
                <Link className="hover:text-secondary" href={acc.href}>
                  {acc.name}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="pt-2">
            <li className="py-1.5 font-bold text-xl text-primary ">
              Technologies
            </li>
            {technologies.map((tech) => (
              <li key={tech.name} className="py-2">
                <Link className="hover:text-secondary" href={tech.href}>
                  {tech.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-center md:text-left p-5 md:p-0 w-[100%] self-start ">
          <ul>
            <li className="py-2 font-bold text-xl text-primary ">
              Quick Links
            </li>
            {/* <li className="py-2 ">
              <Link className="hover:text-secondary" href={"/"}>
                Home
              </Link>
            </li> */}
            {navigation.map((navItem) => (
              <Link key={navItem.name} href={navItem.href}>
                <li className={`py-1.5 hover:text-secondary`}>
                  {navItem.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>

      <div className="h-[1.5px] bg-primary w-11/12 mx-auto mb-5" />
      <div className="pb-5 bg-bgBlack relative max-w-7xl mx-auto">
        <h2 className="text-center lg:text-left px-14">
          &#169; {new Date().getFullYear()} HEXstream Inc. All Rights Reserved.
        </h2>
      </div>
    </div>
  );
};

export default Footer;
