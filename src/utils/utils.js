export const getToken = () => {
  return document.cookie.includes("token")
    ? document.cookie
      .split("; ")
      .filter((value) => value.startsWith("token"))[0]
      .split("=")[1]
    : null;
};

export const toBase64 = file => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = error => reject(error);
});
