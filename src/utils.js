export function kindOf(value) {
  return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
}

export function easterEgg() {
  console.log("Easter egg");
}
