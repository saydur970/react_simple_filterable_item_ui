import { FC, Fragment, ReactNode } from 'react';
import { Footer } from './footer';
import { Header } from './header';

interface IComp {
  children: ReactNode
}

export const Layout: FC<IComp> = ({children}) => {
  return (
   <Fragment>

      <Header />

      <main
        style={{
          padding: '0 4rem',
          minHeight: '100vh'
        }}
      >
        {children}
      </main>

      <Footer />

   </Fragment>
  )
};