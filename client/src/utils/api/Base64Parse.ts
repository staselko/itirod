/* eslint-disable prefer-destructuring */
export const convertBase64 = (file: Blob) => new Promise<any>((resolve, reject) => {
  const fileReader = new FileReader();
  fileReader.readAsDataURL(file);
  fileReader.onload = () => {
    resolve(fileReader.result);
  };
  fileReader.onerror = (error) => {
    reject(error);
  };
});

export function urltoFile(url: string, filename: string, mimeType: string = 'image/png') {
  return (fetch(url)
    .then((res) => res.arrayBuffer())
    .then((buf) => new File([buf], filename, { type: mimeType }))
  );
}
