/**
 * -------------------------------------------------------------------
 * Insights Data Index
 * Consolidates all advisory insights under a single module export
 * -------------------------------------------------------------------
 */

import { structuralInsight } from "./structural.insight";
import { boqInsight } from "./boq.insight";
import { architectureInsight } from "./architecture.insight";

export { INSIGHT_CATEGORIES } from "./types";

export const insights = [
  structuralInsight,
  boqInsight,
  architectureInsight
];
