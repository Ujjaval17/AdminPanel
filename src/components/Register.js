import { useRef } from "react";
import { useDispatch } from "react-redux/es/exports";
import { RegisterActions } from "../store/RegisterSlice";

const Register = () => {
const dispatch = useDispatch();

const nameInputRef = useRef();
const phnInputRef = useRef();
const addInputRef = useRef();
const emailInputRef = useRef();
const passInputRef = useRef();

    const loginHandler = () => {
        dispatch(RegisterActions.updateState());
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredPhn = phnInputRef.current.value;
        const enteredAdd = addInputRef.current.value;
        const enteredEmail = emailInputRef.current.value;
        const enteredPass = passInputRef.current.value;

        var data = {
            name : enteredName,
            phoneNo : enteredPhn,
            address : enteredAdd,
            email : enteredEmail,
            password : enteredPass,
            auth : false
        }
        dispatch(RegisterActions.getData(data));
        console.log(data);

        nameInputRef.current.value = '';
        phnInputRef.current.value = '';
        addInputRef.current.value = '';
        emailInputRef.current.value = '';
        passInputRef.current.value = '';

    
    }

   

    const admHandler = () => {
        const shw = true;
        dispatch(RegisterActions.shwAdm(true));
        console.log('hi')
    }

    return(
        <section class="vh-100 bg-image"
  style={{backgroundImage:'https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp'}}>
  <div class="mask d-flex align-items-center h-100 gradient-custom-3">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
          <div class="card" style={{borderRadius:" 15px"}}>
            <div class="card-body p-5">
            <div style={{ display: "flex" }}>
                <button onClick={admHandler} style={{marginLeft: 'auto', color: 'blue'}}>Admin Panel</button>
            </div>
            <hr class="my-4"/>
              <h2 class="text-uppercase text-center mb-5">Registration</h2>

              <form>

                <div class="form-outline mb-4">
                  <input type="text" id="form3Example1cg" class="form-control form-control-lg" ref={nameInputRef} />
                  <label class="form-label" for="form3Example1cg" >Your Name</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="text" id="form3Example1cg" class="form-control form-control-lg"  ref={phnInputRef} />
                  <label class="form-label" for="form3Example1cg">Phone No</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="text" id="form3Example1cg" class="form-control form-control-lg" ref={addInputRef} />
                  <label class="form-label" for="form3Example1cg" >Address</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="email" id="form3Example3cg" class="form-control form-control-lg" ref={emailInputRef} />
                  <label class="form-label" for="form3Example3cg" >Your Email</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="password" id="form3Example4cg" class="form-control form-control-lg" ref={passInputRef} />
                  <label class="form-label" for="form3Example4cg" >Password</label>
                </div>


                <div class="d-flex justify-content-center">
                <button class="btn btn-primary btn-lg btn-block" type="submit" onClick={submitHandler}>Register</button>
                </div>

                <p class="text-center text-muted mt-5 mb-0">Have already an account? <a href="#!"
                    class="fw-bold text-body"><u onClick={loginHandler}>Login here</u></a></p>

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    );
}

export default Register;