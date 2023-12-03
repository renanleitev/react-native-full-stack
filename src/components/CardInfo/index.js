import { Card } from "react-native-paper";
import { Text, View, Linking, Platform } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "./styles";

const CardInfo = (props) => {
  const name = props.name;
  const value = props.value;

  const openDial = () => {
    if (name === "phone") {
      if (Platform.OS === "android") {
        Linking.openURL(`tel:${value}`);
      } else {
        Linking.openURL(`telprompt:${value}`);
      }
    } else if (name === "email") {
      Linking.openURL(`mailto:${value}`);
    }
  };

  return (
    <Card style={styles.mycard} onPress={() => openDial()}>
      <View style={styles.cardContent}>
        <MaterialIcons name={name} size={32} color="#006aff" />
        <Text style={styles.mytext}>{value}</Text>
      </View>
    </Card>
  );
};

export default CardInfo;
