export function matchObjects(obj1: Object, obj2: Object) {
  if (typeof obj1 !== "object" || typeof obj2 !== "object") {
    return false;
  }

  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  for (let key of Object.keys(obj1)) {
    if (!obj2.hasOwnProperty(key)) {
      return false;
    }

    if (obj1[key as keyof typeof obj1] !== obj2[key as keyof typeof obj2]) {
      return false;
    }
  }

  return true;
}
