import React from 'react'
import './Login.css'
import { Form, Button } from 'react-bootstrap';

const Login = () => {
    return (
       <div>
            <div className='sidenav'>
             <div class="login-main-text">
            <h2>Application <br></br> Login Page</h2>
            <p>Login or register from here to access.</p>
         </div>
         </div>
        <div className='main'>
      
         <div className="col-md-6 col-sm-12">
            <div className="login-form">
               <form>
                  <div className="form-group">
                     <label>User Name</label>
                     <br />
                     <br />
                     <input type="text" className="form-control" placeholder="User Name" ></input>
                     {/* <input type="text" class="form-control" placeholder="User Name"> */}
                  </div>

                  <div className="form-group">
                     <label>Password</label>
                     {/* <input type="password" class="form-control" placeholder="Password"> */}
                     <br />
                     <br />
                     <input type="password" className="form-control" placeholder="Password"></input>
                  </div>
                  <br />
                  <button type="submit" className='btn-first'>Login</button>

                  <button type="submit" className='btn-second'>Register</button>
               </form>
            </div>
         </div>
    
        {/* <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form> */}
        </div>
        
        </div>
     
    )
}

export default Login
