/* eslint-disable no-unused-vars */
import { DefaultControlHookFormNames, DefaultControlHookFormValues } from '@/types';
import { Control, Controller, RegisterOptions } from 'react-hook-form';
import { GroupBase, SingleValue, StylesConfig } from 'react-select';
import { AsyncDropdown } from '../Dropdown/AsyncDropdown';
import { useStyles } from '../Dropdown/styles/dropdownStyles';
import { OptionType } from '../Dropdown/types';

type Props<T> = {
  name: DefaultControlHookFormNames;
  control: Control<DefaultControlHookFormValues>;
  loadOptions: (inputValue: string, callback: (options: OptionType<T>[]) => void) => void;
  setOnChangeValue?: (value: OptionType<T> | null) => void;
  status: string;
  placeholder: string;
  rules: RegisterOptions;
  styles?: StylesConfig<OptionType<T>, boolean, GroupBase<OptionType<T>>> | undefined;
};

export function FormAsyncDropdown<T>({
  control,
  name,
  loadOptions,
  setOnChangeValue,
  status,
  placeholder,
  rules,
  styles: stylesOverride,
}: Props<T>) {
  const styles = useStyles<OptionType<T>>(status);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <AsyncDropdown<T>
          placeholder={placeholder}
          loadOptions={loadOptions}
          onChange={(value) => {
            if (setOnChangeValue) setOnChangeValue(value as SingleValue<OptionType<T>>);
            field.onChange(value);
          }}
          name={field.name}
          status={status}
          styles={{
            ...styles,
            ...stylesOverride,
          }}
        />
      )}
      rules={rules}
    />
  );
}

export default FormAsyncDropdown;
