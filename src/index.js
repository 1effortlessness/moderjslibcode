import { kindOf } from "./utils.js";
function deepClone(obj) {
  if (kindOf(obj) !== "object") {
    return obj;
  }

  if (kindOf(obj) === "array") {
    return obj.map(deepClone);
  }

  const clonedObj = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      clonedObj[key] = deepClone(obj[key]);
    }
  }

  return clonedObj;
}

export { deepClone };
