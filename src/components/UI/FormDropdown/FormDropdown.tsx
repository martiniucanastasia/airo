import { DefaultControlHookFormNames, DefaultControlHookFormValues } from '@/types';
import { Control, Controller, RegisterOptions } from 'react-hook-form';
import { GroupBase, OptionsOrGroups } from 'react-select';
import { Dropdown } from '../Dropdown/Dropdown';
import { OptionType } from '../Dropdown/types';

type Props<T> = {
  name: DefaultControlHookFormNames;
  control: Control<DefaultControlHookFormValues>;
  options: OptionsOrGroups<OptionType<T>, GroupBase<OptionType<T>>>;
  // eslint-disable-next-line no-unused-vars
  setOnChangeValue: (value: OptionType<T>[] | null) => void;
  status: string;
  placeholder: string;
  rules: RegisterOptions;
  isMulti: boolean;
};

export function FormDropdown<T>({
  control,
  name,
  options,
  setOnChangeValue,
  status,
  placeholder,
  rules,
  isMulti,
}: Props<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Dropdown<T>
          placeholder={placeholder}
          options={options}
          onChange={(value) => {
            setOnChangeValue(value as OptionType<T>[]); // ? make more reusable
            field.onChange(value);
          }}
          name={field.name}
          status={status}
          isMulti={isMulti}
        />
      )}
      rules={rules}
    />
  );
}

export default FormDropdown;
