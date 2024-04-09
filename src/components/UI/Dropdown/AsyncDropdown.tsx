import { GroupBase } from 'react-select';
import AsyncSelect, { AsyncProps } from 'react-select/async';
import { useStyles } from './styles/dropdownStyles';
import { OptionType } from './types';

type Props = {
  status?: string;
};

export function AsyncDropdown<T>({
  styles: stylesOverride,
  status,
  ...props
}: AsyncProps<OptionType<T>, boolean, GroupBase<OptionType<T>>> & Props) {
  const styles = useStyles<OptionType<T>>(status);

  return (
    <>
      <AsyncSelect
        {...props}
        styles={{
          ...styles,
          ...stylesOverride,
        }}
        isClearable={true}
        noOptionsMessage={(obj) => (obj.inputValue ? 'No results' : null)}
      />
    </>
  );
}
