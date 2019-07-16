import React from 'react';
import '../pages/Hall.css';
import deleteIcon from '../assets/delete.png'

function OrderItems(props) {
  return props.order.map(elem => {
    return (
      <tr key={elem.id} >
        <th scope="row" >{elem.name}</th>
        <td className="OrderItem-quantity">
          <span onClick={() => props.subtractItem(elem.id)}
            className="OrderItem-text--big"> -  </span>
          {elem.quantity}
          <span className="OrderItem-text--big"
            onClick={() => props.addItem(elem.id)}>  + </span>
        </td>
        <td>{'R$' + elem.price.toFixed(2)}
        </td>
        <td>
          <img
            onClick={() => props.removeItem(elem.id)}
            className="delete-icon"
            src={deleteIcon}
            alt="del">
          </img>
        </td>
      </tr>
    )
  })
}
export default OrderItems