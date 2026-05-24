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
    desc: "We calculate how loads transfer through columns, beams, and slabs down to the foundation. Instead of relying on broad, oversized safety margins to save design time—which adds unnecessary concrete and steel cost—we run localized finite element models for each load-bearing node. By analyzing soil conditions from the geotechnical report alongside physical structural requirements, we design columns and foundation pads that resist bending moments and ground movement, ensuring the structure is safe without wasting material.",
    relevance: "If structural designs are uncoordinated, contractors face problems like beam deflections under live loads, cracking in non-load-bearing walls, or foundations that do not suit the actual bearing capacity of the soil. We deliver precise reinforcement details and bar bending schedules (BBS) that local municipal authorities can quickly approve and site foremen can execute without translation errors.",
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
    workflow: "We start with the geotechnical borehole data to specify the foundation depth and type. Next, we build a 3D structural model based on spatial dimensions to calculate stress under gravity and lateral wind loads. Finally, we translate these calculations into detailed reinforcement drawings, labeling every bar size, lap length, and bend angle for the contractor."
  },
  {
    code: "02",
    title: "Architectural Design",
    subtitle: "Creating spatial layouts designed to fit realistic structural grids.",
    desc: "We design architectural concepts by thinking about the physical frame that supports them. In traditional designs, architects often draft open floor plans without considering where columns and shear walls must stand, leading to structural clashes, exposed columns in living spaces, or the need for expensive, post-tensioned beams. Our spatial layouts align with logical column grids from the very first concept. We focus on natural light pathing, practical room dimensions, and functional flow while keeping the underlying structural scheme simple and cost-efficient.",
    relevance: "Avoids the frustrating cycle of redesigned plans when building control rejects a layout, or when the structural engineer explains that an open-concept layout requires massive steel members that cannot be built within your budget. By integrating structural planning with spatial layouts, you receive drawings that translate directly to site permits and construction.",
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
    workflow: "We trace spatial concepts over load-bearing column grids to keep spans reasonable. Once you approve the layout, we model the volumes in 3D to refine window placement and material selections. We then generate the final dimensioned drawings required for municipal building control and site construction."
  },
  {
    code: "03",
    title: "BOQ & Cost Intelligence",
    subtitle: "Converting drawings into detailed material schedules to protect project budgets.",
    desc: "A construction budget is only as reliable as the measurements it is built on. We audit architectural and structural plans to calculate exact quantities of excavation volume, concrete cubic meters, reinforcement steel tonnage, and finishing surface areas. Instead of using rough square-meter estimates that ignore actual site variables, we categorize every item under standardized trade codes. We apply current local market rates for materials and labor so you know the true cost of your building before requesting contractor bids.",
    relevance: "Prevents contractor price inflation and unexpected claims for 'extra work' during construction. If a material takeoff misses temporary items like excavation shoring or concrete formwork, developers end up paying high variations later. A detailed Bill of Quantities (BOQ) establishes a fixed benchmark, so you only pay for materials that are actually specified in the drawings.",
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
    workflow: "We measure every structural member, masonry wall, and finish layer from the approved drawings. These quantities are compiled into a structured document, verified against current trade rates, and organized into tender packages so you can compare contractor bids on an exact, apple-to-apple basis."
  },
  {
    code: "04",
    title: "Construction Consultancy",
    subtitle: "Providing technical supervision on site to ensure calculations match execution.",
    desc: "Even the most accurate structural calculations cannot protect a building if they are executed incorrectly on site. We provide site coordination at critical project milestones—such as foundation excavations, ground beam reinforcement, and suspended slab layouts—before any concrete is poured. We check that reinforcing bars are placed in the correct tension zones, overlap lengths comply with anchorage standards, and concrete cover blocks are positioned to prevent steel rusting. We act as your technical representative on site, checking that the contractor builds according to the drawings.",
    relevance: "Once concrete is cast, correcting errors requires destructive demolition or expensive structural retrofitting. We check the steel diameters, spacing, and clean cover blocks directly in the formwork before casting. This inspection minimizes structural liability, verifies that contractors do not cut corners, and provides the quality assurance needed for long-term safety.",
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
    workflow: "We schedule site visits to inspect formwork and rebar cages before any concrete is poured. We check bar sizes, hook shapes, cleanliness, and cover spaces against the engineering details. If we find errors, we mark them on site and approve the pour only after the contractor corrects the installation."
  }
];
