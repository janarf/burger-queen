import React from 'react';
import '../pages/Hall.css';
import OrderItems from './OrderItem';


function OrderSummary(props) {
  return (
    <div className="order ">
      <input type="text"
        className="Hall-input"
        placeholder="Digite o nome do cliente"
        onChange={(e) => props.nameChange(e)}
        value={props.clientName}>
      </input>
      <div>
        <table className="table table-text-light">
          <thead>
            <tr>
              <th scope="col">Item</th>
              <th scope="col">Quant.</th>
              <th scope="col">Preço</th>
              <th scope="col">  </th>
            </tr>
          </thead>
          <tbody>
            <OrderItems
              order={props.order}
              subtractItem={props.subtractItem}
              addItem={props.addItem}
              removeItem={props.removeItem} />
            <tr>
              <th scope="row">Total</th>
              <td></td>
              <td>{
                'R$' + props.order.reduce((acc, elem) => acc + elem.price, 0)
                  .toFixed(2)
              }
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <button className="send-button" onClick={props.sendOrder}>Enviar pedido</button>
      </div>
    </div>
  )
}

export default OrderSummary;