import React from 'react';
import '../App.css';
import './Kitchen.css';
import firebaseApp from "../firebaseConfig";
import Header from '../components/Header';

const database = firebaseApp.firestore();

class Kitchen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
    };
    this.orderReady = this.orderReady.bind(this)
  }

  componentDidMount = () => {
    database.collection('orders').get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        if (!doc.data().done) {
          const newOrder = this.state.orders.concat({
            order: doc.data(),
            id: doc.id
          })
          this.setState({ orders: newOrder })
        }
      })
    })
  }

  logout = () => {
    this.props.history.push(`/`)
  }

  orderReady = (key) => {
    const orderClicked = this.state.orders.filter(item => {
      return item.order.timeStamp === key
    })
    orderClicked[0].order.done = true;
    const newOrders = this.state.orders.map(item => {
      if (item.order.timeStamp === key) item.order.done = true;
      return item
    })
    this.setState({
      orders: newOrders.filter(item => item.order.done === false)
    })
    database.collection('orders').doc(orderClicked[0].id).set({ ...orderClicked[0].order })
  }

  render() {
    const orders = this.state.orders.map(elem => {
      const orderItems = elem.order.order.map(item => {
        if (!item.done) {
          return (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
            </tr>
          )
        }
      })
      return (
        <div key={elem.order.timeStamp} className="Kitchen-order">
          <h3>{elem.order.client}</h3>
          <table className="table table-text-light">
            <thead>
              <tr>
                <th scope="col">Item</th>
                <th scope="col">Quant.</th>
              </tr>
            </thead>
            <tbody>
              {orderItems}
            </tbody>
          </table>
          <button className="send-button"
            onClick={() => this.orderReady(elem.order.timeStamp)}>
            Pedido pronto
          </button>
        </div>
      )

    })

    return (
      <div className="App" >
        <Header server="cozinha" logout={this.logout} />

        <div className="Kitchen">
          {orders}
        </div >
      </div>
    );
  }
}

export default Kitchen;
