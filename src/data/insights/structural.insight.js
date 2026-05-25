import { INSIGHT_CATEGORIES } from "./types";

export const structuralInsight = {
  id: "structural-mistakes",
  title: "Common Structural Design Mistakes in Residential Buildings",
  category: INSIGHT_CATEGORIES.MISTAKES,
  summary: "An analytical breakdown of structural design oversights in residential builds, detailing load path continuity failures and structural concrete joint behavior.",
  image: "/images/projects/structurec.webp",
  readTime: "6 min read",
  date: "May 12, 2026",
  author: "D'JOE Engineering Advisory",
  takeaways: [
    "Always map load paths continuously from the roof down to the foundations.",
    "Geotechnical soil verification is mandatory; generic soil bearing assumptions fail on-site.",
    "Reinforcement anchorages must match concrete development lengths strictly."
  ],
  sections: [
    {
      title: "1. Disconnected Load Paths",
      text: "A structural load path must be a continuous, unbroken line of resistance from the highest roof node down to the soil. In residential developments, architectural layouts often demand offset walls or open-concept living zones on the ground level. When upper-floor load-bearing masonry walls rest directly on suspended flat slabs without localized drop beams or column transfers, the slab experiences high bending moments and localized shear stresses. This offset causes structural sagging, drywall cracks, and in severe cases, punching shear failure."
    },
    {
      title: "2. Relying on Soil Assumptions Instead of Geotechnical Audits",
      text: "Many builders bypass localized soil testing, assuming standard soil bearing capacities based on neighboring developments. However, subsoil profiles can change dramatically within a few meters. Constructing a heavy reinforced concrete frame on unverified clay or fill dirt causes differential foundation settlement. This settlement exerts severe torsional stress on columns and beams, showing up as deep diagonal cracks at window joints and door frames. A site-specific borehole or penetrometer test is the only reliable insurance policy."
    },
    {
      title: "3. Neglecting Reinforcement anchorage and Concrete Cover",
      text: "In concrete joint design, strength does not come from steel thickness alone; it comes from joint anchorage. Standard high-yield reinforcement bars (Fe500) must overlap by at least 40 to 50 times their diameter to transfer load successfully. When site steel fixers cut corners on overlap lengths or omit column-beam shear links at junction nodes, the joint fails under seismic or lateral wind forces. Additionally, failing to maintain the minimum 25mm concrete cover allows moisture to reach the steel, causing rust, concrete spalling, and gradual structure decay."
    }
  ]
};
