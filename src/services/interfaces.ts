export interface IServico {
    id?: number;
    servico?: string;
    descricao?: string;
    cliente?: string;
    fone?: string;
    email?: string;
    dataSolicitacao?: Date;
    dataPrevista?: Date;
    valor?: number;
    observacao?: string;
    finalizado?: boolean;
    pago?: boolean;
    dataPagamento?: Date;
    tipoPagamento?: 'Dinheiro' | 'Débito' | 'Crédito' | 'PIX';
    completed_At?: Date;
    created_At?: Date;
  }
  export interface ILancamento{
    id?: number;
    descricao?: string;
    dataLancamento?: Date;
    valor?: number;
    observacao?: string;
    tipoPlancamento?: 'Débito' | 'Crédito' | 'Estorno';
    created_At?: Date;
    updated_At?: Date;
  }
  