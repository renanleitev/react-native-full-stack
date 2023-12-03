import { View, Text } from "react-native";
import { Title } from "react-native-paper";
import styles from "./styles";

const ProfileTitle = (props) => {
  const name = props.name;
  const position = props.position;
  const age = props.age;

  return (
    <View style={styles.container}>
      <Title>{name}</Title>
      <Text style={styles.text}>{age} anos</Text>
      <Text style={styles.text}>{position}</Text>
    </View>
  );
};

export default ProfileTitle;
