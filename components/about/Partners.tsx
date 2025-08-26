import React from "react";
import Image from "next/image";

// software partners
import I from "@/public/assets/Oracle.png";
import I1 from "@/public/assets/Azure.png";
import I3 from "@/public/assets/Kinetica.png";
import I4 from "@/public/assets/Exasol.png";
import I5 from "@/public/assets/UiPath.png";
import I6 from "@/public/assets/AutomationHero.png";
import I7 from "@/public/assets/AutomationAnywhere.png";
// consulting partners
import I8 from "@/public/assets/USP.png";
import I9 from "@/public/assets/Gridbright.png";
import I10 from "@/public/assets/PSA.png";
import I11 from "@/public/assets/Abjayon.png";
import CompaniesSlider from "../reusable/CompanySlider";

const softwarePartners = [
  { img: I, alt: "Oracle logo", name: "Oracle" },
  { img: I1, alt: "Azure logo", name: "Azure" },
  { img: I3, alt: "Kinetica logo", name: "Kinetica" },
  { img: I4, alt: "Exasol logo", name: "Exasol" },
  { img: I5, alt: "UiPath logo", name: "Ui Path " },
  { img: I6, alt: "Automation Hero logo", name: "Automation Hero" },
  { img: I7, alt: "Automation Anywhere logo", name: "Automation Anywhere" },
];

const consultingPartners = [
  { img: I8, alt: "USP logo", name: "USP" },
  { img: I9, alt: "Gridbright logo", name: "Grid Bright" },
  { img: I10, alt: "PSA logo", name: "PSA" },
  { img: I11, alt: "Abjayon logo", name: "Abjayon" },
];

const Partners = () => {
  return (
    <div className="text-primary py-8 md:py-16" id="partners">
      <div className="text-center max-w-4xl mx-auto w-11/12">
        <h2 className="md:text-4xl text-2xl text-center pb-8 font-bold ">
          Our Partners
        </h2>
        <p>
          {
            "HEXstream has strategic partnerships with technology and solutions firms that are leaders in their field, as well as with a limited number of specialized firms that share our passion for delivering excellence and long-term value."
          }
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl gap-6 md:gap-x-60 mx-auto w-10/12 pt-8">
        <div>
          <h2 className="text-xl md:text-2xl text-center sm:text-left pb-8 font-bold ">
            Software Partners
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {softwarePartners.map((partner) => (
              <div
                className="bg-white p-6 grid place-items-center rounded-md"
                key={partner.alt}
              >
                <Image
                  src={partner.img}
                  alt={partner.alt}
                  height={100}
                  width={100}
                  className="w-full h-full rounded-md hover:opacity-40 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-xs mx-auto">
          <h2 className="text-xl md:text-2xl text-center sm:text-left pb-8 font-bold ">
            Consulting Partners
          </h2>

          <div className="grid grid-cols-2 gap-8 ">
            {consultingPartners.map((partner) => (
              <div
                className="bg-white p-6 grid place-items-center rounded-md"
                key={partner.alt}
              >
                <Image
                  src={partner.img}
                  alt={partner.alt}
                  height={100}
                  width={100}
                  className="w-full h-full rounded-md hover:opacity-40 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
