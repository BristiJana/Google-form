import React, { Component } from 'react'
import { Button, Form, Container, Header } from 'semantic-ui-react'
import './App.css';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

export default class App extends Component {

   
  render() {
    return (
      <div className="container">
        
    <div className="second-part" style={{height:"182px"}}><div className="inner">
        <div className="wrinner">
        <h1>Web Development Task</h1>
        <br/>
        <p>
        Your response has been recorded.
        </p>
        </div>
        </div></div>
        
      </div>
    )
  }
}