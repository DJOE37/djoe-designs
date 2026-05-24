/**
 * -------------------------------------------------------------------
 * Project: Commercial Hotel Structure
 * -------------------------------------------------------------------
 */

export const hotelProject = {
  id: "hotel-01",
  title: "Commercial Hotel Structure",
  tag: "hotel",
  description: "Structural analysis, lateral wind calculation, and utility grid design for a multi-story commercial hotel framework.",
  category: "STRUCTURAL | ARCHITECTURAL | BOQ | CONSTRUCTION",
  primaryType: "STRUCTURAL",
  image: "/images/projects/work.jpg",
  structuralImages: [
    "/images/projects/beam.jpg",
    "/images/projects/structurec.jpg"
  ],
  architecturalImages: [
    "/images/projects/building.jpg",
    "/images/projects/architecture.jpg"
  ],
  boqImages: [
    "/images/projects/boq.jpg",
    "/images/projects/boqab.jpg"
  ],
  constructionImages: [
    "/images/projects/work.jpg",
    "/images/projects/foundation.jpg"
  ],

  metrics: {
    concrete: "1,200 m³",
    steel: "160 Tons",
    costVariance: "-9% Cost",
    timeline: "24 Months"
  },

  views: {
    structural: {
      title: "Hotel Column Frame & Shear Wall Detailing",
      description: "Structural analysis and lateral wind calculations for a multi-story hotel framework.",
      analysis: "Modeled lateral shear walls to resist dynamic wind shear pressures.",
      designMethod: "Eurocode 2 structural concrete framework detailing.",
      calculations: "Shear wall thickness: 300mm. Lateral sway factor: H/500.",
      deliverables: ["Shear Wall Reinforcement Detailing", "Wind Loading Models"]
    },
    architectural: {
      title: "Hotel Layout & Utility Grid Coordination",
      description: "Multidisciplinary corridor services mapping for optimal hotel operations.",
      analysis: "Positioned vertical riser ducts within structural column grids.",
      designMethod: "BIM-coordinated ceiling coordination mapping.",
      calculations: "Corridor head height: 2.8m. Vertical shaft area: 4.5m².",
      deliverables: ["Corridor Utility Layouts", "Vertical Riser Detail sheets"]
    },
    boq: {
      title: "Hotel Tender Bills & Material Surveys",
      description: "Comprehensive quantity takeoffs covering concrete framing, finishes, and services.",
      analysis: "Measured formwork surface areas and reinforcement tonnages from schedules.",
      designMethod: "CESMM building classification rules.",
      calculations: "Formwork area: 6,800 m². Steel tonnage: 160.2 T.",
      deliverables: ["Hotel Tender BOQ", "Rate Analysis Matrices"]
    },
    construction: {
      title: "Hotel pre-pour Reinforcement Inspections",
      description: "Inspection of high-yield steel links inside columns and beam junctions.",
      analysis: "Audited mechanical couplers and bar spacing intervals at beam-column nodes.",
      designMethod: "Site inspection checks before vertical core concrete pours.",
      calculations: "Coupler tension capacity: 550 N/mm². Concrete grade: C40/50.",
      deliverables: ["Pre-pour Joint Approvals", "Cylinder Compressive Records"]
    }
  },

  relatedProjects: ["warehouse-01", "residential-01"]
};
