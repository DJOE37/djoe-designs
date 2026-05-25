/**
 * -------------------------------------------------------------------
 * Project: Reinforced Concrete Residential Villa
 * -------------------------------------------------------------------
 */

export const residentialProject = {
  id: "residential-01",
  title: "Reinforced Concrete Residential Villa",
  tag: "villa",
  description: "Reinforced concrete frame design, column grid transfers, and shallow strip footing design for a modern luxury villa.",
  category: "STRUCTURAL | ARCHITECTURAL | BOQ | CONSTRUCTION",
  primaryType: "ARCHITECTURAL",
  image: "/images/projects/raft.webp",
  structuralImages: [
    "/images/projects/beam2.webp",
    "/images/projects/structureb.webp"
  ],
  architecturalImages: [
    "/images/projects/architecturea.webp",
    "/images/projects/work5.webp"
  ],
  boqImages: [
    "/images/projects/boqa.webp",
    "/images/projects/boq.webp"
  ],
  constructionImages: [
    "/images/projects/raft.webp",
    "/images/projects/foundation.webp"
  ],

  metrics: {
    concrete: "420 m³",
    steel: "38 Tons",
    costVariance: "-8% Cost",
    timeline: "12 Months"
  },

  views: {
    structural: {
      title: "Suspended Flat Slab Detailing & Foundation Design",
      description: "Reinforced concrete frame design, column grid transfers, and shallow strip footing design for a modern villa.",
      analysis: "Analyzed gravity slab stresses to prevent shear failures. Sized suspended slabs with local drop panels to handle punching shear around column connections, keeping ceiling profiles flat.",
      designMethod: "Limit state concrete design matching BS 8110 standards, using C30/37 concrete grades and high-yield reinforcement (Fe500).",
      calculations: "Main suspended slab thickness: 200mm. Slab bending moment capacity: 45 kNm/m. Soil-bearing capacity verified: 150 kN/m².",
      deliverables: [
        "Slab Bottom & Top Reinforcement Details",
        "Column Shear Link & Splice Height Sheets",
        "Strip Foundation Detail Drawings",
        "Bar Bending Schedules (BBS) for Casting"
      ]
    },

    architectural: {
      title: "Column Integration & Interior Spatial Flow",
      description: "Concept space layouts designed to embed structural framing elements inside wall partitions.",
      analysis: "Coordinated column grid lines with partition layouts, eliminating exposed structural columns in social spaces and maintaining high floor-to-ceiling glass connections.",
      designMethod: "Designed an open-concept living zone spanning between external load-bearing walls, using flush drop beams to hide structural transitions.",
      calculations: "Clear ceiling height: 3.2 meters. Maximum columnless social span: 7.2 meters.",
      deliverables: [
        "Architectural Layout Floor Plans & Sections",
        "Premium Interior & Exterior Rendering Perspects",
        "Window & Sliding Door Openings Schedules",
        "Drywall Partition Column Interface Details"
      ]
    },

    boq: {
      title: "Detailed Finishing Trades Takeoff & Material Schedules",
      description: "Standard measurement bills of quantities covering RC structural frames, blockwork walls, plastering, tiling, and glazing.",
      analysis: "Audited exact square-meter surface areas of walls and tiling alongside concrete volume takeoffs to establish fixed procurement budgets.",
      designMethod: "Quantification prepared under the Standard Method of Measurement (SMM7) for residential building works.",
      calculations: "Excavation and backfill: 240 m³. RC slab concrete: 190 m³. Plaster area: 3,200 m². Tiling area: 540 m².",
      deliverables: [
        "Tender-Ready Bills of Quantities (SMM7)",
        "Finishing Material Procurement Schedules",
        "Contractor Rate Reconciliation Review Reports",
        "Stage Cashflow Payment Framework Tables"
      ]
    },

    construction: {
      title: "RC Slab Pre-Pour Audits & Slump Cube Tests",
      description: "On-site verification of steel reinforcement layouts and concrete grade slump testing before casting.",
      analysis: "Inspected steel rebar spacings, tie-wire security, and formwork bracing prior to concrete pouring. Tested concrete slump and cast compression cylinders for laboratory verification.",
      designMethod: "Systematic pre-pour checklists to sign off steel placement details, ensuring zero rebar contact with soil or timber formwork.",
      calculations: "Reinforcement cover: 25mm (slabs), 40mm (columns). Slump target: 100mm ±25mm. Target compression: 30 N/mm² at 28 days.",
      deliverables: [
        "Pre-Pour Slab & Beam Compliance Certificates",
        "Cube Test Compressive Lab Reports",
        "Formwork Inspection Sign-Off Log Sheets",
        "Site Placement Progress Photo Logs"
      ]
    }
  },

  relatedProjects: ["warehouse-01", "infrastructure-01"]
};
