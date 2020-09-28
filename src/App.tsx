import React, { memo, useState } from 'react';
import processImage from './webWorkers';

function App() {
  const [imageUrl, setImageUrl] = useState<File | any>();

  async function setImage(selectorFiles: File[] | any) {
    const file = selectorFiles[0];
    const img: File | any = await processImage(file);
    setImageUrl(img);
  }
  return (
    <>
      Process image
      <div>
        <input
          onChange={e => setImage(e.target.files)}
          type="file"
          accept="image/*"
          name="image"
          id="image"
        />
        <label>Open Image</label>
      </div>
      <div>{imageUrl && imageUrl.size}</div>
    </>
  );
}

export default memo(App);