import type { DC } from "./types.js";

export const LAYER = 214;

export const TEST_DC_LIST: DC[] = [
  {
    id: 1,
    ip: "149.154.175.10",
    port: 80,
    test: true,
  },
  {
    id: 2,
    ip: "149.154.167.40",
    port: 443,
    test: true,
  },
  {
    id: 3,
    ip: "149.154.175.117",
    port: 443,
    test: true,
  },
];

export const PRODUCTION_DC_LIST: DC[] = [
  {
    id: 1,
    ip: "149.154.175.50",
    port: 443,
  },
  {
    id: 2,
    ip: "149.154.167.51",
    port: 443,
  },
  {
    id: 3,
    ip: "149.154.175.100",
    port: 443,
  },
  {
    id: 4,
    ip: "149.154.167.91",
    port: 443,
  },
  {
    id: 5,
    ip: "149.154.171.5",
    port: 443,
  },
];
