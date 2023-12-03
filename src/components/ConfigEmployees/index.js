import { View } from "react-native";
import EditButton from "../Buttons/EditButton";
import DeleteButton from "../Buttons/DeleteButton";
import styles from "./styles";

const ConfigEmployees = (props) => {
  const navigation = props.navigation;
  const body = props.body;

  return (
    <View
      style={styles.container}
    >
      <EditButton navigation={navigation} body={body} />
      <DeleteButton navigation={navigation} body={body} />
    </View>
  );
};

export default ConfigEmployees;
