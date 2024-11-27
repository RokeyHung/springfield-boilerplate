import Clipboard from '@react-native-clipboard/clipboard';
// eslint-disable-next-line import/no-extraneous-dependencies
import Toast from 'react-native-simple-toast';

export const showToast = (toast: string) => {
  Toast.showWithGravity(toast, 2000, Toast.BOTTOM);
};

export const copyToClipboard = (
  copiedText: string,
  toast = 'Copied to Clipboard',
) => {
  Clipboard.setString(copiedText);
  showToast(toast);
};

export function capitalizeFirstLetter(text?: string) {
  if (typeof text !== 'string' || text.length === 0) {
    return text;
  }
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export const replaceString = (
  inputString: string | undefined,
  replacements: Replacement[],
): string => {
  if (!inputString) return '';
  let resultString: string = inputString;
  replacements.forEach(({ replaceValue, searchValue }) => {
    resultString = resultString.replaceAll(
      new RegExp(searchValue, 'g'),
      replaceValue,
    );
  });
  return resultString;
};
