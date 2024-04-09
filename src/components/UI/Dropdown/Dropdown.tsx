import Select, { GroupBase, Props } from 'react-select';
import { useStyles } from './styles/dropdownStyles';
import { OptionType } from './types';

type CustomProps = {
  status?: string;
};

export function Dropdown<T>({
  styles: stylesOverride,
  status,
  noOptionsMessage = () => '',
  ...props
}: Props<OptionType<T>, boolean, GroupBase<OptionType<T>>> & CustomProps) {
  const styles = useStyles<OptionType<T>>(status);

  return (
    <>
      <Select
        {...props}
        styles={{
          ...styles,
          ...stylesOverride,
        }}
        isClearable={true}
        noOptionsMessage={noOptionsMessage}
      />
    </>
  );
}
