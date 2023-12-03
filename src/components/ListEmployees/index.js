import { Card } from "react-native-paper";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import styles from "./styles";

const ListEmployees = (props) => {
  const data = props.data;
  const navigation = props.navigation;
  const fetchData = props.fetchData;
  const loading = props.loading;

  const renderList = (item) => {
    return (
      <Card
        style={styles.mycard}
        onPress={() => navigation.navigate("Profile", { item })}
      >
        <View style={styles.cardView}>
          <Image
            style={{ width: 60, height: 60, borderRadius: 30 }}
            source={{ uri: item.picture }}
          />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.text}>{item.position}</Text>
          </View>
        </View>
      </Card>
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => {
        return renderList(item);
      }}
      keyExtractor={(item) => item._id}
      onRefresh={() => fetchData()}
      refreshing={loading}
    />
  );
};

export default ListEmployees;
