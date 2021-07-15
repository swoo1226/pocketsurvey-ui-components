import React, { useState, useEffect } from "react"
import styled from "styled-components"
import * as Hangul from "hangul-js"
import { banks, stock } from "./account/data"

export type ListType = {
  name: string;
  icon: string;
}[];

const SelectBank = styled.div`
  width: 100px;
  border: solid 1px gray;
`

const SelectorContainer = styled.div``

const SelectorTab = styled.div<{ isSelected: boolean }>`
  ${(props) => props.isSelected && "font-weight: 700;"}
`

const SelectorList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 430px;
  max-height: 400px;
  justify-content: flex-start;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
    height: 6px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(195, 195, 195, 0.75);
    -webkit-box-shadow: 0 0 1px rgba(195, 195, 195, 0.75);
  }
`

const AccountInput = styled.input`
  &:disabled {
    background: #ccc;
  }
`

const BankSelection = styled.div`
  width: 200px;
  height: 50px;
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

type AccountPropsType = {
  value: string;
  onChange: (value: string) => void;
};
function Account({ value, onChange }: AccountPropsType) {
  const [select, setSelect] = useState<string>("")
  const [accountNumber, setAccountNumber] = useState<string>("")
  const [bankFilter, setBankFilter] = useState<string>("")
  const [filteredBank, setFilteredBank] = useState<ListType>([])
  const [filteredStock, setFilteredStock] = useState<ListType>([])
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [tabIndex, setTabIndex] = useState<number>(0) // 은행, 증권사

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
    onChange(`${select} ${accountNumber}`)
  }, [select, accountNumber])

  return (
    <>
      <SelectBank onClick={() => setIsModalOpen(!isModalOpen)}>
        {select || "은행/증권사"}
      </SelectBank>

      <AccountInput
        disabled={select === "" ? true : false}
        value={accountNumber} 
        onChange={(event) => {
          setAccountNumber(event.target.value.replace(/[^0-9-]/gi, ""))
        }}
      ></AccountInput>

      {isModalOpen && (
        <SelectorContainer>
          <input
            value={bankFilter}
            onChange={(event) => setBankFilter(event.target.value)}
            placeholder={"은행/증권사 검색"}
          />
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

          {tabIndex === 0 && (
            <SelectorList>
              {filteredBank.length > 0 ? (
                filteredBank.map((item, index: number) => {
                  // eslint-disable-next-line @typescript-eslint/no-var-requires
                  const image = require(`./account/assets/${item.icon}.png`)
                  return (
                    <BankSelection
                      key={index}
                      onClick={(event) => {
                        setSelect(item.name)
                        setIsModalOpen(false)
                      }}
                    >
                      <BankIcon src={image}></BankIcon>
                      <BankTitle>{item.name}</BankTitle>
                    </BankSelection>
                  )
                })
              ) : (
                <p>일치하는 은행이 없습니다.</p>
              )}
            </SelectorList>
          )}

          {tabIndex === 1 && (
            <SelectorList>
              {filteredStock.length > 0 ? (
                filteredStock.map((item, index: number) => {
                  // eslint-disable-next-line @typescript-eslint/no-var-requires
                  const image = require(`./account/assets/${item.icon}.png`)
                  return (
                    <BankSelection
                      key={index}
                      onClick={(event) => {
                        setSelect(item.name)
                        setIsModalOpen(false)
                      }}
                    >
                      <BankIcon src={image}></BankIcon>
                      <BankTitle>{item.name}</BankTitle>
                    </BankSelection>
                  )
                })
              ) : (
                <p>일치하는 증권사가 없습니다.</p>
              )}
            </SelectorList>
          )}
        </SelectorContainer>
      )}
    </>
  )
}

export default Account
