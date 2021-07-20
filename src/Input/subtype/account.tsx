import * as Hangul from "hangul-js"

import React, { useEffect, useState } from "react"
import { banks, stock } from "./account/data"

import DropDown from "../../DropDown/DropDown"
import Icon1 from "./account/assets/1.png"
import Icon10 from "./account/assets/10.png"
import Icon11 from "./account/assets/11.png"
import Icon13 from "./account/assets/13.png"
import Icon14 from "./account/assets/14.png"
import Icon15 from "./account/assets/15.png"
import Icon16 from "./account/assets/16.png"
import Icon17 from "./account/assets/17.png"
import Icon18 from "./account/assets/18.png"
import Icon19 from "./account/assets/19.png"
import Icon2 from "./account/assets/2.png"
import Icon20 from "./account/assets/20.png"
import Icon21 from "./account/assets/21.png"
import Icon22 from "./account/assets/22.png"
import Icon23 from "./account/assets/23.png"
import Icon24 from "./account/assets/24.png"
import Icon25 from "./account/assets/25.png"
import Icon26 from "./account/assets/26.png"
import Icon27 from "./account/assets/27.png"
import Icon28 from "./account/assets/28.png"
import Icon29 from "./account/assets/29.png"
import Icon3 from "./account/assets/3.png"
import Icon4 from "./account/assets/4.png"
import Icon5 from "./account/assets/5.png"
import Icon6 from "./account/assets/6.png"
import Icon7 from "./account/assets/7.png"
import Icon8 from "./account/assets/8.png"
import Iconamerica from "./account/assets/america.png"
import Iconbnk from "./account/assets/bnk.png"
import Iconbnp from "./account/assets/bnp.png"
import Iconboc from "./account/assets/boc.png"
import Iconccb from "./account/assets/ccb.png"
import Iconciti from "./account/assets/citi.png"
import Icondeutsche from "./account/assets/deutsche.png"
import Icondgb from "./account/assets/dgb.png"
import Iconepost from "./account/assets/epost.png"
import Iconhana from "./account/assets/hana.png"
import Iconhsbc from "./account/assets/hsbc.png"
import Iconibk from "./account/assets/ibk.png"
import Iconjp from "./account/assets/jp.png"
import Iconkakaobank from "./account/assets/kakaobank.png"
import Iconkb from "./account/assets/kb.png"
import Iconkbank from "./account/assets/kbank.png"
import Iconkdb from "./account/assets/kdb.png"
import Iconkfcc from "./account/assets/kfcc.png"
import Iconkjbank from "./account/assets/kjbank.png"
import Iconnacufok from "./account/assets/nacufok.png"
import Iconnh from "./account/assets/nh.png"
import Iconsb from "./account/assets/sb.png"
import Iconsc from "./account/assets/sc.png"
import Iconsh from "./account/assets/sh.png"
import Iconshinhan from "./account/assets/shinhan.png"
import Iconsj from "./account/assets/sj.png"
import Iconwoori from "./account/assets/woori.png"
import Input from "../Input"
import styled from "styled-components"

const switchIcon = (iconName: string) => {
  switch (iconName) {
  case "nh":
    return Iconnh
  case "epost":
    return Iconepost
  case "bnp":
    return Iconbnp
  case "boc":
    return Iconboc
  case "8":
    return Icon8
  case "nacufok":
    return Iconnacufok
  case "14":
    return Icon14
  case "28":
    return Icon28
  case "29":
    return Icon29
  case "hana":
    return Iconhana
  case "15":
    return Icon15
  case "sc":
    return Iconsc
  case "ccb":
    return Iconccb
  case "17":
    return Icon17
  case "16":
    return Icon16
  case "sb":
    return Iconsb
  case "kbank":
    return Iconkbank
  case "13":
    return Icon13
  case "citi":
    return Iconciti
  case "jp":
    return Iconjp
  case "11":
    return Icon11
  case "ibk":
    return Iconibk
  case "10":
    return Icon10
  case "kb":
    return Iconkb
  case "21":
    return Icon21
  case "20":
    return Icon20
  case "sh":
    return Iconsh
  case "sj":
    return Iconsj
  case "22":
    return Icon22
  case "23":
    return Icon23
  case "kfcc":
    return Iconkfcc
  case "27":
    return Icon27
  case "woori":
    return Iconwoori
  case "26":
    return Icon26
  case "18":
    return Icon18
  case "24":
    return Icon24
  case "america":
    return Iconamerica
  case "25":
    return Icon25
  case "19":
    return Icon19
  case "dgb":
    return Icondgb
  case "4":
    return Icon4
  case "kjbank":
    return Iconkjbank
  case "5":
    return Icon5
  case "hsbc":
    return Iconhsbc
  case "7":
    return Icon7
  case "deutsche":
    return Icondeutsche
  case "6":
    return Icon6
  case "kakaobank":
    return Iconkakaobank
  case "2":
    return Icon2
  case "bnk":
    return Iconbnk
  case "3":
    return Icon3
  case "1":
    return Icon1
  case "shinhan":
    return Iconshinhan
  case "kdb":
    return Iconkdb
  default:
    return ""
  }
}

const Wrapper = styled.div<{ isMobile?: boolean }>`
  display: flex;
  justify-content: space-between;
  ${(props) => (props.isMobile ? "flex-direction: column;" : "width: 445px;")}
`

const CustomDropDown = styled(DropDown)<{ isMobile?: boolean }>`
  ${(props) => props.isMobile && "margin-bottom: 10px;"}
`

export type ListType = {
  name: string;
  icon: string;
}[];

type AccountPropsType = {
  value: string;
  onChange: (value: string) => void;
  isMobile?: boolean;
};

function Account({ value, onChange, isMobile }: AccountPropsType) {
  const [select, setSelect] = useState<string>("")
  const [dropdownSelect, setDropdownSelect] = useState<number | null>(null)
  const [accountNumber, setAccountNumber] = useState<string>("")
  const [bankFilter, setBankFilter] = useState<string>("")
  const [filteredBank, setFilteredBank] = useState<ListType>([])
  const [filteredStock, setFilteredStock] = useState<ListType>([])
  const [errorMessage, setErrorMessage] = useState<string>("")

  useEffect(() => {
    setFilteredBank(
      bankFilter.length === 0
        ? banks
        : banks.filter((item) => Hangul.search(item.name, bankFilter) >= 0)
    )
    setFilteredStock(
      bankFilter.length === 0
        ? stock
        : stock.filter((item) => Hangul.search(item.name, bankFilter) >= 0)
    )
  }, [bankFilter])

  useEffect(() => {
    if (select && accountNumber) {
      onChange(`${select} ${accountNumber.replace(/[^0-9]/g, "")}`)
    }
  }, [select, accountNumber])

  return (
    <Wrapper isMobile={isMobile}>
      <CustomDropDown
        isMobile={isMobile}
        listMaxHeight={428}
        placeholder={"은행/증권사 선택"}
        height={34}
        list={[
          {
            selectionName: "은행",
            isHr: true,
          },
          ...filteredBank.map((item) => {
            return {
              selectionName: item.name,
              png: switchIcon(item.icon),
            }
          }),
          {
            selectionName: "증권사",
            isHr: true,
          },
          ...filteredStock.map((item) => {
            return {
              selectionName: item.name,
              png: switchIcon(item.icon),
            }
          }),
        ]}
        disable={false}
        selected={dropdownSelect}
        themeColor={{
          mainColor: dropdownSelect !== null ? "#FAC62D" : "#DFDEDD",
          subColor: "#fef4ce",
        }}
        onItemClick={(index: number) => {
          setDropdownSelect(index)
          const list = [
            ...filteredBank.map((item) => {
              return {
                selectionName: item.name,
                png: switchIcon(item.icon),
              }
            }),
            ...filteredStock.map((item) => {
              return {
                selectionName: item.name,
                png: switchIcon(item.icon),
              }
            }),
          ]
          setSelect(list[index].selectionName)
        }}
        iconColor="#FAC62D"
        fontSize={14}
        pngImageCropCircle={true}
      />

      <Input
        isError={errorMessage ? true : false}
        errorMessage={errorMessage}
        placeholder="계좌번호를 입력해주세요."
        mode="basic"
        inputMode="decimal"
        fullWidthMode={isMobile ? true : false}
        width={isMobile ? 300 : 230}
        borderColor={"#FAC609"}
        disabled={select === "" ? true : false}
        value={accountNumber}
        fontSize={14}
        onChange={(innerValue: string) => {
          if (/^[0-9-]*$/.test(innerValue)) {
            setAccountNumber(innerValue)
            setErrorMessage("")
          } else {
            setErrorMessage("숫자와 하이픈(-)만 입력 가능합니다.")
          }
        }}
      ></Input>
    </Wrapper>
  )
}

export default Account
