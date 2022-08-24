import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import classes from './model.module.css';

interface IComp {
  close: () => void;
  children: ReactNode
}

export const Backdrop: FC<IComp> = ({close, children}) => {
  return createPortal(
    <div className={classes.backdrop} onClick={close}>
      <div onClick={e => e.stopPropagation()} >
        {
          children
        }
      </div>
    </div>,
    document.getElementById('model')!
  )
}