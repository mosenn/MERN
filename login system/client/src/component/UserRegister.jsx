import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormRegister from "./FormRegister";
const UserRegister = () => {
  const navigate = useNavigate();

  const [dataUserRegister, setDataUserRegister] = useState("");
  const [userRegisterError, setUserRegisterError] = useState([]);

  useEffect(() => {
    console.log(dataUserRegister, "data user register");
    console.log(userRegisterError, "data err");
    if (dataUserRegister.data) {
      console.log(dataUserRegister.data, "data user register in submit");
      localStorage.setItem("userData", JSON.stringify(dataUserRegister.data));
      navigate("/profile");
    }
  }, [dataUserRegister, userRegisterError]);

  return (
    <div>
      {userRegisterError.length > 0 &&
        userRegisterError?.map((items, index) => {
          return (
            <div key={index}>
              <p>{items}</p>
            </div>
          );
        })}
      <FormRegister
        setDataUserRegister={setDataUserRegister}
        setUserRegisterError={setUserRegisterError}
      />
    </div>
  );
};

export default UserRegister;
