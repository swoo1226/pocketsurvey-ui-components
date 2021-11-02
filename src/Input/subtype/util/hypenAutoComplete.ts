const getTextFromRange = (text: string, ranges: number[][]) =>
  ranges.map((range) => {
    if (range.length === 1) return text.substr(range[0]);
    return text.substr(range[0], range[1]);
  });

const splitPhoneNumber = (phoneNumer: string) => {
  if (phoneNumer.length <= 3) return [phoneNumer];
  const startIndex = phoneNumer.substr(0, 2) === '02' ? 2 : 3;
  // 02 (서울)만 2자리고 나머지 010, 070, 다른 지역번호는 3자리
  const length = phoneNumer.length - startIndex;

  if (length <= 4)
    return getTextFromRange(phoneNumer, [[0, startIndex], [startIndex]]);

  if (length === 7)
    return getTextFromRange(phoneNumer, [
      [0, startIndex],
      [startIndex, 3],
      [startIndex + 3],
    ]);

  if (length <= 8)
    return getTextFromRange(phoneNumer, [
      [0, startIndex],
      [startIndex, 4],
      [startIndex + 4],
    ]);

  return [phoneNumer];
};

const hypenAutoComplete = (phoneNumer: string): string =>
  splitPhoneNumber(phoneNumer).join('-');

export default hypenAutoComplete;
