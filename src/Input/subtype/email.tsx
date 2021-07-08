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

const MAX_VIEW_LIMIT = 5

function Email(): JSX.Element {
  const [value, setValue] = useState<string>("")
  const [selected, setSelected] = useState<number | null>(null)
  const [autocomplete, setAutocomplete] = useState<string[]>(EMAIL_LIST)

  useEffect(() => {
    const atSignIndex = value.lastIndexOf("@")
    if (atSignIndex === -1) {
      setSelected(null)
      setAutocomplete([])
      return
    }
    if (atSignIndex) {
      console.log("if (atSignIndex) {")
      const afterAtSign = value.substring(atSignIndex)
      const autoCompleteEmail = EMAIL_LIST.filter(
        (email) => email.includes(afterAtSign) && email !== afterAtSign
      )
      setAutocomplete(autoCompleteEmail)
      return
    }
    setSelected(null)
    setAutocomplete([])
  }, [value])

  useEffect(() => {
    console.log("selected:", selected)
  }, [selected])

  const upDownAutoComplete = (key: "ArrowUp" | "ArrowDown") => {
    if(autocomplete.length === 0){
      setSelected(null)
      return 
    }
    const lastIndex =
      autocomplete.length - 1 >= MAX_VIEW_LIMIT - 1
        ? MAX_VIEW_LIMIT - 1
        : autocomplete.length - 1

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

  return (
    <>
      <input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "ArrowUp" || event.key === "ArrowDown") {
            upDownAutoComplete(event.key)
          }
          if (event.key === "Enter" || event.keyCode == 32) {
            if (
              autocomplete.length > 0 &&
              selected !== null &&
              autocomplete.length > selected
            ) {
              const afterAtSign = value.substring(value.lastIndexOf("@"))
              setValue(
                `${value}${autocomplete[selected].replace(afterAtSign, "")}`
              )
              setSelected(null)
              setAutocomplete([])
            }
          }
        }}
      ></input>
      {autocomplete.length > 0 && (
        <AutocompleteWrapper onMouseLeave={() => setSelected(null)}>
          {autocomplete.map((email: string, index: number) => {
            if (index >= MAX_VIEW_LIMIT) return null
            const afterAtSign = value.substring(value.lastIndexOf("@"))
            return (
              <AutocompleteUl
                selected={selected === index}
                onMouseEnter={() => setSelected(index)}
                key={index}
                onClick={() =>
                  setValue(`${value}${email.replace(afterAtSign, "")}`)
                }
              >
                <b>{value}</b>
                {email.replace(afterAtSign, "")}
              </AutocompleteUl>
            )
          })}
        </AutocompleteWrapper>
      )}
    </>
  )
}

export default Email
