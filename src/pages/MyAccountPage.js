import React from "react";
import 'bootstrap/dist/css/bootstrap.css';


const MyAccountPage = () => {
  let myStyle = {
    backgroundImage: "url('img/bg-food.png')",
    height: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div style={myStyle} className="h-screen flex items-center justify-center">
      <div className="bg-white p-4 w-[700px] max-h-[600px] rounded-4 shadow-2xl shadow-black">
       {/* <!-- Pills navs --> */}
<ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
  <li class="nav-item" role="presentation">
    <a class="nav-link active w-[300px]" id="tab-login" data-mdb-toggle="pill" href="#pills-login" role="tab"
      aria-controls="pills-login" aria-selected="true">Login</a>
  </li>
  <li class="nav-item" role="presentation">
    <a class="nav-link" id="tab-register" data-mdb-toggle="pill" href="#pills-register" role="tab"
      aria-controls="pills-register" aria-selected="false">Register</a>
  </li>
</ul>
{/* <!-- Pills navs --> */}

{/* <!-- Pills content --> */}
<div class="tab-content">
  <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
    <form>
      <div class="text-center mb-3">
        <p>Sign in with:</p>
        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-facebook-f"></i>
        </button>

        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-google"></i>
        </button>

        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-twitter"></i>
        </button>

        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-github"></i>
        </button>
      </div>

      <p class="text-center">or:</p>

      {/* <!-- Email input --> */}
      <div class="form-outline">
        <input type="email" id="loginName" placeholder="Email or username" class="form-control" />
        <label class="form-label" for="loginName"></label>
      </div>

      {/* <!-- Password input --> */}
      <div class="form-outline mb-2">
        <input type="password" id="loginPassword" placeholder="Password" class="form-control" />
        <label class="form-label" for="loginPassword"></label>
      </div>

      {/* <!-- 2 column grid layout --> */}
      <div class="row mb-4">
        <div class="col-md-6 d-flex justify-content-center">
          {/* <!-- Checkbox --> */}
          <div class="form-check mb-3 mb-md-0">
            <input class="form-check-input" type="checkbox" value="" id="loginCheck" checked />
            <label class="form-check-label" for="loginCheck"> Remember me </label>
          </div>
        </div>

        <div class="col-md-6 d-flex justify-content-center">
          {/* <!-- Simple link --> */}
          <a href="#!">Forgot password?</a>
        </div>
      </div>

      {/* <!-- Submit button --> */}
      <div className="flex flex-col items-center"><button type="submit" class="w-[300px] btn btn-primary btn-block m-4 items-center justify-center">Sign in</button></div>
      

      {/* <!-- Register buttons --> */}
      <div class="text-center">
        <p>Not a member? <a href="#!">Register</a></p>
      </div>
    </form>
  </div>
  <div class="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
    <form>
      <div class="text-center mb-3">
        <p>Sign up with:</p>
        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-facebook-f"></i>
        </button>

        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-google"></i>
        </button>

        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-twitter"></i>
        </button>

        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-github"></i>
        </button>
      </div>

      <p class="text-center">or:</p>

      {/* <!-- Name input --> */}
      <div class="form-outline mb-4">
        <input type="text" id="registerName" class="form-control" />
        <label class="form-label" for="registerName">Name</label>
      </div>

      {/* <!-- Username input --> */}
      <div class="form-outline mb-4">
        <input type="text" id="registerUsername" class="form-control" />
        <label class="form-label" for="registerUsername">Username</label>
      </div>

      {/* <!-- Email input --> */}
      <div class="form-outline mb-4">
        <input type="email" id="registerEmail" class="form-control" />
        <label class="form-label" for="registerEmail">Email</label>
      </div>

      {/* <!-- Password input --> */}
      <div class="form-outline mb-4">
        <input type="password" id="registerPassword" class="form-control" />
        <label class="form-label" for="registerPassword">Password</label>
      </div>

      {/* <!-- Repeat Password input --> */}
      <div class="form-outline mb-4">
        <input type="password" id="registerRepeatPassword" class="form-control" />
        <label class="form-label" for="registerRepeatPassword">Repeat password</label>
      </div>
{/* 
      <!-- Checkbox --> */}
      <div class="form-check d-flex justify-content-center mb-4">
        <input class="form-check-input me-2" type="checkbox" value="" id="registerCheck" checked
          aria-describedby="registerCheckHelpText" />
        <label class="form-check-label" for="registerCheck">
          I have read and agree to the terms
        </label>
      </div>

      {/* <!-- Submit button --> */}
      <button type="submit" class="btn btn-primary btn-block mb-3">Sign in</button>
    </form>
  </div>
</div>
{/* <!-- Pills content --> */}
      </div>
    </div>
  );
};
export default MyAccountPage;
