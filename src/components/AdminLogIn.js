import { Alert } from "bootstrap";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { RegisterActions } from "../store/RegisterSlice";

const AdminLogIn = () => {

    const emailInputRef = useRef();
    const passInputRef = useRef();
    const dispatch = useDispatch();

    const admLoginHandler = () => {
        const enteredEmail = emailInputRef.current.value;
        const enteredPass = passInputRef.current.value;
        if(enteredEmail == 'ujjaval1996@gmail.com' && enteredPass == '12345'){
            dispatch(RegisterActions.shwAuthData());
        }
        else alert('enter correct email/password');

        emailInputRef.current.value = '';
        passInputRef.current.value = '';
    }

    const loginHandler = () => {
        dispatch(RegisterActions.updateState());
        const shw = false;
        dispatch(RegisterActions.shwAdm(shw));
    }
    const regHandler = () => {
        const shw = false;
        dispatch(RegisterActions.shwAdm(shw));
    }


    return(
        <div>
             <section class="vh-100" style={{ backgroundColor: "white" }}>
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div class="card shadow-2-strong" style={{ borderRadius: "1rem" }}>
              <div class="card-body p-5 text-center">

                <h3 class="mb-5">Admin Sign in</h3>

                <div class="form-outline mb-4">
                  <input
                    type="email"
                    id="typeEmailX-2"
                    class="form-control form-control-lg"
                    ref={emailInputRef}
                  />
                  <label class="form-label" for="typeEmailX-2">
                    Email
                  </label>
                </div>

                <div class="form-outline mb-4">
                  <input
                    type="password"
                    id="typePasswordX-2"
                    class="form-control form-control-lg"
                    ref={passInputRef}
                  />
                  <label class="form-label" for="typePasswordX-2">
                    Password
                  </label>
                </div>

                <button onClick={admLoginHandler} class="btn btn-primary btn-lg btn-block" type="submit">
                  Login
                </button>

                <p class="text-center text-muted mt-5 mb-0">user login? <a href="#!"
                    class="fw-bold text-body"><u onClick={loginHandler}>Login here</u></a></p>
                    <p class="text-center text-muted mt-5 mb-0">new registration? <a href="#!"
                    class="fw-bold text-body"><u onClick={regHandler}>Register here</u></a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

        </div>
    );
}

export default AdminLogIn;