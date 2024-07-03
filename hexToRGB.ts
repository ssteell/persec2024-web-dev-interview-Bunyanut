const hexToRGB = (hex: string) => {
  //ลบ #
  hex = hex.replace(/^#/, "");
  //ทำให้เป็นตัวเต็ม
  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((c) => c + c)
      .join("");
  }
  //แยกสี
  const r: number = parseInt(hex.slice(0, 2), 16);
  const g: number = parseInt(hex.slice(2, 4), 16);
  const b: number = parseInt(hex.slice(4, 6), 16);

  return { r, g, b };
};

//Test
console.log(hexToRGB("#FF9933")); // {r: 255, g: 153, b: 51}
console.log(hexToRGB("#ff9933")); // {r: 255, g: 153, b: 51}
console.log(hexToRGB("#FFF")); // {r: 255, g: 255, b: 255}
console.log(hexToRGB("#000")); // {r: 0, g: 0, b: 0}
