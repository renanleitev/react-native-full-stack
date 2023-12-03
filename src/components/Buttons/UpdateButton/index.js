import { Alert } from "react-native";
import { Button } from "react-native-paper";
import { theme } from "../../../config/colors";
import { updateData } from "../../../services/updateData";
import styles from "./styles";

const UpdateButton = (props) => {
  const navigation = props.navigation;
  const body = props.body;
  const buttonText = "Atualizar Detalhes";

  const updateDetails = async () => {
    try {
      const result = await updateData(body);
      if (result) {
        Alert.alert(`${result.name} foi editado com sucesso!`);
        navigation.navigate("Home");
      }
    } catch (err) {
      console.log("updateDetails", err);
    }
  };

  return (
    <Button
      style={styles.inputStyle}
      icon="content-save"
      mode="contained"
      theme={theme}
      onPress={() => updateDetails()}
    >
      {buttonText}
    </Button>
  );
};

export default UpdateButton;
