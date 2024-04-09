import { FC } from 'react';

import { AccordionDetailsStyled as S } from './styles/accordionDetailsStyles';

type AccordionDetails = {
  children: string | JSX.Element;
};

const AccordionDetails: FC<AccordionDetails> = ({ children }) => {
  return <S.AccordionDetails>{children}</S.AccordionDetails>;
};

export default AccordionDetails;
