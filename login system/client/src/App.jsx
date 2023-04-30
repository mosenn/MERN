import { useEffect, useState } from "react";
import googleOneTap from "google-one-tap";
import "./App.css";

function App() {
  const options = {
    client_id:
      "845524452469-96ntqo560ee26fbsdq0u5ma5hh2l48fi.apps.googleusercontent.com",
    auto_select: false,
    cancel_on_tab_outside: false,
    context: "signin",
  };

  const [googelData, setGoogelData] = useState(
    localStorage.getItem("logingoogle")
      ? JSON.parse(localStorage.getItem("logingoogle"))
      : null
  );

  const loginWithGoogle = () => {
    googleOneTap(options, (response) => {
      // Send response to server
      console.log(response);
    });
  };
  useEffect(() => {
    try {
      loginWithGoogle();
    } catch (err) {
      console.log("err", err);
    }
  }, []);
  return (
    <section className="App">
      <h1>Hello system login</h1>
    </section>
  );
}

export default App;
