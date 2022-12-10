export function copyToClipboard(text: string, callback?: () => void) {
  navigator.clipboard.writeText(text).then(() => {
    if (callback) callback()
  })
}
