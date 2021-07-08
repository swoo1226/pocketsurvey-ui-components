import React, { useState, useEffect } from "react"
import styled from "styled-components"

const AutocompleteWrapper = styled.div``

const AutocompleteUl = styled.ul<{ selected: boolean }>`
  cursor: pointer;
  ${(props) => props.selected && "background-color: #989898;"}
`

const EMAIL_LIST = [
  "@daum.net",
  "@gmail.com",
  "@hanmail.net",
  "@kakao.com",
  "@nate.com",
  "@naver.com",
]

const emailAutoComplete = (
  selected: number | null,
  setSelected: React.Dispatch<React.SetStateAction<number | null>>,
  value: string,
  setValue: React.Dispatch<React.SetStateAction<string>>,
  setShowAutocomplete: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const atSignIndex = value.lastIndexOf("@")
  if (atSignIndex === -1) {
    setShowAutocomplete(false)
    setSelected(null)
    return null
  }
  if (atSignIndex) {
    console.log("if (atSignIndex) {")
    const afterAtSign = value.substring(atSignIndex)
    const autoCompleteEmail = EMAIL_LIST.filter(
      (email) => email.includes(afterAtSign) && email !== afterAtSign
    )
    if (autoCompleteEmail.length > 0) {
      setShowAutocomplete(true)
      return (
        <AutocompleteWrapper onMouseLeave={() => setSelected(null)}>
          {autoCompleteEmail.map((email: string, index: number) => (
            <AutocompleteUl
              selected={selected === index}
              onMouseEnter={() => setSelected(index)}
              key={index}
              onClick={() =>
                setValue(`${value}${email.replace(afterAtSign, "")}`)
              }
              // onKeyDown={(event) => {
              //   if (event.key === "Enter" || event.keyCode == 32) {
              //     setValue(`${value}${email.replace(afterAtSign, "")}`)
              //   }
              // }}
            >
              <b>{value}</b>
              {email.replace(afterAtSign, "")}
            </AutocompleteUl>
          ))}
        </AutocompleteWrapper>
      )
    }
  }
  setShowAutocomplete(false)
  setSelected(null)
  return null
}

const upDownAutoComplete = (
  selected: number | null,
  setSelected: React.Dispatch<React.SetStateAction<number | null>>,
  key: "ArrowUp" | "ArrowDown",
  showAutocomplete: boolean
) => {
  if (showAutocomplete === false) return
  const lastIndex = EMAIL_LIST.length - 1
  if (key === "ArrowUp") {
    if (selected === null || selected === 0) {
      //마지막으로 가는 케이스
      setSelected(lastIndex)
    } else {
      //하나 올라가는 케이스
      setSelected(selected - 1)
    }
  }

  if (key === "ArrowDown") {
    if (selected === null || lastIndex === selected) {
      //제일 위로 가는 케이스
      setSelected(0)
    } else {
      //하나 내려가는 케이스
      setSelected(selected + 1)
    }
  }
}

function Email(): JSX.Element {
  const [value, setValue] = useState<string>("")
  const [selected, setSelected] = useState<number | null>(null)
  const [showAutocomplete, setShowAutocomplete] = useState<boolean>(true)

  useEffect(() => {
    console.log("showAutocomplete:", showAutocomplete)
  }, [showAutocomplete])

  return (
    <>
      <input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "ArrowUp" || event.key === "ArrowDown") {
            upDownAutoComplete(
              selected,
              setSelected,
              event.key,
              showAutocomplete
            )
          }
        }}
      ></input>
      {showAutocomplete &&
        emailAutoComplete(
          selected,
          setSelected,
          value,
          setValue,
          setShowAutocomplete
        )}
    </>
  )
}

export default Email
