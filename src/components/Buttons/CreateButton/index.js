import { FAB } from "react-native-paper";
import { theme } from "../../../config/colors";
import styles from "./styles";

const CreateButton = (props) => {
  const navigation = props.navigation;

  return (
    <FAB
      onPress={() => navigation.navigate("Create")}
      style={styles.fab}
      small={false}
      icon="plus"
      theme={theme}
    />
  );
};

export default CreateButton;
