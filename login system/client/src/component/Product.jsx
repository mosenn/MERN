import axios from "axios";
import { useEffect, useState } from "react";

const Product = () => {
  const [token, setToken] = useState("");
  const query = new URLSearchParams(location.search);
  const code = query.get("code");

  const getAccessToken = async () => {
    try {
      const data = axios.get("http://localhost:3000/login/github/callback");
      console.log(data, "data");
      console.log("data");
      //   const access_token_url = "https://github.com/login/oauth/access_token";
      //   const params = new URLSearchParams({
      //     client_id: "373605aaa0df2e4fecde",
      //     client_secret: "badf3526e253134654713e907d82b3436c53849e",
      //     code: code,
      //   });

      //   const response = await axios.post(access_token_url, params, {
      //     headers: {
      //       "Content-Type": "application/x-www-form-urlencoded",
      //       Accept: "application/json",
      //       "User-Agent": "register login github react",
      //     },
      //   });
      //   const token = new URLSearchParams(response.data).get("access_token");
      //   console.log("token:", token);
      //   setToken(token);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (code) {
      getAccessToken();
    }
  }, [code]);

  if (token) {
    return (
      <div>
        <h1>PRODUCT</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>First login pls</h1>
    </div>
  );
};

export default Product;
