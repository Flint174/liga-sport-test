export function htmlDecode(input?: string) {
  if (!input) return "";
  var doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
}
