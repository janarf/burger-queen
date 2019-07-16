import React from 'react';
import '../App.css';
import './Hall.css'
import firebaseApp from "../firebaseConfig";
import '../components/Menu.css';
import Header from '../components/Header';
import Menu from '../components/Menu';
import OrderSummary from '../components/OrderSummary';
import menuData from '../components/menuData';
import withFirebaseAuth from 'react-with-firebase-auth'

const firebaseAppAuth = firebaseApp.auth();
const database = firebaseApp.firestore();

class Hall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      client: '',
      server: '',
      order: [],
    };
    this.handleClickItem = this.handleClickItem.bind(this);
    this.handleChange = this.handleChange.bind(this)
    this.sendOrder = this.sendOrder.bind(this)
    this.subtractItem = this.subtractItem.bind(this)
    this.addItem = this.addItem.bind(this)
  }

  componentDidMount = () => {
    firebaseApp.auth().onAuthStateChanged(user => {
      database.collection('users').doc(user.uid).get()
        .then(querySnapshot => {
          const server = querySnapshot.data().name
          this.setState({
            server: server
          })
        })
    });
  }

  handleClickItem = (e) => {
    let newItem = menuData.filter(elem => elem.id === e)[0];
    const index = this.state.order.findIndex(
      item => item.id === newItem.id
    )
    if (index >= 0) {
      let newOrder = this.state.order
      const unityPrice = newOrder[index].price / newOrder[index].quantity
      newOrder[index].quantity += 1
      newOrder[index].price = newOrder[index].quantity * unityPrice
      this.setState({
        order: newOrder
      })
    } else {
      const newOrder = {
        id: newItem.id,
        name: newItem.name,
        quantity: 1,
        price: newItem.price
      }
      this.setState({
        order: this.state.order.concat(newOrder)
      })
    }
  }

  subtractItem = (e) => {
    const index = this.state.order.findIndex(item => item.id === e)
    let newOrder = this.state.order
    const unityPrice = newOrder[index].price / newOrder[index].quantity
    newOrder[index].quantity -= 1
    newOrder[index].price = newOrder[index].quantity * unityPrice
    if (!newOrder[index].quantity) {
      newOrder.splice(index, 1)
    }
    this.setState({
      order: newOrder
    })
  }

  addItem = (e) => {
    const index = this.state.order.findIndex(item => item.id === e)
    let newOrder = this.state.order
    const unityPrice = newOrder[index].price / newOrder[index].quantity
    newOrder[index].quantity += 1
    newOrder[index].price = newOrder[index].quantity * unityPrice
    this.setState({
      order: newOrder
    })
  }

  removeItem = (e) => {
    const index = this.state.order.findIndex(item => item.id === e)
    let newOrder = this.state.order
    newOrder.splice(index, 1);
    this.setState({
      order: newOrder
    })
  }

  handleChange = (e) => {
    this.setState({ client: e.target.value })
  }

  sendOrder = () => {
    if (!this.state.client.length) {
      alert('Insira o nome do cliente')
    } else {
      if (this.state.order.length) {
        database.collection('orders').add({
          client: this.state.client,
          server: this.state.server,
          order: this.state.order,
          timeStamp: new Date(),
          done: false,
          delivered: false,
        })
        this.setState({
          order: [],
          client: '',
        })
      }
    }
  }

  logout = () => {
    this.props.history.push(`/`)
  }

  render() {
    return (
      < div className="App" >
        <Header server={this.state.server} logout={this.logout} />
        <div className="w-100 d-flex">
          <OrderSummary
            nameChange={this.handleChange}
            clientName={this.state.client}
            subtractItem={this.subtractItem}
            addItem={this.addItem}
            removeItem={this.removeItem}
            order={this.state.order}
            sendOrder={this.sendOrder} />
          <Menu onClick={(e) => this.handleClickItem(e)} />
        </div>
      </div >
    );
  }
}

export default withFirebaseAuth({
  firebaseAppAuth,
})(Hall);
