export const copyToClipboard = (screening: string) => {
  var textarea = document.createElement('textarea')
  textarea.value = screening
  document.body.appendChild(textarea)

  textarea.select()
  textarea.setSelectionRange(0, 99999)

  document.execCommand('copy')

  document.body.removeChild(textarea)
}