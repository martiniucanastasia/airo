import { ReactElement, useState } from 'react';
import { TabsStyled as S } from './styles';

type TabType = { id: number; title: string };

export interface ToggleTabsProps {
  options: TabType[];
  children: ReactElement[];
  tabWrapperWidth?: number;
}

export const ToggleTabs = ({ options, children, tabWrapperWidth }: ToggleTabsProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (index: number) => {
    setActiveTab(index);
  };

  const tabContent: ReactElement = children[activeTab];

  return (
    <>
      <S.TabWrapper tabWrapperWidth={tabWrapperWidth}>
        {options.map((option: TabType) => {
          return (
            <S.Tab
              key={option.id}
              index={option.id}
              activeTab={activeTab}
              onClick={() => handleChange(option.id)}
            >
              {option.title}
            </S.Tab>
          );
        })}
      </S.TabWrapper>
      {tabContent === undefined ? <p>No data provided</p> : <>{tabContent}</>}
    </>
  );
};
