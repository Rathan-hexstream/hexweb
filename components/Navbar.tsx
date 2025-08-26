import { useState, useEffect } from "react";

import Image from "next/image";
import { useRouter } from "next/router";
import Router from "next/router";
import Link from "next/link";

import logo from "../public/assets/bigHeaderLogo.png";
import logo2 from "../public/assets/mbe_ori.png";
import Hamburger from "hamburger-react";
import NavItem from "./NavItem";
import Accordion from "./reusable/AccordionItem";

const insights = [
  { name: "UAUG", href: "#" },
  { name: "Success Stories", href: "#" },
  { name: "HEXStream Blog", href: "#" },
  { name: "Tech Corner", href: "/tech-corner" },
  { name: "White Papers / Special Reports / Collateral", href: "/whitepapers" },
];

const services = [
  {
    name: "Utility360",
    href: "/capabilities/utility360", // ✅ Proper link that will navigate
    hasSubmenu: true,                 // ✅ Flag to help in UI logic
    submenu: [
      { name: "Storm Analytics", href: "/capabilities/utility360#1" },
      { name: "Reliability Analytics", href: "/capabilities/utility360#2" },
      { name: "AMI Analytics", href: "/capabilities/utility360#4" },
    ],
  },
  { name: "SPARC", href: "/capabilities/sparc" },
  { name: "HEXpert", href: "/capabilities/hexpert" },
  { name: "Communication Audit Platform", href: "/capabilities/communication-audit-platform" },
];

const oracle = [
  { name: "OUDI", href: "/capabilities/oudi" },
  {
    name: "Data Exchange",
    href: "/capabilities/data-exchange",
    submenu: [
      { name: "Golden Gate", href: "/capabilities/data-exchange" },
      { name: "LEC", href: "/capabilities/data-exchange#1" },
      { name: "OIC", href: "/capabilities/data-exchange#2" },
      { name: "SOA", href: "/capabilities/data-exchange#3" },
    ],
  },
  { name: "FDI", href: "/capabilities/fdi" },
  { name: "OCI", href: "/capabilities/oci" },
  { name: "OUA", href: "/capabilities/oua" },
];


const ms = [
  { name: "DevOps", href: "/capabilities/managed-services" },
  { name: "Operations Support", href: "/capabilities/managed-services" },
];

const accelertors = [
  {
    name: "AI Applications",
    href: "/capabilities/ai-applications",
  },
  {
    name: "Utility360",
    href: "/capabilities/utility360",
  },
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
];
const technologies = [{ name: "Oracle Utility Analytics (OUA)", href: "/" }];

const navigation = [
  // { name: "Solutions", href: "/solutions" },
  //{ name: "Utilities Analytics User Group", href: "/uaug" },
  // { name: "Careers", href: "/careers" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "https://info.hexstream.com/contact" },
];
export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  useEffect(() => {
    const doMagic = () => {
      setIsOpen(false);
    };

    Router.events.on("routeChangeStart", doMagic); // add listener

    return () => {
      Router.events.off("routeChangeStart", doMagic); // remove listener
    };
  }, []);

  return (
    <header className={`fixed w-full z-50 top-0 left-0 bg-prime  shadow-2xl`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 md:px-2 " aria-label="Top">
        <div className="w-full sm:-mb-0 flex items-center justify-between sm:px-6 lg:px-0">
          <div className="flex items-center justify-between w-full">
            <div className="mr-auto md:mx-0 ">
              <Link href="/">
                <div className="cursor-pointer">
                  <span className="sr-only">HEXstream-</span>
                  <div className="py-4 flex justify-between">
                    <Image
                      priority
                      height={100}
                      width={150}
                      alt="HEXStream logo"
                      src={logo}
                      className="hover:scale-110 duration-300 transition-transform"
                    />
                  </div>
                </div>
              </Link>
            </div>
            {/* MD+ */}
            <div className="hidden gap-4 items-center relative lg:flex">
              <>
                {/* Products */}
                <div className="dropdown inline-block relative group">
                  <button className="text-gray-700 font-semibold py-2 inline-flex items-center transition duration-200 group-hover:text-primary-dark">
                    <span className="mr-1 text-primary">Products</span>
                    <svg className="fill-primary h-4 w-4 transform group-hover:rotate-180 transition duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </button>
                  <ul className="dropdown-menu absolute hidden group-hover:block bg-white text-primary pt-1 w-52 rounded-lg shadow-lg z-50 transition duration-300 ease-in-out">
                    {services.map(({ name, href, submenu }) => (
                        <li key={name} className="relative group/submenu">
                          {submenu ? (
                              <>
                                <Link
                                    href={href}
                                    className="py-2 px-4 flex justify-between items-center hover:bg-primary hover:text-white transition rounded-md"
                                >
                                  {name}
                                  <svg
                                      className="w-3 h-3 ml-1 fill-current"
                                      viewBox="0 0 20 20"
                                  >
                                    <path d="M6 4l8 6-8 6V4z" />
                                  </svg>
                                </Link>
                                <ul className="absolute top-0 left-full hidden group-hover/submenu:block bg-white text-primary w-52 rounded-lg shadow-lg transition duration-300 ease-in-out z-50">
                                  {submenu.map(({ name: subName, href: subHref }) => (
                                      <li key={subName}>
                                        <Link
                                            href={subHref}
                                            className="py-2 px-4 block hover:bg-primary hover:text-white transition rounded-md"
                                        >
                                          {subName}
                                        </Link>
                                      </li>
                                  ))}
                                </ul>
                              </>
                          ) : (
                              <Link
                                  href={href}
                                  className="py-2 px-4 block hover:bg-primary hover:text-white transition rounded-md"
                              >
                                {name}
                              </Link>
                          )}
                        </li>
                    ))}
                  </ul>
                </div>

                {/* Oracle with submenu */}
                <div className="dropdown inline-block relative group">
                  <button className="text-gray-700 font-semibold py-2 inline-flex items-center transition duration-200 group-hover:text-primary-dark">
                    <span className="mr-1 text-primary">Oracle</span>
                    <svg className="fill-primary h-4 w-4 transform group-hover:rotate-180 transition duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </button>
                  <ul className="dropdown-menu absolute hidden group-hover:block bg-white text-primary pt-1 w-52 rounded-lg shadow-lg z-50 transition duration-300 ease-in-out">
                    {oracle.map(({ name, href, submenu }) => (
                        <li key={name} className="relative group/submenu">
                          {submenu ? (
                              <>
                                <span className="py-2 px-4 block hover:bg-primary hover:text-white transition rounded-md cursor-pointer">
                                  {name}
                                  <svg className="w-3 h-3 inline ml-1 fill-current" viewBox="0 0 20 20"><path d="M6 4l8 6-8 6V4z" /></svg>
                                </span>
                                <ul className="absolute top-0 left-full hidden group-hover/submenu:block bg-white text-primary w-52 rounded-lg shadow-lg transition duration-300 ease-in-out z-50">
                                  {submenu.map(({ name: subName, href: subHref }) => (
                                      <li key={subName}>
                                        <Link href={subHref} className="py-2 px-4 block hover:bg-primary hover:text-white transition rounded-md">
                                          {subName}
                                        </Link>
                                      </li>
                                  ))}
                                </ul>
                              </>
                          ) : (
                              <Link href={href} className="py-2 px-4 block hover:bg-primary hover:text-white transition rounded-md">
                                {name}
                              </Link>
                          )}
                        </li>
                    ))}
                  </ul>
                </div>
                {/* Technologies */}
                <div className="dropdown inline-block relative group">
                  <button className="text-gray-700 font-semibold py-2 inline-flex items-center transition duration-200 group-hover:text-primary-dark">
                    <Link href="/capabilities/Expertise" className="mr-1 text-primary">Expertise</Link>
                  </button>
                </div>

                {/* Managed Services */}
                <div className="dropdown inline-block relative group">
                  <button className="text-gray-700 font-semibold py-2 inline-flex items-center transition duration-200 group-hover:text-primary-dark">
                    <span className="mr-1 text-primary">Managed Services</span>
                    <svg className="fill-primary h-4 w-4 transform group-hover:rotate-180 transition duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </button>
                  <ul className="dropdown-menu absolute hidden group-hover:block bg-white text-primary pt-1 w-52 rounded-lg shadow-lg z-50 transition duration-300 ease-in-out">
                    {ms.map(({ name, href }) => (
                        <li key={name}>
                          <Link className="py-2 px-4 block hover:bg-primary hover:text-white transition rounded-md" href={href}>
                            {name}
                          </Link>
                        </li>
                    ))}
                  </ul>
                </div>

                {/* Insights */}
                <div className="dropdown inline-block relative group">
                  <button className="text-gray-700 font-semibold py-2 inline-flex items-center transition duration-200 group-hover:text-primary-dark">
                    <Link href="/Insights" className="mr-1 text-primary">Insights</Link>
                  </button>

                  {/*<button className="text-gray-700 font-semibold py-2 inline-flex items-center transition duration-200 group-hover:text-primary-dark">*/}
                  {/*  <span className="mr-1 text-primary">Insights</span>*/}
                  {/*  <svg className="fill-primary h-4 w-4 transform group-hover:rotate-180 transition duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">*/}
                  {/*    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />*/}
                  {/*  </svg>*/}
                  {/*</button>*/}
                  {/*<ul className="dropdown-menu absolute hidden group-hover:block bg-white text-primary pt-1 w-52 rounded-lg shadow-lg z-50 transition duration-300 ease-in-out">*/}
                  {/*  {insights.map(({ name, href }) => (*/}
                  {/*      <li key={name}>*/}
                  {/*        <Link className="py-2 px-4 block hover:bg-primary hover:text-white transition rounded-md" href={href}>*/}
                  {/*          {name}*/}
                  {/*        </Link>*/}
                  {/*      </li>*/}
                  {/*  ))}*/}
                  {/*</ul>*/}
                </div>

                {/* About */}
                <div className="dropdown inline-block relative group">
                  <button className="text-gray-700 font-semibold py-2 inline-flex items-center transition duration-200 group-hover:text-primary-dark">
                    <span className="mr-1 text-primary">About</span>
                    <svg className="fill-primary h-4 w-4 transform group-hover:rotate-180 transition duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </button>
                  <ul className="dropdown-menu absolute hidden group-hover:block bg-white text-primary pt-1 w-52 rounded-lg shadow-lg z-50 transition duration-300 ease-in-out">
                    <li>
                      <Link className="py-2 px-4 block hover:bg-primary hover:text-white transition rounded-md" href="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="py-2 px-4 block hover:bg-primary hover:text-white transition rounded-md" href="/careers">
                        Careers
                      </Link>
                    </li>
                  </ul>
                </div>
              </>

              {/* Contact + Logo */}
              <div>
                <Link href="https://info.hexstream.com/contact" target="_blank">
                  <span className="text-primary text-base cursor-pointer font-bold duration-300 transition-colors hover:text-primeYellow contact-cta">Contact Us</span>
                </Link>
              </div>
              <Image
                  priority
                  height={60}
                  width={60}
                  alt="HEXStream logo"
                  src={logo2}
                  className="ml-4"
              />
            </div>
          </div>
          <div className="lg:hidden block">
            <Hamburger toggled={isOpen} toggle={setIsOpen} size={30} rounded />
          </div>
        </div>
        <ul
          id="mobile_nav"
          className={`transition-all duration-300 absolute  bg-primary text-white flex  ${
            isOpen
              ? "visible opacity-1 translate-y-0"
              : "invisible opacity-0 translate-y-10"
          } flex-col ${
            scrolled ? "top-24" : "top-20"
          } md:top-24 w-full lg:hidden shadow-md left-0 py-3 `}
        >
          <div className="w-11/12 mx-auto">
            {/* ------------------- */}

            <details className="w-full cursor-pointer pt-2">
              <summary className="w-full flex justify-between pb-1 border-b mb-1  transition-all transform duration-500">
                <p className="pl-4"> Capabilities</p>
              </summary>
              <div className="pl-4">
                {services.map((serv: any, i: any) => (
                  <NavItem
                    key={i}
                    onClick={() => setIsOpen(false)}
                    title={serv.name}
                    link={serv.href}
                    active={router.pathname === serv.href}
                  />
                ))}
              </div>
            </details>
            <details className="w-full cursor-pointer pt-2">
              <summary className="w-full flex justify-between pb-1 border-b mb-1 ">
                <p className="pl-4">Accelerators</p>
              </summary>
              <div className="pl-4">
                {accelertors.map((acc: any, i: any) => (
                  <NavItem
                    key={i}
                    onClick={() => setIsOpen(false)}
                    title={acc.name}
                    link={acc.href}
                    active={router.pathname === acc.href}
                  />
                ))}
              </div>
            </details>

            {/* ---------------- */}

            <summary className="pt-2 w-full flex justify-between pb-1 border-b mb-1  text-base">
              <Link href={"/capabilities/technologies"} className="pl-4">
                Technologies
              </Link>
            </summary>
            {/* <NavItem
                onClick={() => setIsOpen(false)}
                title="Technologies"
                link="/capabilities/technologies"
                active={router.pathname === "/capabilities/technologies"}
              /> */}
            <details className="w-full cursor-pointer pt-2 ">
              <summary className="w-full flex justify-between pb-1 border-b mb-1  text-base">
                <p className="pl-4"> Insights</p>
              </summary>
              <div className="pl-4">
                {insights.map((insight: any, i: any) => (
                  <NavItem
                    key={i}
                    onClick={() => setIsOpen(false)}
                    title={insight.name}
                    link={insight.href}
                    active={router.pathname === insight.href}
                  />
                ))}
              </div>
            </details>
            <ul className="py-2  text-sm md:text-base flex flex-col space-y-2">
              <NavItem
                onClick={() => setIsOpen(false)}
                title="Utility Analytics User Group"
                link="/uaug"
                active={router.pathname === "/uaug"}
              />
              <NavItem
                onClick={() => setIsOpen(false)}
                title="About Us"
                link="/about"
                active={router.pathname === "/about"}
              />
              <NavItem
                onClick={() => setIsOpen(false)}
                title="Careers"
                link="/careers"
                active={router.pathname === "/careers"}
              />
            </ul>
          </div>
          {/* <NavItem title="Home" link="/" active={router.pathname === "/"} /> */}
        </ul>
      </nav>
    </header>
  );
}
