import { Alert } from "react-native";
import { Button } from "react-native-paper";
import { theme } from "../../../config/colors";
import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import handleUpload from "../../../services/handleUpload";

const CameraButton = (props) => {
  const setModal = props.setModal;
  const setPicture = props.setPicture;
  const buttonText = "Câmera";

  const pickFromCamera = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status === "granted") {
      let data = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
      });
      if (!data.canceled) {
        let newfile = {
          uri: data.assets[0].uri,
          type: `test/${data.assets[0].uri.split(".")[1]}`,
          name: `test.${data.assets[0].uri.split(".")[1]}`,
        };
        const picture = handleUpload(newfile);
        setModal(false);
        setPicture(picture);
      }
    } else {
      Alert.alert("você precisa de permissão para isso");
    }
  };

  return (
    <Button
      icon="camera"
      theme={theme}
      mode="contained"
      onPress={() => pickFromCamera()}
    >
      {buttonText}
    </Button>
  );
};

export default CameraButton;
