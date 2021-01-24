import axios from "axios";

const baseUrl = "http://localhost:8080";

export const updaloadAvatar = (callback: any) => (event: any) => {
    let data = new FormData();
    const file = event.target.files[0];
    data.append("file", file)

    const options = {
      onUploadProgress: (progressEvent: any) => {
        console.log("in inner event handler");
        const { loaded, total } = progressEvent;
        let percent = Math.floor((loaded * 100) / total);
        callback(percent);
      },
    };

    // call setState for percent change

    axios.post(`${baseUrl}/user/upload-avatar`, data, options).then(() => callback(100))
};
