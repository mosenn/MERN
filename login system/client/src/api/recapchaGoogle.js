import axios from "axios";

export const postTokenRecapchaGoogle = async (googleToken) => {
  console.log(googleToken, "google recap token in _api");

  const responseRecapcha = await axios.post(
    //*add server address
    "http://localhost:3000/recapcha",
    {
      googleRecapchaToken: googleToken,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  console.log("response recapcha", responseRecapcha);
  return responseRecapcha;
};
