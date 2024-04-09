import { Button, IconButton } from '@/components/UI/Buttons';
import { OptionType } from '@/components/UI/Dropdown/types';
import { pxToRem } from '@/styles/_common';
import { TransformedLocationDataType } from '@/types';
import { StylesConfig } from 'react-select';
import styled from 'styled-components';

export const DeviceSettingsStyled = {
  DeviceSettings: styled.div`
    font-family: var(--font-primary);
    color: var(--white-color-primary);
  `,
  DeviceDescription: styled.div`
    display: flex;
    flex-direction: column;
    gap: ${pxToRem(10)};
  `,
  Public: styled.div`
    padding-top: ${pxToRem(20)};

    display: flex;
    align-items: center;
    gap: ${pxToRem(20)};
  `,
  Title: styled.h2`
    font-size: var(--text-2xl);
    font-weight: 700;
  `,
  Address: styled.div`
    display: flex;
    align-items: center;
    gap: ${pxToRem(6)};
    font-size: var(--text-xs);
  `,
  Comment: styled.div`
    display: flex;
    align-items: center;
    gap: ${pxToRem(6)};
    font-size: var(--text-xs);
  `,
  CommentInputContainer: styled.div`
    flex: 1;
  `,
  EditButton: styled(IconButton)`
    & svg {
      width: ${pxToRem(16)};
      height: ${pxToRem(16)};
    }
    width: ${pxToRem(16)};
    height: ${pxToRem(16)};
    padding: 0;
    min-width: ${pxToRem(16)};
    min-height: ${pxToRem(16)};
  `,
  MetricsTitle: styled.h3`
    font-size: var(--text-base);
    font-weight: 700;
    padding-top: ${pxToRem(20)};
  `,
  Metrics: styled.div`
    display: flex;
    flex-direction: column;
    gap: ${pxToRem(10)};
  `,
  MetricDetails: styled.div`
    display: flex;
    flex-direction: column;
    padding: ${pxToRem(16)};

    button {
      margin: 0 auto;
    }
  `,
  MetricsValue: styled.div`
    padding-bottom: ${pxToRem(10)};
  `,
  ButtonsGroup: styled.div`
    display: flex;
    gap: ${pxToRem(5)};

    padding-top: ${pxToRem(40)};
  `,
  RemoveButtonContainer: styled.div`
    margin: 0 auto;
  `,
  RemoveButton: styled(Button)`
    display: flex;
    align-items: center;
    padding: 0;
    margin-top: ${pxToRem(10)};
  `,
};

export const LocationDropdownStyled: StylesConfig<
  OptionType<TransformedLocationDataType>,
  boolean
> = {
  container: (base, state) => ({
    ...base,
    width: `100px`,
    flex: 1,
    backgroundColor: state.isDisabled ? undefined : 'var(--gray-700)',
    borderRadius: `${pxToRem(2)}`,
    padding: `0 ${pxToRem(12)}`,
    border: `${pxToRem(2)} solid`,
    borderColor: state.isFocused ? 'var(--dark-purple-color)' : 'transparent',
  }),
  singleValue: (base) => ({
    ...base,
    color: 'var(--gray-600)',
    margin: '0',
  }),
  control: (base, state) => ({
    ...base,
    background: 'transparent',
    borderRadius: 'none',
    borderColor: 'transparent',
    boxShadow: 'none',
    height: 30,
    minHeight: 30,
    fontSize: 'var(--text-sm)',
    fontWeight: '400',
    cursor: 'pointer',
    width: '100%',
    margin: '0',

    '&:hover': {
      borderColor: state.isFocused ? 'transparent' : undefined,
    },
  }),
  option: (styles, { isSelected, isFocused }) => {
    return {
      ...styles,
      backgroundColor: isSelected
        ? 'var(--gray-700)'
        : isFocused
        ? 'var(--primary-color)'
        : undefined,
      color: isSelected ? 'var(--gray-700)' : isFocused ? 'var(--white-color-primary)' : undefined,
      cursor: 'pointer',
      fontFamily: 'var(--font-primary)',
      '&:active': {
        backgroundColor: 'var(--gray-700)',
      },

      '&:hover': {
        transition: 'all .2s ease',
        color: 'var(--white-color-primary)',
        backgroundColor: 'var(--primary-color)',
      },
    };
  },
  dropdownIndicator: () => ({
    display: 'none',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  clearIndicator: (provided) => ({
    ...provided,
    color: 'var(--white-color-primary)',
    padding: '0px',
  }),
  menu: (base) => ({
    ...base,
    color: 'var(--gray-800)',
    borderRadius: 0,
    marginTop: '0px',
    fontWidth: '400',
    fontSize: 'var(--text-base)',
  }),
  menuList: (base) => ({
    ...base,
    backgroundColor: 'var(--gray-700)',

    '& :nth-child(n + 6)': {
      display: 'none',
    },
  }),
  valueContainer: (base) => ({
    ...base,
    padding: '0',
  }),
};
