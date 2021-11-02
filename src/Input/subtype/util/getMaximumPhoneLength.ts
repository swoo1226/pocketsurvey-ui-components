const getMaximumPhoneLength = (phoneNumer: string): number => {
  const start = phoneNumer.substr(0, 2);
  if (['01', '07', '08'].includes(start)) return 13;
  return 12;
};

export default getMaximumPhoneLength;
