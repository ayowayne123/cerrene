import React from "react";
import { getCategoryNames } from "@/public/utils/sanity-utils";
import CategoryItem from "./categoryItem";

const categoryNames = [
  {
    title: "All",
    slug: "all",
    _id: "234ae",
  },
  {
    title: "Residential Cleaning",
    slug: "residential-cleaning",
    _id: "453bd",
  },
  {
    title: "Commercial Cleaning",
    slug: "commercial-cleaning",
    _id: "56fce",
  },
  {
    title: "Deep Cleaning",
    slug: "deep-cleaning",
    _id: "67dfg",
  },
  {
    title: "Eco-friendly Cleaning",
    slug: "eco-friendly-cleaning",
    _id: "78ghf",
  },
  {
    title: "Cleaning Tips & Tricks",
    slug: "cleaning-tips",
    _id: "89hjk",
  },
  {
    title: "Organizational Hacks",
    slug: "organizational-hacks",
    _id: "90ijk",
  },
];

export default function Category() {
  return (
    <div className="slg:h-[94px] h-[60px] md:h-[80px]  w-full bg-cerreneYellow text-[#4e4e4e]">
      <div className="flex flex-row overflow-x-scroll no-scrollbar items-center justify-start md:gap-5 slg:gap-8 lg:gap-12 h-full container ">
        {categoryNames.map((item) => (
          <CategoryItem category={item} key={item._id} />
        ))}
      </div>
    </div>
  );
}
