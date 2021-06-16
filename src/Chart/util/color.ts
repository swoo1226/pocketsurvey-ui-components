import range from "lodash/range"
import chroma from "chroma-js"

const autoGradient = (color: string, numColors: number, diverging: boolean) => {
  const lab = chroma(color).lab()
  const lRange = 100 * (0.95 - 1 / numColors)
  const lStep = lRange / (numColors - 1)
  const lStart = (100 - lRange) * 0.5
  const rangeArray = range(lStart, lStart + numColors * lStep, lStep)
  let offset = 0
  if (!diverging) {
    offset = 9999
    for (let i = 0; i < numColors; i++) {
      const diff = lab[0] - rangeArray[i]
      if (Math.abs(diff) < Math.abs(offset)) {
        offset = diff
      }
    }
  }

  return rangeArray.map((l) => chroma.lab(l + offset, lab[1], lab[2]))
}

const autoColors = (
  color: string,
  numColors: number,
  reverse: boolean,
  diverging: boolean
) => {
  if (diverging) {
    const colors = autoGradient(color, 3, diverging).concat(chroma("#f5f5f5"))
    if (reverse) colors.reverse()
    return colors
  } else {
    return autoGradient(color, numColors, diverging)
  }
}

type getColorPropsType = {
  numColors: number;
  palette: "sequential" | "diverging";
  colors: string[];
  colors2?: string[];
};

const getColorChroma = (props: getColorPropsType) => {
  // http://vis4.net/palettes
  const colors = props.colors
  const colors2 = props.colors2 ?? []
  const diverging = props.palette === "diverging"
  const numColors = props.numColors

  const correctLightness = true //correct lightness
  const bezier = true //bezier interpolation

  const even = numColors % 2 === 0

  const numColorsLeft = diverging
    ? Math.ceil(numColors / 2) + (even ? 1 : 0)
    : numColors
  const numColorsRight = diverging
    ? Math.ceil(numColors / 2) + (even ? 1 : 0)
    : 0

  const genColors =
    colors.length !== 1
      ? colors
      : autoColors(colors[0], numColorsLeft, false, diverging)
  const genColors2 =
    colors2.length !== 1
      ? colors2
      : autoColors(colors2[0], numColorsRight, true, diverging)

  const stepsLeft = colors.length
    ? chroma
      .scale(
          (bezier && colors.length > 1
            ? chroma.bezier(genColors as string[])
            : genColors) as chroma.Color[]
      )
      .correctLightness(correctLightness)
      .colors(numColorsLeft)
    : []

  const stepsRight =
    diverging && colors2.length
      ? chroma
        .scale(
            (bezier && colors2.length > 1
              ? chroma.bezier(genColors2 as string[])
              : genColors2) as chroma.Color[]
        )
        .correctLightness(correctLightness)
        .colors(numColorsRight)
      : []

  const steps = (even && diverging
    ? stepsLeft.slice(0, stepsLeft.length - 1)
    : stepsLeft
  ).concat(stepsRight.slice(1))
  return steps
}

export const color = {
  YELLOW: "#FAC62D",
  LIGHT_YELLOW: "#FEF4D5",
  GRAY: "#818282",
  LIGHT_GRAY: "#F0F0F0",
  BLACK: "#2B2E33",
  NPS: {
    RED:"#F37165",
    YELLOW:"#FFD776",
    GREEN: "#70D473",
    BLUE:"#59C4DB"
  }
}

export const getColors = {
  pie: (seriesLength: number, maxIndex: number) => {
    // 가장 큰 값의 색상은 #FAC62D
    if (seriesLength <= 2) {
      const colorArray =  [color.GRAY]
      colorArray.splice(maxIndex, 0, color.YELLOW)
      return colorArray
    } else {
      const colorChorma = getColorChroma({
        numColors: seriesLength - 1,
        palette: "sequential",
        colors: [color.GRAY, color.LIGHT_GRAY],
      })

      colorChorma.splice(maxIndex, 0, color.YELLOW) 
      return colorChorma
    }
  }, 
  barStacked: (seriesLength: number) => {
    const colorChroma = getColorChroma({
      numColors: seriesLength,
      palette: "diverging",
      colors: [color.YELLOW, color.LIGHT_YELLOW],
      colors2: [color.LIGHT_GRAY, color.GRAY]
    })
    return colorChroma
  }, 
  bubble: (seriesLength: number, maxIndex: number) => {
    const colorChorma = getColorChroma({
      numColors: seriesLength - 1,
      palette: "sequential",
      colors: [color.GRAY, color.LIGHT_GRAY],
    });

    colorChorma.splice(0, 0, color.YELLOW);
    return colorChorma;
  }
}
