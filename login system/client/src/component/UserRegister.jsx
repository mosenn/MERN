import { useState } from "react";

const UserRegister = () => {
  const [registerValue, setRegisterValue] = useState({
    email: "",
    password: "",
    confrimPassword: "",
  });
  const onchangeHandleRegister = (inputs) => {
    setRegisterValue({
      ...registerValue,
      [inputs.target.name]: inputs.target.value,
    });
  };
  const handleSubmit = (form) => {
    form.preventDefault();
    console.log(registerValue);
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="email"
          value={registerValue.email}
          onChange={onchangeHandleRegister}
        />
        <input
          type="text"
          name="password"
          placeholder="password"
          value={registerValue.password}
          onChange={onchangeHandleRegister}
        />
        <input
          type="text"
          name="confrimPassword"
          placeholder="confrim password"
          value={registerValue.confrimPassword}
          onChange={onchangeHandleRegister}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default UserRegister;
