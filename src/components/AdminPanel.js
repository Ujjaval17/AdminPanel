import { useDispatch, useSelector } from "react-redux";
import { RegisterActions } from "../store/RegisterSlice";

const AdminPanel = () => {

    const dispatch = useDispatch();


    const data = useSelector((state) => state.register.newData);

    console.log(data);

    var apprvData = useSelector((state) => state.register.appData);

    
    console.log(apprvData);
    

    const approveHandler = (key) =>{
        apprvData = data.filter((item) => item.email == key);
        dispatch(RegisterActions.approvedData(apprvData));
        console.log(apprvData);
        var data1 = data.filter((item) => item.email != key);
         dispatch(RegisterActions.updateDetails(data1));
    }

    const rejectHandler = (key) =>{
        var data1 = data.filter((item) => item.email != key);
         dispatch(RegisterActions.updateDetails(data1));
        console.log(data1);
    }

    const admHandler = () => {
        dispatch(RegisterActions.shwAuthData());
        const shw = true;
        dispatch(RegisterActions.shwAdm(shw));
    }
  return (
    <>
      <section class="vh-100" style={{ backgroundColor: "white" }}>
        <div class="container py-6 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-20 col-md-15 col-lg-12 col-xl-9">
              <div
                class="card shadow-2-strong"
                style={{ borderRadius: "1rem" }}
              >
                <div class="card-body p-5 text-center">
                  <div style={{ display: "flex" }}>
                    <button onClick={admHandler} style={{ marginLeft: "auto", color: "red" }}>
                      Close
                    </button>
                  </div>{" "}
                  <br />
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Phone No</th>
                        <th scope="col">Address</th>
                        <th scope="col">Email</th>
                        <th scope="col">Password</th>
                      </tr>
                    </thead>
                    <tbody>
                    {data.map((newData) => (
            <tr key={newData.email}>
              <td>{newData.name}</td>
              <td>{newData.phoneNo}</td>
              <td>{newData.address}</td>
              <td>{newData.email}</td>
              <td>{newData.password}</td>
              <td>
                <button style={{color: 'green'}}
                  type="button"
                  onClick={() => approveHandler(newData.email)}
                >
                  A
                </button>
                &nbsp;
                <button style={{color: 'red'}}
                  type="button"
                  onClick={() => rejectHandler(newData.email)}
                >
                  X
                </button>
              </td>
            </tr>
          ))}
                    </tbody>
                  </table>
                </div>
                        <div style={{ display: "flex" }}>
                        <h5 style={{ marginLeft: "40%" }}>Approved Users</h5>
                        </div>
                <div class="card-body p-5 text-center">
                  
                  <br />
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Phone No</th>
                        <th scope="col">Address</th>
                        <th scope="col">Email</th>
                        <th scope="col">Password</th>
                      </tr>
                    </thead>
                    <tbody>
                    {apprvData.map((item) => (
            <tr key={item.email}>
              <td>{item.name}</td>
              <td>{item.phoneNo}</td>
              <td>{item.address}</td>
              <td>{item.email}</td>
              <td>{item.password}</td>
            </tr>
          ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminPanel;
