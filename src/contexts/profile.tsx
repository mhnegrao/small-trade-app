import React from 'react'
import { createContext } from 'react';
import { IServico } from '../services/interfaces';

interface IServicoContextData {
  finalizado: boolean;
  pago: boolean;
  servico: IServico;
}

const ServicoContext = createContext<IServicoContextData>(
  {} as IServicoContextData
);

export const ServicoProvider: React.FC = ({ children }) => {
  return (
    <>
      <ServicoContext.Provider
        value={{ finalizado: false, pago: false, servico: {} }}
      >
        {children}
      </ServicoContext.Provider>
    </>
  );
};
export default ServicoContext;
