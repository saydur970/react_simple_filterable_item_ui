import { useState, createContext, FC, ReactNode, useContext } from 'react';
import { ty_UI_Mode } from '../types/ui.types';

type TUICtxValue = {
  mode: ty_UI_Mode
}

type TModifyValue = 
{ key: 'mode', value: ty_UI_Mode; }

interface IUICtx {
  uiCtx: TUICtxValue;
  setUICtx:   ({ key, value }: TModifyValue) => void
}

interface IUIContextProvider {
  children: ReactNode
}

const UIContext = createContext<IUICtx>({
  uiCtx: {
    mode: 'dark'
  },
  setUICtx: () => {}
});


export const UIContextProvider: FC<IUIContextProvider> = ({ children }) => {

  const [valueState, setValueState] = useState<TUICtxValue>({
    mode: 'dark'
  });

  const modifyValue = ({ key, value }: TModifyValue) => {

    if(key === 'mode') {
      setValueState({ 
        ...valueState, 
        mode: value
      })

    }
    else {
    setValueState({ ...valueState, [key]: value })

    }

  }

  return(
    <UIContext.Provider value={{
      uiCtx: valueState,
      setUICtx: modifyValue
    }} >
      {children}
    </UIContext.Provider>
  )

}

export const useUICtx = () => {

  const { uiCtx, setUICtx } = useContext(UIContext);

  return { uiCtx, setUICtx }

}
