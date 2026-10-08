export function toBanglaNumber(value: number | string) {
  const banglaDigits = "০১২৩৪৫৬৭৮৯";

  return String(value).replace(
    /\d/g,
    (digit) => banglaDigits[Number(digit)]
  );
}

export function formatPrice(price: number) {
  return `${toBanglaNumber(
    price.toLocaleString("en-IN")
  )} টাকা`;
}

export function formatChange(change: number) {
  const absolute = Math.abs(change).toFixed(1);

  if (change > 0) {
    return `▲ ${toBanglaNumber(absolute)}%`;
  }

  if (change < 0) {
    return `▼ ${toBanglaNumber(absolute)}%`;
  }

  return `—${toBanglaNumber("0.0")}%`;
}