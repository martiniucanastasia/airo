import { FC, useState, ReactNode, useRef, useEffect } from 'react';
import { CSSProperties } from 'styled-components';

import { AccordionStyled as S } from './styles/accordionStyles';

type Accordion = {
  children: [ReactNode, ReactNode];
};

const Accordion: FC<Accordion> = ({ children }) => {
  const [isActive, setIsActive] = useState(false);
  const [summary, details] = children;
  const detailsRef = useRef<HTMLDivElement | null>(null);
  const [detailsHeight, setDetailsHeight] = useState('100%');

  useEffect(() => {
    if (detailsRef.current) {
      setDetailsHeight(`${detailsRef.current.scrollHeight}px`);
    }
  }, []);

  const accordionHandler = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <S.Accordion
      style={
        {
          '--transform': isActive ? 'rotate(180deg)' : 'rotate(0)',
          '--height': isActive ? detailsHeight : '0',
        } as CSSProperties
      }
      onClick={accordionHandler}
    >
      {summary}
      <S.DetailsContainer ref={detailsRef}>{details}</S.DetailsContainer>
    </S.Accordion>
  );
};

export default Accordion;
