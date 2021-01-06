import * as React from 'react';

export interface UploadImageProps {
    
}
 
const UploadImage: React.FC<UploadImageProps> = () => {

    const savePhoto = () => {
        // https://codeburst.io/react-image-upload-with-kittens-cc96430eaece
    }

return <div>
    <form onSubmit={() => {}}></form>
    <label htmlFor="uploading-photo">Please set your photo</label>
    <input type="file" id="uploading-photo" name="photo" />
</div>
}
 
export default UploadImage;