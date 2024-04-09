import { pxToRem } from '@/styles/_common';
import { UserDeviceType } from '@/types';
import { StylesConfig } from 'react-select';
import styled from 'styled-components';
import { IconButton } from '../UI/Buttons';
import { OptionType } from '../UI/Dropdown/types';

export const SearchButton = styled(IconButton)`
  color: var(--grey-color-primary);
`;

const InputStyled = {
  Header: styled.header`
    background-color: var(--secondary-color);
  `,
  HeaderContainer: styled.div`
    display: flex;
    align-items: center;

    padding: ${pxToRem(10)} var(--space-s);

    font-family: var(--font-primary);
    font-size: var(--text-sm);

    position: relative;
    z-index: 2;
  `,
  Logo: styled.div``,
  LogoLabel: styled.span`
    color: var(--light-grey-color-variant-2);
    padding-left: ${pxToRem(6)};
  `,
  SwitchLabel: styled.span`
    color: var(--grey-color-secondary);
    font-weight: 600;
  `,
  Search: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
  `,
  Clasterization: styled.div`
    display: flex;
    gap: ${pxToRem(10)};
    padding-right: ${pxToRem(15)};
  `,
  InputContainer: styled.form`
    max-width: ${pxToRem(400)};
    width: 100%;
    height: ${pxToRem(30)};

    display: flex;
    align-items: center;

    border: ${pxToRem(1)} solid var(--grey-color-primary);
    border-radius: ${pxToRem(17)};

    padding: 0 ${pxToRem(5)};
  `,
  UserContainer: styled.div`
    display: flex;
    gap: ${pxToRem(18)};
  `,
  NotificationContainer: styled.div`
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;
  `,
  NotificationActive: styled.div`
    background-color: var(--dark-red-color);
    width: ${pxToRem(6)};
    height: ${pxToRem(6)};
    border-radius: 50%;

    position: absolute;
    top: 0;
    right: 0;
  `,
  User: styled.div`
    display: flex;
    align-items: center;
    gap: ${pxToRem(8)};

    font-size: var(--text-base);
    font-family: var(--font-primary);
    font-weight: 600;
    color: var(--light-grey-color-variant-1);
  `,
  UserImage: styled.div`
    aspect-ratio: 1 / 1;

    width: ${pxToRem(40)};
    height: ${pxToRem(40)};

    & img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  `,
  UserSettingsIconButton: styled(IconButton)`
    min-width: ${pxToRem(24)};
    min-height: ${pxToRem(24)};

    & svg {
      width: ${pxToRem(24)};
      height: ${pxToRem(24)};
    }
  `,
};

export const HeaderDropdownStyled: StylesConfig<OptionType<UserDeviceType>, boolean> = {
  container: (base) => ({
    ...base,
    width: `100px`,
    flex: 1,
  }),
  control: (base, state) => ({
    ...base,
    background: 'transparent',
    borderRadius: 'none',
    borderColor: 'transparent',
    boxShadow: 'none',
    height: 36,
    fontSize: 'var(--text-base)',
    fontWeight: '400',
    cursor: 'pointer',
    width: '100%',

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

export { InputStyled };
