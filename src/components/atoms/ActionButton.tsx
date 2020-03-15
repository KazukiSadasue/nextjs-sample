import React from 'react';
import { Button } from '@material-ui/core';

type Props = {
  children: React.ReactNode,
  onClick: (e: React.MouseEvent) => void,
}

export const ActionButton: React.FC<Props> = ({ children, onClick }) => {
  return (
    <Button variant="contained" color="secondary" onClick={onClick}>
      {children}
    </Button>
  );
}