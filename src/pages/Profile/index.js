import React from "react";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import ConfigEmployees from "../../components/ConfigEmployees";
import CardInfo from "../../components/CardInfo";
import ProfilePicture from "../../components/ProfilePicture";
import ProfileTitle from "../../components/ProfileTitle";
import styles from "./styles";

const Profile = (props) => {
  const { _id, name, age, picture, phone, salary, email, position } =
    props.route.params.item;
  const body = {
    _id,
    name,
    age,
    email,
    phone,
    salary,
    picture,
    position,
  };
  const navigation = props.navigation;

  return (
    <View style={styles.root}>
      <LinearGradient
        colors={["#0033ff", "#6bc1ff"]}
        style={{ height: "20%" }}
      />
      <ProfilePicture picture={picture} />
      <ProfileTitle name={name} position={position} age={age}/>
      <CardInfo name="email" value={email} />
      <CardInfo name="phone" value={phone} />
      <CardInfo name="attach-money" value={salary} />
      <ConfigEmployees navigation={navigation} body={body} />
    </View>
  );
};

export default Profile;
