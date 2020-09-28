// libs
import { expose } from 'comlink';

const processImage = (file: File | null) => {
  // eslint-disable-next-line no-console
  console.log('Start to process image...');
  const seconds = 5;
  const start = new Date().getTime();
  const delay = seconds * 1000;
  while (true) {
    if (new Date().getTime() - start > delay) {
      break;
    }
  }
  // eslint-disable-next-line no-console
  console.log('Finished processing');
  return file;
};

const localExports = {
  processImage,
};

export type ImageWorker = typeof localExports;

expose(localExports);
