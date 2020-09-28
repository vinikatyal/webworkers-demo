// libs
import { wrap } from 'comlink';

function processImage(file: File | null) {
  const worker = new Worker('./ImageWorker', { name: 'image', type: 'module' });
  const workerApi = wrap<import('./ImageWorker').ImageWorker>(worker);
  return workerApi.processImage(file);
}

export default processImage;
