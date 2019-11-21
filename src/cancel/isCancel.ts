import Cancel from "./Cancel";

export default function isCancel(val: any): boolean {
  return val instanceof Cancel;
}
