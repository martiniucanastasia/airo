import { pxToRem } from '@/styles/_common';
import { StylesConfig } from 'react-select';

export const dropdownStyled: StylesConfig = {
  control: (base, state) => {
    return {
      ...base,
      background: state.isFocused ? 'var(--violet-900)' : 'var(--gray-700)',
      borderRadius: 2,
      borderColor: 'transparent',
      borderWidth: 0,
      boxShadow: 'none',
      minHeight: 36,
      fontSize: 'var(--text-base)',
      fontWeight: '400',
      cursor: 'pointer',

      '&:hover': {
        backgroundColor: 'var(--violet-900)',
        borderColor: state.isFocused ? 'transparent' : undefined,
      },
    };
  },

  placeholder: (provided, state) => ({
    ...provided,
    fontFamily: 'var(--font-primary)',
    color: state.isDisabled ? 'var(--gray-800)' : 'var(--white-color-primary)',
  }),

  menu: (base) => ({
    ...base,
    color: 'var(--gray-800)',
    borderRadius: 0,
    marginTop: 0,
    fontWidth: '400',
    fontSize: 'var(--text-base)',
  }),

  menuList: (base) => ({
    ...base,
    padding: 0,
    backgroundColor: 'var(--gray-700)',
  }),

  dropdownIndicator: (provided, state) => ({
    ...provided,
    transition: 'all .2s ease',
    color: state.isDisabled ? 'var(--gray-800)' : 'var(--white-color-primary)',
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : undefined,
  }),
  clearIndicator: (provided) => ({
    ...provided,
    color: 'var(--white-color-primary)',
  }),

  input: (provided) => ({
    ...provided,
    color: 'var(--white-color-primary)',
    fontFamily: 'var(--font-primary)',

    '&:focus': {
      outline: 'none',
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
        color: 'red',
      },
      '&:hover': {
        transition: 'all .2s ease',
        fontWeight: '600',
        color: 'var(--white-color-primary)',
      },
    };
  },
  singleValue: (base) => ({
    ...base,
    fontFamily: 'var(--font-primary)',
    color: 'var(--white-color-primary)',
  }),
  multiValue: (base) => ({
    ...base,
    fontFamily: 'var(--font-primary)',
    color: 'var(--gray-700)',
  }),

  noOptionsMessage: (provided) => ({
    ...provided,
    color: 'var(--white-color-primary)',
    fontFamily: 'var(--font-primary)',
  }),
};

export const useStyles = <T>(status?: string): StylesConfig<T> => {
  return {
    control: (base, state) => ({
      ...base,
      background: state.isFocused ? 'var(--violet-900)' : 'var(--gray-700)',
      borderRadius: 2,
      borderColor: 'transparent',
      borderWidth: 0,
      boxShadow: 'none',
      minHeight: 36,
      fontSize: 'var(--text-base)',
      fontWeight: '400',
      cursor: 'pointer',
      border: status ? `${pxToRem(2)} solid var(--red-color)` : `${pxToRem(2)} solid transparent`,

      '&:hover': {
        backgroundColor: 'var(--violet-900)',
        borderColor: state.isFocused ? 'transparent' : undefined,
      },
    }),

    placeholder: (provided, state) => ({
      ...provided,
      fontFamily: 'var(--font-primary)',
      color: state.isDisabled ? 'var(--gray-800)' : 'var(--white-color-primary)',
    }),

    menu: (base) => ({
      ...base,
      color: 'var(--gray-800)',
      borderRadius: 0,
      marginTop: 0,
      fontWidth: '400',
      fontSize: 'var(--text-base)',
    }),

    menuList: (base) => ({
      ...base,
      padding: 0,
      backgroundColor: 'var(--gray-700)',
    }),

    dropdownIndicator: (provided, state) => ({
      ...provided,
      transition: 'all .2s ease',
      color: state.isDisabled ? 'var(--gray-800)' : 'var(--white-color-primary)',
      transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : undefined,
    }),
    clearIndicator: (provided) => ({
      ...provided,
      color: 'var(--white-color-primary)',
    }),

    input: (provided) => ({
      ...provided,
      color: 'var(--white-color-primary)',
      fontFamily: 'var(--font-primary)',

      '&:focus': {
        outline: 'none',
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
        color: isSelected
          ? 'var(--gray-700)'
          : isFocused
          ? 'var(--white-color-primary)'
          : undefined,
        cursor: 'pointer',
        fontFamily: 'var(--font-primary)',
        '&:active': {
          backgroundColor: 'var(--gray-700)',
          color: 'red',
        },
        '&:hover': {
          transition: 'all .2s ease',
          fontWeight: '600',
          color: 'var(--white-color-primary)',
        },
      };
    },
    singleValue: (base) => ({
      ...base,
      fontFamily: 'var(--font-primary)',
      color: 'var(--white-color-primary)',
    }),
    multiValue: (base) => ({
      ...base,
      fontFamily: 'var(--font-primary)',
      color: 'var(--gray-700)',
    }),

    noOptionsMessage: (provided) => ({
      ...provided,
      color: 'var(--white-color-primary)',
      fontFamily: 'var(--font-primary)',
    }),
    indicatorsContainer: (base) => ({
      ...base,
      padding: '0px',
    }),
  };
};
