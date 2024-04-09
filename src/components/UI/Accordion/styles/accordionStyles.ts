import styled from 'styled-components';

const AccordionStyled = {
  Accordion: styled.div`
    font-family: var(--font-primary);
    font-size: var(--text-sm);
    color: var(--white-color-primary);

    overflow: hidden;
    cursor: pointer;
    user-select: none;

    background-color: var(--light-black-color);

    & svg {
      transition: transform 0.4s;
      color: var(--light-grey-color-variant-1);
      transform: var(--transform);
    }
  `,
  DetailsContainer: styled.div`
    transition: height 0.4s;
    height: var(--height);
  `,
};

export { AccordionStyled };
