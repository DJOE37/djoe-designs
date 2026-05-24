/**
 * -------------------------------------------------------------------
 * Project: Industrial Steel Warehouse
 * -------------------------------------------------------------------
 */

export const warehouseProject = {
  id: "warehouse-01",
  title: "Industrial Steel Warehouse",
  tag: "infrastructure",
  description: "Structural design, loading optimization, and stability analysis for a 2,500m² clear-span industrial steel warehouse facility.",
  category: "STRUCTURAL | ARCHITECTURAL | BOQ | CONSTRUCTION",
  primaryType: "STRUCTURAL",
  image: "/images/projects/warehouse.jpg",
  structuralImages: [
    "/images/projects/beam.jpg",
    "/images/projects/structurec.jpg"
  ],
  architecturalImages: [
    "/images/projects/architecture.jpg",
    "/images/projects/building.jpg"
  ],
  boqImages: [
    "/images/projects/boq.jpg",
    "/images/projects/boqab.jpg"
  ],
  constructionImages: [
    "/images/projects/slab.jpg",
    "/images/projects/work2.jpg"
  ],

  metrics: {
    concrete: "340 m³",
    steel: "85 Tons",
    costVariance: "-15% Tonnage",
    timeline: "6 Months"
  },

  views: {
    structural: {
      title: "Structural Portal Frame & Design Sizing",
      description: "Structural design, loading optimization, and stability analysis for a 2,500m² clear-span industrial facility.",
      analysis: "Portal frames were modeled under high lateral wind loads (45m/s wind speed) using second-order elastic analysis. Variable-depth rafter-to-column knees were detailed to resist high bending stress zones, preventing structural deflection.",
      designMethod: "Limit state design matching Eurocode 3 (EN 1993) criteria, sizing columns using UC 305x305x118 sections and main portal rafters using UB 610x229x125 steel profiles.",
      calculations: "Design bending moment (knees): 380 kNm. Vertical load deflection: L/250 limit. Portal stability parameter (alpha-cr): 12.8, verifying lateral robustness against sway buckling.",
      deliverables: [
        "Finite Element Portal Stress Model Calculation Reports",
        "Rigid Joint & Base Connection Detail Drawings",
        "Rafter & Rafter Knee Layout Sheets",
        "Anchor Bolt Diameter & Tension Specifications"
      ]
    },

    architectural: {
      title: "Logistics Circulation & Daylighting Optimization",
      description: "Space planning focused on clear logistics vehicle paths, high-bay clearance, and daylight layout designs.",
      analysis: "Circulation paths were mapped to align with truck turning radii and standard high-bay racking systems, ensuring storage capacity is maximized while maintaining safe forklift lanes.",
      designMethod: "Integrated code-compliant fire escape paths and positioned ridge ventilation louvers to allow passive cooling, maintaining airflow without active HVAC units.",
      calculations: "Minimum clear vertical headroom: 8.5 meters. Light transmittance: 12% daylight factor using polycarbonate skylight sheets.",
      deliverables: [
        "Logistic Material Flow & Truck Circulation Layouts",
        "Roof Plan & Passive Ridge Ventilation Details",
        "Polycarbonate Skylight Detail Layout Sheets",
        "External Elevations & Fire Path Code Maps"
      ]
    },

    boq: {
      title: "Standard Quantity Surveying & Steel Takeoffs",
      description: "Comprehensive Bill of Quantities measurements and steel tonnage auditing to secure fixed-price contractor bidding.",
      analysis: "Performed precise dimensional takeoffs from portal sheets, separating primary frames, purlins, wall girts, steel connections, cladding, and base concrete bases.",
      designMethod: "Quantities measured under SMM7 (Standard Method of Measurement for Building Works) rules to establish a clear audit baseline.",
      calculations: "Main frame steel: 62.4 T. Secondary framing (purlins/girts): 23.0 T. Excavation volume: 480 m³. Base concrete: 340 m³.",
      deliverables: [
        "Tender-Ready Bills of Quantities (SMM7-Compliant)",
        "Raw Material Tonnage Summary Schedules",
        "Unit Cost Pricing Reference Guide Sheets",
        "Contractor Bid Review & Analysis Template Matrix"
      ]
    },

    construction: {
      title: "Anchor Bolt Tolerances & Portal Frame Rigging Checks",
      description: "Quality control, anchor layout checks, and structural site inspections during column base setting and frame rigging stages.",
      analysis: "Monitored placement coordinates of anchor bolts inside concrete base forms before casting, checking column plumb lines using total station lasers during frame erection.",
      designMethod: "Direct pre-pour checking of foundation rebar spacing, anchor bolt alignment checks, and crane rigging load limit reviews.",
      calculations: "Anchor bolt coordinate tolerance: ±2mm. Column vertical alignment tolerance: H/600. Slump target: 120mm.",
      deliverables: [
        "Foundation Base Anchor Alignment Inspection Reports",
        "Compressive Concrete Strength Lab Certificates (C30/37)",
        "Structural Plumb Line & Rigging Approval Slips",
        "Pre-pour Steel Layout Verification Logs"
      ]
    }
  },

  relatedProjects: ["residential-01", "infrastructure-01"]
};
