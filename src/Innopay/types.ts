declare global {
  interface Window {
    innopay: Innopay;
    jQuery: any;
  }
}

export type InnopayKeys = {
  PayMethod: string;
  MID: string;
  MerchantKey: string;
  ResultYN: "Y" | "N";
  Moid: string;
};

export type Innopay = {
  goPay: ({
    PayMethod,
    MID,
    MerchantKey,
    GoodsName,
    Amt,
    BuyerName,
    BuyerTel,
    BuyerEmail,
    ResultYN,
    Moid,
    ReturnURL,
  }: {
    PayMethod: string;
    MID: string;
    MerchantKey: string;
    GoodsName: string;
    Amt: string; //가격도 문자열로 들어간다.
    BuyerName: string;
    BuyerTel: string;
    BuyerEmail: string;
    ResultYN: "Y" | "N";
    Moid: string;
    ReturnURL?: string;
  }) => void;
};

export type goPayParams = {
  goodsName: string;
  price: number;
  buyer: {
    name: string;
    phone: string;
    email: string;
  };
};
