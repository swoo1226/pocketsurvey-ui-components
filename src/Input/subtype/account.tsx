import React from "react"
import styled from "styled-components"
import * as logoList from "./assets"

const BankSelection = styled.div`
  display: flex;
  align-items: center;
`
const BankIcon = styled.img`
  width: 48px;
  height: 48px;
  padding-bottom: 4px;
  -webkit-user-drag: none;
`

const BankTitle = styled.p`
  font-weight: 500;
  margin-left: 9px;
`

function Account() {
  const bankMap = new Map<string, string>([
    ["카카오뱅크", "kakaobank.png"],
    ["시티은행", "citi.png"],
    ["기업은행", "ibk.png"],
    ["국민은행", "kb.png"],
    ["케이뱅크", "kbank.png"],
    ["신한은행", "shinhan.png"],
    ["농협은행", "nh.png"],
    ["산업은행", "kdb.png"],
    ["우리은행", "kakaobank.png"],
  ])

  const keys = Array.from(bankMap.keys())

  return (
    <>
      {keys.map((key: string, index: number) => {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const image = require(`./assets/${bankMap.get(key)}`)
        return (
          <BankSelection key={index}>
            <BankIcon src={image}></BankIcon>
            <BankTitle>{key}</BankTitle>
          </BankSelection>
        )
      })}
    </>
  )
}

export default Account
