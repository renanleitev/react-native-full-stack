const handleUpload = (image) => {
  const data = new FormData();
  data.append("file", image);
  data.append("upload_preset", "employeeApp");
  data.append("cloud_name", "dxnoiuj66");

  fetch("https://api.cloudinary.com/v1_1/dxnoiuj66/image/upload", {
    method: "post",
    body: data,
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      Alert.alert("erro durante o upload");
    });
};

export default handleUpload;
