import { addGateway } from '@/api/devices';
import { Button } from '@/components/UI/Buttons';
import Input from '@/components/UI/Input/Input';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AddNewGatewayStyled as S } from './styles';

type Props = {
  onClose: () => void;
  onClick: () => void;
};

const AddGateway = ({ onClose, onClick }: Props) => {
  const [gatewayName, setGatewayName] = useState<string>('');
  const [gatewayKey, setGatewayKey] = useState<string>('');

  // Gateway tab is clicked
  onClick();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      gatewayName: '',
      gatewayKey: '',
    },
  });

  const addNewGatewayHandler = () => {
    const newGateway = {
      gatewayName,
      key: gatewayKey,
    };

    addGateway(newGateway, 'gateways/');
    onClose();
  };

  return (
    <S.GatewayContaier>
      <S.AddNewGateway>
        <S.InputContainer>
          <S.InputLabel>Gateway&apos;s name</S.InputLabel>
          <Input
            placeholder="Type name..."
            size="large"
            onChange={setGatewayName}
            registerValue={register('gatewayName', {
              required: true,
              maxLength: 20,
              minLength: 4,
            })}
            status={errors.gatewayName && 'error'}
          />
          {errors.gatewayName?.type === 'required' && <S.Error>Field required </S.Error>}
          {errors.gatewayName?.type === 'maxLength' && <S.Error>Max length 20 </S.Error>}
          {errors.gatewayName?.type === 'minLength' && <S.Error>Max length 4 </S.Error>}
        </S.InputContainer>
        <S.TextareaContainer>
          <S.Textarea
            placeholder="Type key..."
            {...register('gatewayKey', {
              required: true,
              maxLength: 100,
              minLength: 10,
            })}
            onChange={(event) => {
              const value = event.target.value;
              setGatewayKey(value);
              register('gatewayKey').onChange(event);
            }}
            status={errors.gatewayKey ? 'error' : ''}
          ></S.Textarea>
          {errors.gatewayKey?.type === 'required' && <S.Error>Field required </S.Error>}
          {errors.gatewayKey?.type === 'maxLength' && <S.Error>Max length 100 </S.Error>}
          {errors.gatewayKey?.type === 'minLength' && <S.Error>Max length 10 </S.Error>}
        </S.TextareaContainer>
      </S.AddNewGateway>

      <S.ButtonGroup>
        <Button size="large" fluid onClick={handleSubmit(addNewGatewayHandler)}>
          Add gateway
        </Button>
        <Button variant="secondary" size="large" fluid onClick={onClose}>
          Cancel
        </Button>
      </S.ButtonGroup>
    </S.GatewayContaier>
  );
};

export default AddGateway;
