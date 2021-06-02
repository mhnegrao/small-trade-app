import React from 'react';
import {
  Form,
  Container,
  Header,
  Button,
  Radio,
  Checkbox,
} from 'semantic-ui-react';

export const MensalidadeCad = () => {
  const handleCloseClick = () => {};
  const handleGerarClick = () => {};
  return (
    <>
      <h3>Gerar Mensalidade</h3>

      <Form>
        {/* <label>
          <h5>Escolha o modo para gerar</h5>
        </label> */}
        {/* <select id="setectTipo">
            @foreach (var cnt in Enum.GetValues(typeof(TipoMensalidadeGerar)).Cast<TipoMensalidadeGerar>().ToList())
            {
                <option value="@((int)cnt)>@cnt.ToString()</option>
            }
        </select> */}
        {/* @if (tipoGerar == (int)TipoMensalidadeGerar.Individual) */}
        {/* <label>
          <h5>Escolha um afiliado</h5>
        </label> */}
        {/* <select id="setectTipo" value="idAfiliado" @onchange="OnUpdate" class="col col-sm custom-select my-select">
                        @foreach (var cnt in afiliadoList)
                        {
                            <option value="@cnt.Id" >@cnt.Nome</option>
                        }
                    </select> */}
        {/* Selecionado ID: @idAfiliado */}
        {/* @*else if (tipoGerar == (int)TipoMensalidadeGerar.Lote)
            {
                <p>Escolha qtde de Parcelas</p>
            }*@ */}
            <Form.Input label="Tipo de Prestação de Serviço"  />
        <Form.Input
          label="Informe a quantidade de parcelas"
          value="qtdeParcelas"
        />
        
        <Form.Input label="Informe o valor das parcelas" value="valorParcela" />
        <Form.Input label="Informe dia de vencimento" value="diaVencimento" />
        <Button onclick={handleCloseClick}>Fechar</Button>
        <Button onclick={handleGerarClick}>Gerar Parcela</Button>
      </Form>
    </>
  );
};
