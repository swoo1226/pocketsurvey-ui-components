import { initJquery, initInnopay } from "./lib/cdn"
import { InnopayKeys, goPayParams } from "./types"

const INNOPAY_KEYS: InnopayKeys = {
  PayMethod: "CARD",
  MID: "pgearly01m",
  MerchantKey:
    "/GWdtjthEvFh9VpfON60UJ2/0Qf8K8aWJfVvLBZbdFTVyzdIG/UyXfi13Fog1eAQOkLMUaGrAmKjAqhi3vbiAg==",
  ResultYN: "Y",
  Moid: "",
}

export const goPay = async ({ goodsName, price, buyer }: goPayParams) => {
  await initJquery()
  await initInnopay()
  //TODO: price 값 검증
  //TODO: 휴대전화 번호 및 이메일 형식 검증
  
  window.innopay.goPay({
    PayMethod: INNOPAY_KEYS.PayMethod,
    MID: INNOPAY_KEYS.MID,
    MerchantKey: INNOPAY_KEYS.MerchantKey,
    GoodsName: goodsName,
    Amt: price.toString(),
    BuyerName: buyer.name,
    BuyerTel: buyer.phone,
    BuyerEmail: buyer.email,
    ResultYN: "Y",
    Moid: INNOPAY_KEYS.Moid
  })
}
