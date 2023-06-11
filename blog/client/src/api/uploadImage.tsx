import axios from "axios";
const urluploadimg = `https://api.cloudinary.com/v1_1/dm6tmiksw2/image/upload`;
const data = new FormData();
export const uploadRegisterImage = async (pic: string) => {
  console.log(pic, "this pic");
  data.append("file", pic);
  data.append("upload_preset", "chatapp");
  data.append("cloudName", "dm6tmiksw");
  console.log(urluploadimg, " data for upload");
  fetch(urluploadimg, {
    method: "POST",
    body: data,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
};
