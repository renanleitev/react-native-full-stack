import { Button } from "react-native-paper";
import { theme } from "../../../config/colors";

const EditButton = (props) => {
  const navigation = props.navigation;
  const body = props.body;
  const buttonText = "Editar";

  return (
    <Button
      icon="account-edit"
      mode="contained"
      theme={theme}
      onPress={() => {
        navigation.navigate("Create", body);
      }}
    >
      {buttonText}
    </Button>
  );
};

export default EditButton;
