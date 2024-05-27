export async function copyToClipboard(valueToCopy: string) {
  if (navigator) {
    return navigator.clipboard.writeText(valueToCopy);
  }
}
