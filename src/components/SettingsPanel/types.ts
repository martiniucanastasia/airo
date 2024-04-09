import { User } from 'firebase/auth';

export type UserInfoType = User | null;

export interface ISettingsPanel {
  isActive: boolean;
  onClose: () => void;
  container?: HTMLElement | null;
  isAuthentificated: boolean;
  // eslint-disable-next-line no-unused-vars
  setIsAuthentificated(initialState: boolean | ((prevValue: boolean) => boolean)): void;
  userInfo: UserInfoType;
  // eslint-disable-next-line no-unused-vars
  setUserInfo(initialState: User | null | ((prevValue: User | null) => User | null)): void;
}
