import * as React from 'react'
import UploadImage from "./deps/UploadImage";
import DownloadCVLink from "./deps/DownloadCVLink";
import CVPreview from "./deps/CVPreview";

const CV = () =>
<div>
    <CVPreview />
    <DownloadCVLink />
    <UploadImage />
</div>

export default CV
