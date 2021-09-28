import React from 'react';
import Logo from './assets/img/pvu.jpg';
function App() {
  return (
  <div className="container-fluid vh-100 " >
    <div className="container">
      <div className="row">
          <div className="col d-flex justify-content-center">
            <img src={Logo}  height="400" alt="LOGO"/>
          </div>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-center">
            <form class="shadow-lg p-3 mb-5 bg-white rounded" style={{ width: "40rem"}}>
              <h3>Login</h3>
              <div class="form-group">
                <label for="exampleInputEmail1">E-Mail Address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
              <div class="form-group " > 
                <label className="mr-2" for="exampleInputPassword1">Password </label> 
                <a href="#">Forget Password</a>
                <input type="password" class="form-control" id="exampleInputPassword1" />
              </div>
              <button type="submit" class="btn btn-primary btn-block mb-2">Login</button>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="autoSizingCheck2" />
                <label class="form-check-label" for="autoSizingCheck2">
                  Remember me
                </label>
              </div>
            </form>
          </div>
        </div>
    </div>
  </div>
)};

export default App;

