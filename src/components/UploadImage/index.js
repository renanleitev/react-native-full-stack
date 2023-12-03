import { Button } from "react-native-paper";
import { View, Modal } from "react-native";
import { useState } from "react";
import { theme } from "../../config/colors";
import CameraButton from "../Buttons/CameraButton";
import GalleryButton from "../Buttons/GalleryButton";
import styles from "./styles";

const UploadImage = (props) => {
  const picture = props.picture;
  const setPicture = props.setPicture;
  const [modal, setModal] = useState(false);
  const uploadText = "Upload de Imagem";
  const cancelText = "Cancelar";

  return (
    <>
      <Button
        style={styles.inputStyle}
        icon={picture == "" ? "upload" : "check"}
        mode="contained"
        theme={theme}
        onPress={() => setModal(true)}
      >
        {uploadText}
      </Button>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        onRequestClose={() => {
          setModal(false);
        }}
      >
        <View style={styles.modalView}>
          <View style={styles.modalButtonView}>
            <CameraButton setModal={setModal} setPicture={setPicture} />
            <GalleryButton setModal={setModal} setPicture={setPicture} />
          </View>
          <Button theme={theme} onPress={() => setModal(false)}>
            {cancelText}
          </Button>
        </View>
      </Modal>
    </>
  );
};

export default UploadImage;
