import React, { useEffect } from "react";
import { View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import CreateButton from "../../components/Buttons/CreateButton";
import ListEmployees from "../../components/ListEmployees";
import { getData } from "../../services/getData";
import Carousel from "../../components/Carousel/carousel";
import { dummyData } from "../../../assets/data";

const Home = ({ navigation, route }) => {
  const dispatch = useDispatch();

  const { data, loading } = useSelector((state) => {
    return state;
  });

  const fetchData = async () => {
    try {
      const results = await getData();
      dispatch({ type: "ADD_DATA", payload: results });
      dispatch({ type: "SET_LOADING", payload: false });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, [data]);

  return (
    <View style={{ flex: 1 }}>
      <Carousel data={dummyData} />
      <ListEmployees
        data={data}
        navigation={navigation}
        fetchData={fetchData}
        loading={loading}
      />
      <CreateButton navigation={navigation} />
    </View>
  );
};

export default Home;
