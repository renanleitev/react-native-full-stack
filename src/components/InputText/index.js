import { TextInput } from "react-native-paper";
import { theme } from "../../config/colors";
import styles from "./styles";

const InputText = (props) => {
  const label = props.label;
  const value = props.value;
  const onChangeText = props.onChangeText;
  const keyboardType = props.keyboardType;
  const setEnableShift = props.setEnableShift;

  const handleShift = () => {
    switch (label) {
      case "Cargo":
        setEnableShift(true);
        break;
      case "Salário":
        setEnableShift(true);
        break;
      default:
        setEnableShift(false);
        break;
    }
  };

  return (
    <TextInput
      label={label}
      style={styles.inputStyle}
      value={value}
      onFocus={handleShift}
      theme={theme}
      mode="outlined"
      keyboardType={keyboardType && keyboardType}
      onChangeText={onChangeText}
    />
  );
};

export default InputText;
