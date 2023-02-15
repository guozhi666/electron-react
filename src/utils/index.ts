
function formatImg(img: any) {
  const blob = new Blob([img], {type: 'image/png'})
  const url = window.URL.createObjectURL(blob);
  return url;
}

export {
  formatImg,
}