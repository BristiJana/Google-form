import React, { Component } from 'react'
import { Button, Form, Container, Header } from 'semantic-ui-react'
import './App.css';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));
const box = {
    borderTop: 'none',
    borderRight: 'none',
    borderLeft: 'none',
    borderColor: '#d93025',
    marginTop:'40px',
    borderRadius:'0',
    width:'400px'
}
export default class App extends Component {

   
  render() {
    return (
      <div className="container">
        <div className="heading"></div>
        <div className="second-part"><div className="inner">
        <div className="wrinner">
        <h1>Web Development Task</h1>
        <br/>
        <p>
        Welcome to FundingX! 
         <br/><br/>
To become a part of our Web Development Team, please complete the task before the deadline mentioned.
 <br/><br/>
No task submissions will be entertained after the deadline 
<br/><br/>
TASK -
Replicate this Google form which you are looking at.
<br/><br/>
You may use HTML,CSS or ReactJs. Preference will be given to one using ReactJs and able to send JSON file to a URL.
<br/><br/>
If you like, you may enhance the looks of the page according to you.
<br/><br/>
Host this page on GitHub pages or any hosting service you like and paste link in the form.
<br/><br/>
The tasks given are for understanding how well you are equipped with the skills.
<br/><br/>
Deadline for submission- July 31, 4:00 p.m.
<br/><br/>
* Required</p>
        </div>
        </div></div>
        <Form className="form">

          <Form.Field >
            
            <div className="f">
             <TextField
          error
          id="outlined-error"
          label="Name"
         
          variant="outlined"
        />
            </div>
           
          </Form.Field>
          
          <Form.Field>
            <div className="f">
           <TextField
          error
          id="outlined-error"
          label="Email Id"
          
          variant="outlined"
        />
            </div>
          </Form.Field>
          <Form.Field>
           <div className="f">
           <TextField
          error
          id="outlined-error"
          label="Phone No"
          
          variant="outlined"
        />
            </div>
          </Form.Field>
          <Form.Field>
            <div className="f">
           <TextField
          error
          id="outlined-error"
          label="Page URL"
          
          variant="outlined"
        />
            </div>
          </Form.Field>
          <Form.Field>
            <div className="f">
          <TextField
          error
          id="outlined-error"
          label="What is FundingX about?"
          
          variant="outlined"
        />
            </div>
          </Form.Field>
          <div className="db">
         <Link to="/submit" ><Button className="button" type='submit'>Submit</Button></Link></div>
        </Form>
      </div>
    )
  }
}