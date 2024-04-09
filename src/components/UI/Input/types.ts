import { Sizes, Statuses, Variants } from '@/types';
import { UseFormRegisterReturn } from 'react-hook-form';

export interface InputType {
  placeholder: string;
  label?: JSX.Element;
  iconLeft?: JSX.Element;
  iconRight?: JSX.Element;
  status?: Statuses;
  variant?: Variants;
  size?: Sizes;
  value?: string;
  // eslint-disable-next-line no-unused-vars
  onChange?: (value: string) => void;
  registerValue?: UseFormRegisterReturn<string>;
  isActive?: boolean;
}
