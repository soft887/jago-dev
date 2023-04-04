import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import { useState } from "react";
import { EvilIcons, Feather } from "@expo/vector-icons";
import { TextInput } from "react-native";
import styles from "./screens/styles/home.style";
import AddModal from "../components/AddModal";
import ListComp from "../components/ListComp";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(new Array(10).fill(0));

  const loadData = () => {
    setIsLoading(true);
    // fetch data from API or local storage
    // for example, using the Fetch API:
    const newData = new Array(5).fill(0);
    setTimeout(() => {
      setData([...data, ...newData]);
    }, 2000);
    setIsLoading(false);
  };

  const RenderFooter = () => {
    if (!isLoading) return null;
    return (
      <View
        style={{
          paddingVertical: 20,
          backgroundColor: "red",
          position: "absolute",
          top: 0,
          width: "100%",
          height: "100%",
          zIndex: 999,
        }}
      >
        <Text>Footer</Text>
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {showModal && <AddModal setShowModal={setShowModal} />}
      { isLoading && <View
        style={{
          paddingVertical: 20,
          position: "absolute",
          bottom: 0,
          width: "100%",
          zIndex: 999,
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>}
      <View style={styles.navCont}>
        <Image
          width={40}
          height={40}
          source={require("../assets/images/menu.png")}
        />
        <Text>项目管理</Text>
        {/* <View> */}
        <Image
          width={60}
          height={60}
          source={require("../assets/images/user.png")}
        />
        {/* </View> */}
      </View>
      <View style={styles.banner}>
        <Text
          style={{
            color: "#fff",
          }}
        >
          海贝/压力测试20/2023-03-10
        </Text>
      </View>
      <View style={styles.searchCont}>
        <View style={styles.search}>
          <EvilIcons name="search" size={24} color="black" />
          <TextInput style={styles.searchInput} placeholder="门店名称" />
        </View>
        <Pressable onPress={() => setShowModal(true)} style={styles.plusButton}>
          <Feather name="plus" size={24} color="white" />
        </Pressable>
      </View>
      <FlatList
        style={{
          marginTop: 3,
        }}
        data={data}
        keyExtractor={(item, i) => i.toString()}
        renderItem={ListComp}
        onEndReached={loadData}
        onEndReachedThreshold={0.5}
        // ListFooterComponent={renderFooter}
      />
    </View>
  );
};

export default Home;
