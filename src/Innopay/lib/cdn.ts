/* eslint-disable no-constant-condition */

const delay = (ms: number) => {
  return new Promise((_) => setTimeout(_, ms))
}

const MAX_DOM_FETCH_COUNT = 100

export const initJquery = async () => {
  if (window.jQuery) {
    return true
  } else {
    const scriptJquery = document.createElement("script")
    scriptJquery.src = "https://code.jquery.com/jquery-1.12.4.min.js"
    document.body.appendChild(scriptJquery)
    for (let i = 0; i < MAX_DOM_FETCH_COUNT; i += 1) {
      if (window.jQuery) {
        break
      }
      await delay(100)
    }
  }
}
export const initInnopay = async () => {
  if (window.innopay) {
    return true
  } else {
    const scriptInnopay = document.createElement("script")
    scriptInnopay.src = "https://pg.innopay.co.kr/ipay/js/innopay-2.0.js"
    document.body.appendChild(scriptInnopay)
    for (let i = 0; i < MAX_DOM_FETCH_COUNT; i += 1) {
      if (window.innopay) {
        break
      }
      await delay(100)
    }
  }
}
