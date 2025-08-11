import type { MouseEvent, ReactNode } from 'react';

interface IButton {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}
export default function Button({ children, onClick }: IButton) {
  return <button onClick={onClick}>{children}</button>;
}
