export function toBanglaNumber(value: number | string) {
  const banglaDigits = "০১২৩৪৫৬৭৮৯";

  return String(value).replace(
    /\d/g,
    (digit) => banglaDigits[Number(digit)]
  );
}

export function formatPrice(price: number) {
  return `${toBanglaNumber(price.toLocaleString("en-IN"))} টাকা`;
}

export function formatChange(
  dir: "up" | "down" | "flat",
  pct: number
) {
  const percentage = toBanglaNumber(
    Math.abs(pct).toFixed(1)
  );

  if (dir === "up") {
    return `▲ ${percentage}%`;
  }

  if (dir === "down") {
    return `▼ ${percentage}%`;
  }

  return `— ${toBanglaNumber("0.0")}%`;
}

export function formatUnit(unit: string) {
  if (unit === "kg") {
    return "প্রতি কেজি";
  }

  if (unit === "litre") {
    return "প্রতি লিটার";
  }

  return unit;
}