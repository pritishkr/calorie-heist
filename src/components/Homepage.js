import React, { useState } from 'react';
import Navbar from './Navbar'
import NavHome from './NavHome';

export default function Homepage() {

    const [text, setText] = useState('Enter Text here');

  return (

    <><NavHome/>
    <div className="container">

          <div className='login_form'>

              <br></br><br></br><br></br>
              <form action="">
                  <div class="form-group w-50">
                      <label for="id1">E-mail ID</label>
                      <input class="form-control" type="text"
                          id="id1" placeholder="Enter your E-Mail" />
                  </div>
                  <div class="form-group w-50">
                      <label for="id2">Password</label>
                      <input class="form-control" type="password"
                          id="id2" placeholder="Enter your password" />
                  </div>
                  <br></br>
                  <div className="container mx-auto">
                      <button type="button" class="btn btn-outline-success me-2">
                          Login
                      </button>
                  </div>
                  <div className="container mx-auto">
                      Not yet registered?
                      <button type="button" className='btn btn-link'>
                          Register Here
                      </button>
                  </div>
              </form>

          </div>
      </div></>
  )
}
