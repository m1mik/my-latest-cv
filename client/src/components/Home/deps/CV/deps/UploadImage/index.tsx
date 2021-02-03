import React from "react";
import { updaloadAvatar } from "@services/user";

const UploadImage: React.FC<{}> = () => {
  const [, setPercentageProgress] = React.useState(0);
  return (
    <div>
      <label htmlFor="uploading-photo">Please set your photo</label>
      <input
        type="file"
        id="uploading-photo"
        name="photo"
        onChange={updaloadAvatar(setPercentageProgress)}
      />
    </div>
  );
};

export default UploadImage;
