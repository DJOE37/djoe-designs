/**
 * -------------------------------------------------------------------
 * Project: Stormwater Culvert & Civil Infrastructure
 * -------------------------------------------------------------------
 */

export const infrastructureProject = {
  id: "infrastructure-01",
  title: "Stormwater Culvert & Civil Infrastructure",
  tag: "infrastructure",
  description: "Structural design, soil-retaining calculations, and highway wheel load modeling for a 1.2-kilometer stormwater line.",
  category: "STRUCTURAL | ARCHITECTURAL | BOQ | CONSTRUCTION",
  primaryType: "BOQ",
  image: "/images/projects/boq.jpg",
  structuralImages: [
    "/images/projects/structure.jpg",
    "/images/projects/structurea.jpg"
  ],
  architecturalImages: [
    "/images/projects/architectureb.jpg",
    "/images/projects/work3.jpg"
  ],
  boqImages: [
    "/images/projects/boqab.jpg",
    "/images/projects/boqa.jpg"
  ],
  constructionImages: [
    "/images/projects/foundation.jpg",
    "/images/projects/work.jpg"
  ],

  metrics: {
    concrete: "680 m³",
    steel: "45 Tons",
    costVariance: "-11% Earthwork",
    timeline: "9 Months"
  },

  views: {
    structural: {
      title: "Precast Box Culvert Structural Sizing",
      description: "Structural design, soil-retaining math, and highway wheel load modeling for a 1.2-kilometer stormwater line.",
      analysis: "Modeled lateral active earth pressures and hydrostatic forces acting on the box walls. Sized culvert sections to resist LM1 highway wheel loads (HB loading configuration) using finite element analysis.",
      designMethod: "Limit state design matching BS 5400 standards for civil highway concrete structures, using Grade C40 concrete with high crack-control reinforcement.",
      calculations: "Lateral soil pressure coefficient (Ka): 0.33. Design wheel load: 150 kN. Structural box thickness: 250mm.",
      deliverables: [
        "Precast Culvert Reinforcement Sizing Sheets",
        "Rigid Joint & Joint Seal Detail Layouts",
        "Retaining Headwall Sizing Reports",
        "Highway Load Distribution Calculation Sheets"
      ]
    },

    architectural: {
      title: "Drainage Corridor Alignment & Civil Site Layouts",
      description: "Civil layout design mapping culvert corridor alignments, slope falls, and discharge basin details.",
      analysis: "Traced stormwater channel paths using topographic contours to establish gravity flow, avoiding clashes with municipal water and electrical utility paths.",
      designMethod: "Integrated culvert layout into site maps, ensuring safe embankments and designing discharge outlet wingwalls.",
      calculations: "Corridor channel slope: 1:250 uniform fall. Discharge water capacity: 12 m³/s.",
      deliverables: [
        "Civil Channel Alignment Layout Plans",
        "Discharge Basin & Wingwall Elevation Sections",
        "Utility Corridor Clearance Layout Sheets",
        "Stormwater Runoff Catchment Profile Drawings"
      ]
    },

    boq: {
      title: "Civil Engineering Standard Quantity Measurements",
      description: "Earthwork volume takeoffs, trench excavation measurements, and culvert bedding billing audits.",
      analysis: "Calculated detailed cut-and-fill soil profiles, measuring precast concrete sections, joints, bedding sand volumes, and trench shoring requirements.",
      designMethod: "Quantities measured in compliance with CESMM (Civil Engineering Standard Method of Measurement) guidelines.",
      calculations: "Trench excavation: 6,400 m³. Precast culvert concrete: 680 m³. Granular sand bedding: 320 m³.",
      deliverables: [
        "CESMM-Compliant Tender Bills of Quantities (BOQ)",
        "Earthwork Cut-and-Fill Balance Reports",
        "Substructure Excavation Quantity Takeoffs",
        "Contractor Cost Estimate Valuation Slips"
      ]
    },

    construction: {
      title: "Soil Compaction Control & Precast Joint Rigging Inspections",
      description: "Site inspections checking trench shoring systems, foundation compaction levels, and precast joint rigging.",
      analysis: "Monitored earthwork compaction testing using sand replacement density verification. Inspected rubber joint seals during precast section placement.",
      designMethod: "Trench safety check monitoring, dynamic compaction layer sign-offs, and joint water-tightness visual audits.",
      calculations: "Compaction target: 95% MDD (Maximum Dry Density). Joint sealant thickness: 20mm.",
      deliverables: [
        "Trench Backfill Sand Compaction Lab Reports",
        "Precast Culvert Joint Watertight Sign-Offs",
        "Shoring & Trench Stability Safety Clearance Logs",
        "Rigging & Lift Load Configuration Records"
      ]
    }
  },

  relatedProjects: ["warehouse-01", "residential-01"]
};
