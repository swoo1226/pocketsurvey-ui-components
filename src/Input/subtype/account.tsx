import React, { useState, useEffect } from "react"
import styled from "styled-components"
import * as Hangul from "hangul-js"
import { banks, stock } from "./account/data"

export type ListType = {
  name: string;
  icon: string;
}[];

const SelectBank = styled.div`
  border: solid 1px gray;
`

const SelectorContainer = styled.div``

const SelectorTab = styled.div<{ isSelected: boolean }>`
  ${(props) => props.isSelected && "font-weight: 700;"}
`

const SelectorList = styled.div``

const BankSelection = styled.div`
  display: flex;
  align-items: center;
`
const BankIcon = styled.img`
  width: 48px;
  height: auto;
  padding-bottom: 4px;
  -webkit-user-drag: none;
`

const BankTitle = styled.p`
  font-weight: 500;
  margin-left: 9px;
`

function Account() {
  const [bankFilter, setBankFilter] = useState<string>("")
  const [filteredBank, setFilteredBank] = useState<ListType>([])
  const [filteredStock, setFilteredStock] = useState<ListType>([])
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [tabIndex, setTabIndex] = useState<number>(0) // 은행, 증권사

  useEffect(() => {
    setFilteredBank(
      bankFilter.length === 0
        ? banks
        : banks.filter((item) =>
          Hangul.search(item.name, bankFilter) >= 0
        )
    )
    setFilteredStock(
      bankFilter.length === 0
        ? stock
        : stock.filter((item) =>
          Hangul.search(item.name, bankFilter) >= 0
        )
    )
  }, [bankFilter])

  return (
    <>
      <SelectBank onClick={() => setIsModalOpen(true)}>은행/증권사</SelectBank>

      {isModalOpen && (
        <SelectorContainer>
          <SelectorTab
            onClick={() => setTabIndex(0)}
            isSelected={tabIndex === 0}
          >
            은행
          </SelectorTab>
          <SelectorTab
            onClick={() => setTabIndex(1)}
            isSelected={tabIndex === 1}
          >
            증권사
          </SelectorTab>
          <input
            value={bankFilter}
            onChange={(event) => setBankFilter(event.target.value)}
            placeholder={"은행/증권사 검색"}
          />

          {tabIndex === 0 && (
            <>
              {filteredBank.length > 0 ? (
                filteredBank.map((item, index: number) => {
                  // eslint-disable-next-line @typescript-eslint/no-var-requires
                  const image = require(`./account/assets/${item.icon}.png`)
                  return (
                    <BankSelection key={index}>
                      <BankIcon src={image}></BankIcon>
                      <BankTitle>{item.name}</BankTitle>
                    </BankSelection>
                  )
                })
              ) : (
                <p>일치하는 은행이 없습니다.</p>
              )}
            </>
          )}

          {tabIndex === 1 && (
            <>
              {filteredStock.length > 0 ? (
                filteredStock.map((item, index: number) => {
                  // eslint-disable-next-line @typescript-eslint/no-var-requires
                  const image = require(`./account/assets/${item.icon}.png`)
                  return (
                    <BankSelection key={index}>
                      <BankIcon src={image}></BankIcon>
                      <BankTitle>{item.name}</BankTitle>
                    </BankSelection>
                  )
                })
              ) : (
                <p>일치하는 증권사가 없습니다.</p>
              )}
            </>
          )}
        </SelectorContainer>
      )}
    </>
  )
}

export default Account
