export type ModalType = {
  isActive: boolean;
  children: JSX.Element;
  onClose(): void;
};
