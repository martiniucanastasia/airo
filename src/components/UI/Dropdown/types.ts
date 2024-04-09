/* eslint-disable no-unused-vars */
import { UserDeviceType } from '@/types';
import { GroupBase, MultiValue, SingleValue, StylesConfig } from 'react-select';

export type OptionType<T> = { value: T; label: string };

export interface DropdownProps {
  options: readonly (OptionType<UserDeviceType>[] | GroupBase<OptionType<UserDeviceType>[]>)[];

  isMulti?: boolean;
  isDisabled?: boolean;
  selected?: OptionType<string>;
  setSelected(
    value: SingleValue<OptionType<UserDeviceType>[]> | MultiValue<OptionType<UserDeviceType>[]>
  ): void;
  styles?: StylesConfig<
    OptionType<UserDeviceType>[],
    boolean,
    GroupBase<OptionType<UserDeviceType>[]>
  >;

  placeholder: string;
}

export interface AsyncDropdownProps<T> {
  isMulti?: boolean;
  isDisabled?: boolean;
  selected?: OptionType<T>;
  styles?: StylesConfig<OptionType<T>>;
  placeholder: string;
  loadOptions: (inputValue: string, callback: (options: OptionType<T>[]) => void) => void;
  onChange: (newValue: SingleValue<OptionType<T>> | MultiValue<OptionType<T>>) => void;
  name?: string;
}

export type onChangeType<T> = (
  newValue: SingleValue<OptionType<T>> | MultiValue<OptionType<T>>
) => void;
