import { Button } from '@/components/UI/Buttons';
import { pxToRem } from '@/styles/_common';
import styled from 'styled-components';

const AuthUserStyled = {
  AuthUser: styled.div``,
  User: styled.div`
    display: flex;
    align-items: center;
    gap: ${pxToRem(8)};

    font-size: var(--text-base);
    font-family: var(--font-primary);
    font-weight: 600;
    color: var(--light-grey-color-variant-1);

    padding-bottom: ${pxToRem(30)};
  `,
  UserImage: styled.div`
    aspect-ratio: 1 / 1;

    width: ${pxToRem(60)};
    height: ${pxToRem(60)};

    & img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  `,
  UserDescription: styled.div`
    color: var(--white-color-primary);
  `,
  UserName: styled.h2`
    font-size: var(--text-2xl);
    font-weight: 600;
  `,
  UserTag: styled.h4`
    font-size: var(--text-sm);
    font-weight: 400;
  `,
  DevicesContainer: styled.div`
    display: flex;
    flex-direction: column;
    flex: 0;
    & button {
      margin-bottom: ${pxToRem(10)};
    }
  `,
  AddNewButton: styled(Button)`
    font-weight: 700;
    margin: 0 auto;
  `,
  Buttons: styled.div`
    display: flex;
    padding-top: ${pxToRem(70)};
  `,
  ButtonLeft: styled(Button)`
    display: flex;
    align-items: center;
    justify-content: center;

    gap: ${pxToRem(10)};
    border-radius: ${pxToRem(3)} 0 0 ${pxToRem(3)};
    height: ${pxToRem(62)};
  `,
  ButtonRight: styled(Button)`
    display: flex;
    align-items: center;
    justify-content: center;

    gap: ${pxToRem(10)};
    border-radius: 0 ${pxToRem(3)} ${pxToRem(3)} 0;
    height: ${pxToRem(62)};
  `,
};

export { AuthUserStyled };
