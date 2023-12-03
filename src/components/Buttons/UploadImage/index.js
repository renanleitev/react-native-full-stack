import { Button } from "react-native-paper";
import { theme } from "../../../config/colors";
import styles from "./styles";

const UploadImageButton = (props) => {
  const picture = props.picture;
  const setModal = props.setModal;
  const buttonText = "Upload de Imagem";

  return (
    <Button
      style={styles.inputStyle}
      icon={picture == "" ? "upload" : "check"}
      mode="contained"
      theme={theme}
      onPress={() => setModal(true)}
    >
      {buttonText}
    </Button>
  );
};

export default UploadImageButton;
