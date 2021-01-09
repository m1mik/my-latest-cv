import axios from "axios";

const baseUrl = "localhost:8080";

export const updaloadAvatar = async (event: any) => {
  let data = new FormData();
  for (let index = 0; index < event.target.files; index++) {
    data.append(index.toString(), event.target.files[index]);
  }

  const options = {
    onUploadProgress: (progressEvent: any) => {
      const { loaded, total } = progressEvent;
      let percent = Math.floor((loaded * 100) / total);
    },
  };

  // call setState for percent change

  axios.post(`${baseUrl}/user/upload-avatar`, data, options);
};
