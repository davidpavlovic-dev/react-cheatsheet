export function normalizeText(value) {
  return String(value ?? "")
    .trim()
    .toLowerCase();
}

export default normalizeText;

