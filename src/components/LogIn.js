import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RegisterActions } from "../store/RegisterSlice";

const LogIn = () => {

    const emailInputRef = useRef();
    const passInputRef = useRef();
  const dispatch = useDispatch();

  const data = useSelector((state) => state.register.appData);

  const regHandler = () => {
    dispatch(RegisterActions.updateState());
  };

  const admHandler = () => {
    const shw = true;
    dispatch(RegisterActions.shwAdm(shw));
    console.log('hi')
};

const submit1Handler = () => {
    const enteredEmail = emailInputRef.current.value;
    const enteredPass = passInputRef.current.value;
    const auth = false;
    dispatch(RegisterActions.authUserLogIn(auth));

    var data1 = data.filter((item) => item.email == enteredEmail && item.password == enteredPass);
    console.log(data1);

    dispatch(RegisterActions.updateDetails(data1));
    const auth1 = true;
    if(data1.length != 0 ){
        dispatch(RegisterActions.authUserLogIn(auth1));
    }
    else alert('not authorized');

    emailInputRef.current.value = '';
    passInputRef.current.value = '';


}

  return (
    <section class="vh-100" style={{ backgroundColor: "white" }}>
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div class="card shadow-2-strong" style={{ borderRadius: "1rem" }}>
              <div class="card-body p-5 text-center">
                <div style={{ display: "flex" }}>
                  <button
                    onClick={admHandler}
                    style={{ marginLeft: "auto", color: "blue" }}
                  >
                    Admin Panel
                  </button>
                </div>
                <hr class="my-4" />

                <h3 class="mb-5">Sign in</h3>

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

                <button onClick={submit1Handler} class="btn btn-primary btn-lg btn-block" type="submit">
                  Login
                </button>

                <hr class="my-4" />

                <p class="text-center text-muted mt-5 mb-0">
                  New Here?{" "}
                  <a href="#!" class="fw-bold text-body">
                    <u onClick={regHandler}>Register</u>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogIn;
