export const getSizeCSS = (width?: number|string, height?: number|string ) => {
  const widthCSS = width? {width: width } : {}
  const heightCSS = height ? {height: height} : {}
  return {
    ...widthCSS,
    ...heightCSS
  }
}
