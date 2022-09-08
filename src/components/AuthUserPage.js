import { useDispatch, useSelector } from "react-redux";
import { RegisterActions } from "../store/RegisterSlice";

const AuthUserPage = () => {

    const data = useSelector((state) => state.register.newData);
    const dispatch = useDispatch();
    const closeUserInfo = () => {
        var shw = false;
        dispatch(RegisterActions.authUserLogIn(shw));
    };

    return(
        <div>
            <h4>Hello User</h4>
            <section class="vh-100" style={{ backgroundColor: "white" }}>
        <div class="container py-6 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-20 col-md-15 col-lg-12 col-xl-9">
              <div
                class="card shadow-2-strong"
                style={{ borderRadius: "1rem" }}
              >
                <div style={{ display: "flex" }}>
                    <button onClick={closeUserInfo} style={{ marginLeft: "auto", color: "red" }}>
                      X
                    </button>
                  </div>
                <div class="card-body p-5 " style={{ marginLeft:'20%'}}>
                    <h5>Name&emsp;&emsp;&nbsp;:&emsp; {data[0].name}</h5>
                    <h5>Phone No &nbsp;:&emsp; {data[0].phoneNo}</h5>
                    <h5>Address &ensp; &nbsp;:&emsp; {data[0].address}</h5>
                    <h5>Email &emsp;&emsp;&nbsp;:&emsp; {data[0].email}</h5>
                    <h5>Password &ensp;:&emsp; {data[0].password}</h5>
                </div>
                </div>
                </div>
                </div>
                </div>
                </section>
        </div>
    );
    
}

export default AuthUserPage;