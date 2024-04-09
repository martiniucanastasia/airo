import { FC } from 'react';

import { AccordionSummaryStyled as S } from './styles/accordionSummaryStyles';

import { ReactComponent as Icon } from '@/assets/svg/chevron(arrow)-down.svg';

type AccordionSummary = {
  expandIcon?: JSX.Element;
  children: string | JSX.Element;
};

const AccordionSummary: FC<AccordionSummary> = ({ children, expandIcon }) => {
  return (
    <S.AccordionSummary>
      <div>{children}</div>
      {expandIcon ?? <Icon />}
    </S.AccordionSummary>
  );
};

export default AccordionSummary;
