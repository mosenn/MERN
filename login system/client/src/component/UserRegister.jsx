const UserRegister = () => {
  return (
    <div>
      <form action="">
        <input type="text" name="email" placeholder="email" />
        <input type="text" name="password" placeholder="password" />
        <input
          type="text"
          name="confrimPassword"
          placeholder="confrim password"
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default UserRegister;
