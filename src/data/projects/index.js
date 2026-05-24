/**
 * -------------------------------------------------------------------
 * Projects Data Index
 * Consolidates all case studies under a single module export
 * -------------------------------------------------------------------
 */

import { warehouseProject } from "./warehouse.project";
import { residentialProject } from "./residential.project";
import { infrastructureProject } from "./infrastructure.project";
import { duplexProject } from "./duplex.project";
import { bungalowProject } from "./bungalow.project";
import { hotelProject } from "./hotel.project";

export const projects = [
  warehouseProject,
  residentialProject,
  infrastructureProject,
  duplexProject,
  bungalowProject,
  hotelProject
];
