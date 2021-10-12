export const isValidFile = (fileName: string) => {
  const extension = new RegExp(
    '(.doc|.docx|.pdf|.xls|.xlsx|.hwp|.ppt|.pptx|.zip|.alz|.rar|.7z)$',
    'i',
  );
  if (extension.test(fileName)) return true;
  return false;
};
