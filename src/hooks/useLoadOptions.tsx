import { OptionType } from '@/components/UI/Dropdown/types';
/* eslint-disable no-unused-vars */

let timeoutId: NodeJS.Timer | null = null;

type CallbackType<T, U> = (data: T, inputValue: string) => OptionType<U>[];

function useLoadOptions<T, U>(
  getData: (input?: string) => Promise<T>,
  transform: CallbackType<T, U>
) {
  const loadOptions = async (inputValue: string) => {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }

    return new Promise((resolve) => {
      timeoutId = setTimeout(() => {
        resolve(null);
        timeoutId = null;
      }, 250);
    })
      .then(() => getData(inputValue))
      .then((data) => {
        return transform(data, inputValue);
      });
  };

  return loadOptions;
}

export default useLoadOptions;
