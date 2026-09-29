import { dummyDataA } from "./dummyDataA.js";
import { dummyDataB } from "./dummyDataB.js";

export function getDemoData() {
  const uploaded =
    localStorage.getItem("trace-x-file-uploaded") === "true";

  return uploaded ? dummyDataB : dummyDataA;
}