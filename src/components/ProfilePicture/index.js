import { View, Image } from "react-native";
import styles from "./styles";

const ProfilePicture = (props) => {
  const picture = props.picture;

  return (
    <View style={styles.container}>
      <Image
        style={styles.picture}
        source={{ uri: picture }}
      />
    </View>
  );
};

export default ProfilePicture;
