import * as React from "react";

const UploadImage: React.FC<{}> = () => {
  return (
    <div>
      <label htmlFor="uploading-photo">Please set your photo</label>
      <input type="file" id="uploading-photo" name="photo" />
    </div>
  );
};

export default UploadImage;
