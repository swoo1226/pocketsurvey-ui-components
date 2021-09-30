export const isValidFile = (fileName: string, fileAcceptance) => {
  const extension = fileName.substring(
    fileName.lastIndexOf(".") + 1,
    fileName.length
  )
  if (fileAcceptance.includes(extension)) return true
  return false
}