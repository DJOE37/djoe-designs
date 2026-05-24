/**
 * -------------------------------------------------------------------
 * Project: Modern Bungalow Sizing
 * -------------------------------------------------------------------
 */

export const bungalowProject = {
  id: "bungalow-01",
  title: "Modern Bungalow Sizing",
  tag: "bungalow",
  description: "Structural design of a single-story slab-on-grade and continuous foundation strip footing for a modern bungalow.",
  category: "STRUCTURAL | ARCHITECTURAL | BOQ | CONSTRUCTION",
  primaryType: "STRUCTURAL",
  image: "/images/projects/work4.jpg",
  structuralImages: [
    "/images/projects/beam2.jpg",
    "/images/projects/structureb.jpg"
  ],
  architecturalImages: [
    "/images/projects/architectureb.jpg",
    "/images/projects/work4.jpg"
  ],
  boqImages: [
    "/images/projects/boqa.jpg",
    "/images/projects/boqab.jpg"
  ],
  constructionImages: [
    "/images/projects/raft.jpg",
    "/images/projects/work2.jpg"
  ],

  metrics: {
    concrete: "180 m³",
    steel: "14 Tons",
    costVariance: "-12% Cost",
    timeline: "8 Months"
  },

  views: {
    structural: {
      title: "Bungalow Slab-on-Grade Design",
      description: "Structural design of single-story slab and continuous foundation strip footing.",
      analysis: "Soil bearing capacity checks to prevent structural differential settlements.",
      designMethod: "BS 8110 slab calculations with Fe500 mesh reinforcement.",
      calculations: "Slab depth: 150mm. Soil load capacity: 120 kN/m².",
      deliverables: ["Slab Sizing Details", "Strip Footing Sections"]
    },
    architectural: {
      title: "Bungalow Open Concept Design",
      description: "High-ceiling architectural layouts featuring maximum natural lighting windows.",
      analysis: "Mapped window orientations to balance daylight inputs with thermal gains.",
      designMethod: "Integrated vaulted ceiling truss grids over partition walls.",
      calculations: "Ceiling vertical clearance: 4.2m. Daylight factor: 14%.",
      deliverables: ["Bungalow Layout Elevations", "Opening Detailing Sheets"]
    },
    boq: {
      title: "Bungalow Material Quantity Takeoffs",
      description: "Detailed quantities bills covering excavation, strip concrete, and brick blocks.",
      analysis: "Measurement of surface render and plasterboard coverings.",
      designMethod: "SMM7 standard trade billing formats.",
      calculations: "Brick counts: 18,500. Subgrade fill: 110 m³.",
      deliverables: ["Tender BOQ Document", "Material Takeoff Sheets"]
    },
    construction: {
      title: "Bungalow Site Compaction Audits",
      description: "Verification of subgrade soil density and foundation levels.",
      analysis: "Dynamic cone penetrometer inspections before footing concrete pour.",
      designMethod: "Standard sand replacement compaction testing.",
      calculations: "Compaction rating: 96% MDD. Excavation depth: 1.2m.",
      deliverables: ["Compaction Lab Certs", "Trench Level Layout Sign-offs"]
    }
  },

  relatedProjects: ["residential-01", "warehouse-01"]
};
