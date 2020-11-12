import React, { Component } from 'react'
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import ProductCard from "./ProductCard"
import Axios from "axios"
import { getPersonaje } from './Redux/actions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'


class NavBar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      input: ""
    }

    //this.handleChange= this.handleChange.bind(this)
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }
  handleOnSubmit = async (e) => {
    const value = this.state.input
    e.preventDefault();
    await this.props.getPersonaje(value)
  }


  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>

          <Form onSubmit={this.handleOnSubmit}>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              value={this.state.input}
              onChange={this.handleChange}
            />
            <Button type="submit" variant="outline-info">Search</Button>
          </Form>
        </Navbar>

        <ProductCard respuesta={this.props.personajes} />
      </div>
    )
  }
}


const mapStateToProps = state => {
  console.log(state.personajes)
  return {
    personajes: state.personajes
  }
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    ...bindActionCreators({ getPersonaje }, dispatch)
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar)