import { DeviceCardStyled as S } from './styles';

interface IDeviceCard {
  title: string;
  address: string;
  svgIcon: JSX.Element;
  onClick?: () => void;
}

const DeviceCard = ({ title, address, svgIcon, onClick }: IDeviceCard) => {
  return (
    <S.DeviceCard onClick={onClick}>
      <S.Icon>{svgIcon}</S.Icon>
      <S.Description>
        <S.Title>{title}</S.Title>
        <S.Address>{address}</S.Address>
      </S.Description>
    </S.DeviceCard>
  );
};

export default DeviceCard;
