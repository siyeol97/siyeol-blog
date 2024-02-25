'use client';

import { MouseEventHandler } from 'react';

interface Props {
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ children, onClick }: Props) {
  return <button onClick={onClick}>{children}</button>;
}
