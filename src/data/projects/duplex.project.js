/**
 * -------------------------------------------------------------------
 * Project: Premium Duplex Residence
 * -------------------------------------------------------------------
 */

export const duplexProject = {
  id: "duplex-01",
  title: "Premium Duplex Residence",
  tag: "duplex",
  description: "Design of a load-bearing column frame and pad foundation mapping for a multi-family duplex residence.",
  category: "STRUCTURAL | ARCHITECTURAL | BOQ | CONSTRUCTION",
  primaryType: "STRUCTURAL",
  image: "/images/projects/work5.jpg",
  structuralImages: [
    "/images/projects/beam3.jpg",
    "/images/projects/structure.jpg"
  ],
  architecturalImages: [
    "/images/projects/architecture.jpg",
    "/images/projects/architecturea.jpg"
  ],
  boqImages: [
    "/images/projects/boq.jpg",
    "/images/projects/boqa.jpg"
  ],
  constructionImages: [
    "/images/projects/work5.jpg",
    "/images/projects/slab.jpg"
  ],

  metrics: {
    concrete: "280 m³",
    steel: "22 Tons",
    costVariance: "-5% Cost",
    timeline: "10 Months"
  },

  views: {
    structural: {
      title: "Duplex Framed Structure Design",
      description: "Design of a load-bearing column frame and pad foundation mapping for a multi-family duplex.",
      analysis: "Calculated differential shear links and steel anchors to guarantee absolute framing stability.",
      designMethod: "BS 8110 concrete frame layouts with optimized steel distributions.",
      calculations: "Base load tolerance: 180 kN. Column width: 230mm.",
      deliverables: ["Frame Details Drawings", "BBS Schedule Sheet"]
    },
    architectural: {
      title: "Duplex Space Optimization Layouts",
      description: "Dual-occupancy spatial partitioning preserving high visual light alignments.",
      analysis: "Mapped layout divisions to provide maximum acoustic segregation between units.",
      designMethod: "Double-partition drywall systems designed over structural grid alignments.",
      calculations: "Acoustic attenuation: STC 52. Window heights: 2.8m.",
      deliverables: ["Floor Layout Plans", "Drywall Details Map"]
    },
    boq: {
      title: "Duplex Cost Intelligence Bills",
      description: "Quantity surveying and concrete measurements under SMM7 rules.",
      analysis: "Detailed takeoff of timber elements, block walls, and plaster finishes.",
      designMethod: "SMM7 builder measurements for direct contractor bidding.",
      calculations: "Drywall area: 1,400 m². Concrete base: 90 m³.",
      deliverables: ["duplex BOQ Summary", "Finishes Schedule Sheet"]
    },
    construction: {
      title: "Duplex Site Quality Checks",
      description: "RC inspections checking cover spacer alignments before pouring.",
      analysis: "Audited fresh concrete slump and tested cylinder cubes in lab.",
      designMethod: "Pre-pour checklist checks for reinforcing bars spacing.",
      calculations: "Cover block spacing: 30mm. Slump target: 110m.",
      deliverables: ["RC Pre-pour Approvals", "Cube Compressive Reports"]
    }
  },

  relatedProjects: ["residential-01", "warehouse-01"]
};
