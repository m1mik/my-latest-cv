import React from "react";
import { updaloadAvatar } from "../../services/user";
import CircularProgress from "@material-ui/core/CircularProgress";

const UploadImage: React.FC<{}> = () => {
  const [percentageProgress, setPercentageProgress] = React.useState(0);
  return (
    <div>
      <label htmlFor="uploading-photo">Please set your photo</label>
      <input
        type="file"
        id="uploading-photo"
        name="photo"
        onChange={updaloadAvatar(setPercentageProgress)}
      />
      <CircularProgress value={percentageProgress} />
    </div>
  );
};

export default UploadImage;
