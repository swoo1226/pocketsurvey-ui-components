import React from 'react';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const getLineWidth = async (
  ref: React.RefObject<HTMLDivElement>,
): Promise<number> => {
  while (true) {
    const svg = ref.current?.querySelector(
      'svg > g:last-child > path',
    ) as SVGSVGElement;

    const width: number | undefined = svg?.getBBox()?.width;
    if (width) return width;

    // eslint-disable-next-line no-await-in-loop
    await delay(300);
  }
};

export default getLineWidth;
