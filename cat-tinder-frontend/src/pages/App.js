import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {
  Grid,
  PageHeader,
  Row,
  Col,

} from 'react-bootstrap'
import Cats from './Cats'
import NewCat from './NewCat'
import Navbar from './navbar'

class App extends Component {
    constructor(props){
        super(props)
        this.state= {
            cats: [
         {
           id: 1,
           name: 'Morris',
           age: 2,
           enjoys: "Long walks on the beach."
         },
         {
           id: 2,
           name: 'Bubs the Cat',
           age: 4,
           enjoys: "Snuggling by the fire."
         },
         {
           id: 3,
           name: 'Mr. Meowsalot',
           age: 12,
           enjoys: "Being in charge."
         }
       ]
     }
 }

 newCatSubmit(data){
     console.log(data)
 }

  render() {
    return (
    <Router>
      <div>
        <Route exact path="/" render={props => (
          <Grid>
            <PageHeader>
              <Row>
                <Col xs={8}>
                  <small className='subtitle'>Add a Cat</small>
                </Col>
                <NewCat onSubmit={this.newCatSubmit.bind(this)} />
                <Col xs={4}>
                  <small>
                    <Link to='/cats' id='cats-link'>Show me the Cats</Link>
                  </small>
                </Col>
              </Row>
            </PageHeader>
          </Grid>
        )} />

        <Route exact path="/cats" render={props => (
          <Grid>
            <PageHeader>
              <Row>
                <Col xs={8}>
                  <small className='subtitle'>All the Cats</small>
                </Col>
                <Col xs={4}>
                  <small>
                    <Link to='/' id='cats-link'>Add a Cat</Link>
                  </small>
                </Col>
              </Row>
            </PageHeader>
            <Cats cats={this.state.cats} />
          </Grid>
        )} />
      </div>
    </Router>
    );
  }
}

export default App;
