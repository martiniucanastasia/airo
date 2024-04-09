/* eslint-disable no-unused-vars */
import { Sizes, Variants } from '@/types';
import { MouseEventHandler } from 'react';

export interface BaseButtonProps {
  size?: Sizes;
  variant?: Variants;
  fluid?: boolean;
  onClick?: (() => void) | MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  className?: string;
}

export type ButtonProps = BaseButtonProps;

export type IconButtonProps = BaseButtonProps;
