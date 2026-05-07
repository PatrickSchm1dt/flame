import { urlParser } from '.';

export const redirectUrl = (url: string, sameTab: boolean) => {
  const parsedUrl = urlParser(url)[1];

  if (sameTab) {
    window.open(parsedUrl, '_top');
  } else {
    window.open(parsedUrl);
  }
};
