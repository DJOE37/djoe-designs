import { INSIGHT_CATEGORIES } from "./types";

export const boqInsight = {
  id: "boq-precision",
  title: "Why Accurate BOQs Prevent Cost Overruns in Construction",
  category: INSIGHT_CATEGORIES.BOQ,
  summary: "A detailed review of Bill of Quantities (BOQ) inaccuracies, explaining how standardized measurements protect budgets and minimize contractor disputes.",
  image: "/images/projects/boqab.webp",
  readTime: "5 min read",
  date: "April 28, 2026",
  author: "D'JOE Cost Advisory",
  takeaways: [
    "Vague material specifications are the primary driver of variation claims.",
    "Omitted secondary items like excavation shoring cause budget inflate late in the build.",
    "Standardized measurement frameworks (SMM7/CESMM) create a legally sound contractor bidding baseline."
  ],
  sections: [
    {
      title: "1. The High Cost of Vague Specifications",
      text: "A Bill of Quantities is only as strong as its item descriptions. When a BOQ entry simply reads 'tiling to living area' without specifying dimensions, material grade, mortar mix, or laying patterns, contractors bid on the cheapest option. During execution, when the client selects premium vitrified large-format tiles, the contractor submits a variation claim for extra material cost and specialized labor. Specifying tile thickness, dimensions, and adhesion standards from the outset locks in contractor pricing."
    },
    {
      title: "2. Omitted Auxiliary Works: The Hidden Cost Drivers",
      text: "Many cost overruns do not come from concrete or steel; they come from temporary or support works that were omitted in the tender BOQ. Items like trench shoring, site dewatering, site clearing, and material haulage are often left out of basic bills. When excavation begins and groundwater is encountered, the contractor demands extra payments for pumps and shoring. By measuring every auxiliary item under standardized rules, you eliminate unexpected contractor claims."
    },
    {
      title: "3. Standardization and the Audit Baseline",
      text: "Adopting standard measurement codes (such as SMM7 for building works or CESMM for civil engineering) enforces an objective billing baseline. This system ensures every contractor bidding for the project measures quantities the exact same way. It eliminates low-ball bids where contractors intentionally under-measure items to win the contract, only to demand massive variations later. Standardized BOQs protect project capital from inception to completion."
    }
  ]
};
