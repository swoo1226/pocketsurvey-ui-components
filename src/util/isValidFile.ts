export const isValidFile = (fileName: string) => {
  const extension = new RegExp(
    '(.doc|.docx|.pdf|.xls|.xlsx|.hwp|.ppt|.pptx|.zip|.alz|.rar|.7z)$',
    'i',
  );
  if (extension.test(fileName)) return true;
  return false;
};

export const isValidURL = (
  fileName: string,
  type: 'image' | 'video',
): boolean => {
  if (type === 'image') {
    const regex = new RegExp('(.png|.jpg|.jpeg)', 'i');
    if (regex.test(fileName)) return true;
  }

  if (type === 'video') {
    const extension = new RegExp('.mp4', 'i');
    if (extension.test(fileName)) return true;
  }

  return false;
};
