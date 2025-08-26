import NewPageheader from "@/components/reusable/NewPageheader";
import { contentApi } from "@/utils/apolloClient";
import { gql } from "@apollo/client";
import React from "react";
import I5 from "@/public/assets/Oracle.jpg";
import TableOfContents from "@/components/about/TableOfContent";
import { RichText } from "@graphcms/rich-text-react-renderer";
import Link from "next/link";
import Cta from "@/components/reusable/CTA";

const ServiceDetails = ({ services }: any) => {
  return (
      <div className="overflow-x h-auto">
        <NewPageheader
            type={services?.categoryTag}
            title={services?.title}
            img={services?.mainImage?.url ?? I5}
            description={services?.shortDescription}
        />

        {services.subCategories.length > 0 && (
            <div className="py-10 md:py-16 bg-primary/90 flex justify-center items-center gap-8 text-white relative">
              <div className="flex gap-10 relative max-w-7xl mx-auto w-11/12">
                <div className="hidden md:block w-1/5 sticky top-32 self-start z-10">
                  <TableOfContents />
                </div>
                <div className="w-full lg:w-4/5 flex flex-col gap-4 h-full relative partitionline divide-y-2 divide-gray-200/20">
                  <div className="leading-5 !text-white space-y-6">
                    {services.subCategories.map((subcat: any, index: any) => (
                        <div className="space-y-3" key={index}>
                          <h3
                              id={`${index}`}
                              className="heading text-xl md:text-2xl scroll-mt-32 font-bold pb-4"
                          >
                            {subcat?.title}
                          </h3>
                          {subcat?.overview && (
                              <div className="pb-5 prose text-white break-words">
                                <RichText content={subcat?.overview?.raw?.children} />
                              </div>
                          )}
                          {subcat?.insights.map((insight: any) => {
                            var type = "blogs";
                            if (insight.__typename.toLowerCase() == "whitepaper") {
                              type = "whitepapers";
                            } else if (
                                insight.__typename.toLowerCase() == "successstory"
                            ) {
                              type = "success-stories";
                            } else if (
                                insight.__typename.toLowerCase() == "techcorner"
                            ) {
                              type = "tech-corner";
                            }
                            return (
                                <Link
                                    key={insight?.title}
                                    href={`/${type}/${insight?.slug}`}
                                >
                                  <div className="flex gap-x-2 space-y-2">
                            <span className="pt-2">
                              <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-4 h-4"
                              >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                                />
                              </svg>
                            </span>
                                    <div className="pb-2 underline hover:text-secondary transition-colors duration-300">
                                      <p>{insight?.title}</p>
                                    </div>
                                  </div>
                                </Link>
                            );
                          })}
                        </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
        )}
        <Cta title="Let's get your data streamlined today!" name="Get In Touch" />
      </div>
  );
};

export default ServiceDetails;

export async function getServerSideProps({ params }: { params: any }) {
  // Fetch data from external API
  const { data } = await contentApi.query({
    query: gql`
      query MyQuery {
        categories(where: { slug: "${params.slug}" }) {
          title
          slug
          mainImage {
            url
          }
          shortDescription
          overview {
            raw
          }
          theme
          subCategories {
            title
            overview {
              raw
            }

            insights {
              ... on Blog {
                title
                slug
                shortDescription
                __typename
              }
              ... on SuccessStory {
                title
                slug
                __typename
              }
              ... on TechCorner {
                title
                slug
                __typename
              }
              ... on Whitepaper {
                title
                slug
                __typename
              }
            }
          }
        }
      }
    `,
  });

  // Pass data to the page via props
  return { props: { services: data.categories[0] } };
}
