import { useState } from 'react';
import { UserInfoType } from '../SettingsPanel/types';
import { ToggleTabs } from '../UI/ToggleTabs/ToggleTabs';
import AddDevice from './AddDevice/AddDevice';
import AddGateway from './AddGateway/AddGateway';
import { AddNewDeviceStyled as S } from './styles';

type Props = {
  onClose: () => void;
  userInfo: UserInfoType;
};

const tabs = [
  {
    id: 0,
    title: 'Gateway',
  },
  {
    id: 1,
    title: 'Device',
  },
];

const AddNewDevice = ({ onClose, userInfo }: Props) => {
  const [activeTab, setActiveTab] = useState('Gateway');

  return (
    <S.AddNewDevice>
      <S.Title>Add new {activeTab === 'Gateway' ? 'gateway' : 'device'}</S.Title>
      <ToggleTabs options={tabs} tabWrapperWidth={210}>
        <AddGateway onClose={onClose} onClick={() => setActiveTab('Gateway')} />
        <AddDevice onClose={onClose} userInfo={userInfo} onClick={() => setActiveTab('Device')} />
      </ToggleTabs>
    </S.AddNewDevice>
  );
};

export default AddNewDevice;
