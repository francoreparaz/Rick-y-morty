import React, { Component } from 'react'
import {Navbar,Nav,Form,FormControl,Button} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import ProductCard from "./ProductCard"
import Axios from "axios"
export default class NavBar extends Component {

  constructor(props){
    super(props)
    this.state={input:""}
    this.state={respuesta:[]}
    //this.handleChange= this.handleChange.bind(this)
  }

  handleChange=(e)=>{
    this.setState({
        input:e.target.value
    })
  }
   handleOnSubmit=(e)=>{
    const value= this.state.input
    e.preventDefault();
    Axios.get(`https://rickandmortyapi.com/api/character/${value}`)
    .then(res=>console.log(res.data))
    .catch(err=>err)
    this.setState({input:""})
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

        <ProductCard handleOnSubmit={this.handleOnSubmit}/>
      </div>
    )
  }
}
