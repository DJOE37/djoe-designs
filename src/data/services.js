/**
 * -------------------------------------------------------------------
 * Services Data Module
 * Centralized repository for professional engineering and design content
 * -------------------------------------------------------------------
 */

export const services = [
  {
    code: "01",
    title: "Structural Engineering",
    subtitle: "Designing building frames to match actual soil profiles and load pathways.",
    desc: "Load transfer analysis determines structural safety. Instead of relying on broad, oversized safety margins to save design time—which inflates concrete and steel costs—the practice models each load-bearing node individually using localized finite element analysis. Grounded in soil report data, columns and foundation pads are sized to resist settlement and lateral wind loads, keeping the structural frame efficient.",
    relevance: "Uncoordinated drawings lead to site delays, beam deflections under live loads, and foundation designs that clash with actual soil conditions. Clear reinforcement details and compliant bar bending schedules (BBS) secure rapid building control approval and allow foremen to execute without translation errors.",
    capabilities: [
      "Substructure & Soil-Structure Interaction",
      "Reinforced Concrete Framework Design",
      "Slab Sizing & Load-Transfer Column Modeling",
      "Retaining Walls & Earth Retaining Structures",
      "Wind Load & Lateral Stability Sizing"
    ],
    deliverables: [
      "Structural Calculation Reports & Slab Stress Models",
      "Foundation Layouts, Column Details, and Beam Sections",
      "Bar Bending Schedules (BBS) for Steel Reinforcement",
      "Geotechnical Evaluation & Soil-Bearing Capacity Matches"
    ],
    workflow: "Calculations begin with geotechnical borehole data to lock in foundation depths. Next, 3D structural modeling checks stress distributions under dead, live, and wind loads. These calculations translate into reinforcement details showing bar sizes, overlap lap lengths, and clean cover spaces for the contractor."
  },
  {
    code: "02",
    title: "Architectural Design",
    subtitle: "Creating spatial layouts designed to fit realistic structural grids.",
    desc: "Spatial layouts are developed in tandem with structural gridlines. Designing open plans without structural coordination leads to columns in the middle of rooms or complex concrete transfer beams. Architectural concepts align with logical column grids from day one, balancing circulation flow and daylighting while maintaining structural simplicity.",
    relevance: "This approach prevents redesign cycles when building control flags framing issues or structural steel requirements overrun budgets. By coordinating architecture with structural engineering early, designs transition smoothly into construction permits.",
    capabilities: [
      "Concept Spatial Planning & Layout Design",
      "High-Resolution 3D Visualization & Interior Renders",
      "Municipal Building Approval Permit Drawings",
      "Lighting Layouts & Spatial Services Coordination",
      "Integrated Building Information Modeling (BIM)"
    ],
    deliverables: [
      "Photorealistic Exterior & Interior 3D Renders",
      "Floor Plans, Sections, Elevations, and Site Layouts",
      "Architectural Detail Sheets (Wet Areas, Staircases, Finishes)",
      "Schedules of Openings (Windows, Doors) and Materials"
    ],
    workflow: "Spatial schemes are drafted over active column layouts to ensure realistic spans. Once approved, the building volume is modeled in 3D to position window openings and detail envelope materials before generating final construction sheets."
  },
  {
    code: "03",
    title: "BOQ & Cost Intelligence",
    subtitle: "Converting drawings into detailed material schedules to protect project budgets.",
    desc: "A reliable budget requires precise calculations. Drawings are audited to extract exact excavation volumes, concrete cubic meters, steel tonnage, and finishing surface areas. Rather than using generic square-meter estimates, material schedules match actual drawing dimensions and current local trade rates.",
    relevance: "Quantifying every item under SMM7/CESMM measurement rules prevents contractor price inflation and late variation claims. If auxiliary works like dewatering or excavation shoring are omitted in the tender, budget creep is inevitable. A standardized BOQ locks in contractor bidding.",
    capabilities: [
      "Standard Method of Measurement Audits (SMM7/CESMM)",
      "Concrete Volume & Steel Tonnage Material Takeoffs",
      "Unit Rate Analysis & Local Market Price Audits",
      "Value Engineering & Design Sizing Cost-Benefit Reviews",
      "Contractor Bid Comparison & Tender Evaluation"
    ],
    deliverables: [
      "Standard-Compliant Tender-Ready Bills of Quantities (BOQ)",
      "Value Engineering Reports with Cost-Saving Alternatives",
      "Material Schedules for Direct Procurement",
      "Stage Payment Valuation & Cashflow Forecast Frameworks"
    ],
    workflow: "Detailed takeoffs are compiled from approved architectural and engineering plans. These quantities are structured into clear tender packages, enabling apple-to-apple contractor bidding and secure project capital management."
  },
  {
    code: "04",
    title: "Construction Consultancy",
    subtitle: "Providing technical supervision on site to ensure calculations match execution.",
    desc: "Physical construction must reflect approved calculation plans. Site supervision is provided at critical milestones—such as foundation steel setting, column starter placements, and floor slab casting—before any concrete is poured. Rebar layouts are checked in the formwork to ensure steel is in the correct tension zones with compliant overlap anchorages.",
    relevance: "Once concrete is cast, verifying internal steel is impossible without destructive coring. Pre-pour site checks confirm bar spacing, steel diameters, and cover block offsets, minimizing developer liability and verifying contractor build quality.",
    capabilities: [
      "Rebar Layout & Tension Zone Reinforcement Audits",
      "Concrete Mix Slump & Compression Test Inspections",
      "On-Site Constructability Problem Solving & RFI Answers",
      "Valuation Certification for Contractor Stage Payments",
      "Existing Structure Assessment & Structural Integrity Audits"
    ],
    deliverables: [
      "Reinforced Concrete Pre-Pour Compliance Certificates",
      "Site Progress Reports with Photo Records & Defect Logs",
      "Certified Valuation Slips for Stage Payment Approvals",
      "Structural Remedial Action Plans for Construction Defect Resolution"
    ],
    workflow: "Site inspections are scheduled before concrete pours. Formwork dimensions, steel cages, lap lengths, and spacers are verified against construction drawings. Pour approvals are granted only when installation matches approved layouts."
  }
];
