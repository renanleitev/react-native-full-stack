import { Button } from "react-native-paper";
import { theme } from "../../../config/colors";
import { deleteData } from "../../../services/deleteData";
import { Alert } from "react-native";

const DeleteButton = (props) => {
  const navigation = props.navigation;
  const body = props.body;
  const buttonText = "Deletar";

  const deleteEmployee = async () => {
    try {
      const result = await deleteData(body);
      if (result) {
        Alert.alert(`${result.name} foi deletado!`);
        navigation.navigate("Home");
      }
    } catch (err) {
      console.log("deleteData", err);
    }
  };

  return (
    <Button
      icon="delete"
      mode="contained"
      theme={theme}
      onPress={() => deleteEmployee()}
    >
      {buttonText}
    </Button>
  );
};

export default DeleteButton;
