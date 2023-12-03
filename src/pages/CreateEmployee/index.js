import React, { useState } from "react";
import { View, KeyboardAvoidingView } from "react-native";
import UpdateButton from "../../components/Buttons/UpdateButton";
import SaveButton from "../../components/Buttons/SaveButton";
import UploadImage from "../../components/UploadImage";
import InputText from "../../components/InputText";
import { getDetails } from "../../services/getDetails";
import styles from "./styles";

const CreateEmployee = ({ navigation, route }) => {
  const [name, setName] = useState(getDetails("name", route));
  const [age, setAge] = useState(getDetails("age", route));
  const [phone, setPhone] = useState(getDetails("phone", route));
  const [email, setEmail] = useState(getDetails("email", route));
  const [salary, setSalary] = useState(getDetails("salary", route));
  const [picture, setPicture] = useState(getDetails("picture", route));
  const [position, setPosition] = useState(getDetails("position", route));
  const [enableShift, setEnableShift] = useState(false);
  const body = JSON.stringify({
    name,
    email,
    phone,
    salary,
    picture,
    position,
  });

  return (
    <KeyboardAvoidingView
      behavior="position"
      style={styles.root}
      enabled={enableShift}
    >
      <View>
        <InputText
          label="Nome"
          value={name}
          onChangeText={(text) => setName(text)}
          setEnableShift={setEnableShift}
        />
        <InputText
          label="Idade"
          value={age}
          onChangeText={(text) => setAge(text)}
          setEnableShift={setEnableShift}
          keyboardType="number-pad"
        />
        <InputText
          label="E-mail"
          value={email}
          onChangeText={(text) => setEmail(text)}
          setEnableShift={setEnableShift}
        />
        <InputText
          label="Telefone"
          value={phone}
          onChangeText={(text) => setPhone(text)}
          setEnableShift={setEnableShift}
          keyboardType="number-pad"
        />
        <InputText
          label="Salário"
          value={salary}
          onChangeText={(text) => setSalary(text)}
          setEnableShift={setEnableShift}
          keyboardType="number-pad"
        />
        <InputText
          label="Cargo"
          value={position}
          onChangeText={(text) => setPosition(text)}
          setEnableShift={setEnableShift}
        />
        <UploadImage picture={picture} setPicture={setPicture} />
        {route.params ? (
          <UpdateButton navigation={navigation} body={body} />
        ) : (
          <SaveButton navigation={navigation} body={body} />
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

export default CreateEmployee;
