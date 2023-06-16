import axios from "axios";
const urluploadimg = `https://api.cloudinary.com/v1_1/dm6tmiksw2/image/upload`;
const data = new FormData();
export const uploadRegisterImage = async (pic: string) => {
  //   console.log(pic, "this pic");
  data.append("file", pic);
  data.append("upload_preset", "upload_image_projects");
  data.append("cloudName", "dm6tmiksw2");
  console.log(urluploadimg, " data for upload");
  const dataImage = await axios.post(urluploadimg, data);
  console.log(
    dataImage.data.secure_url,
    "this data coming from response with axios"
  );
};
