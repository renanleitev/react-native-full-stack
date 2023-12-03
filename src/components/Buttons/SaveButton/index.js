import { Alert } from "react-native";
import { Button } from "react-native-paper";
import { sendData } from "../../../services/sendData";
import styles from "./styles";
import { theme } from "../../../config/colors";

const SaveButton = (props) => {
  const navigation = props.navigation;
  const body = props.body;
  const buttonText = "Salvar";

  const submitData = async () => {
    try {
      const result = await sendData(body);
      if (result) {
        Alert.alert(`${result.name} foi cadastrado com sucesso!`);
        navigation.navigate("Home");
      }
    } catch (err) {
      console.log("submitData", err);
    }
  };

  return (
    <Button
      style={styles.inputStyle}
      icon="content-save"
      mode="contained"
      theme={theme}
      onPress={() => submitData()}
    >
      {buttonText}
    </Button>
  );
};

export default SaveButton;
