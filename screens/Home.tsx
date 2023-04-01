import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useState } from "react";
import { EvilIcons, Feather } from "@expo/vector-icons";
import { TextInput } from "react-native";
import { width } from "../constants/Layout";
import styles from "./styles/home.style";
import ListComp from "../components/ListComp";
import AddModal from "../components/AddModal";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <View style={styles.container}>
      {showModal && <AddModal setShowModal={setShowModal} />}
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
        data={new Array(10).fill(0)}
        keyExtractor={(item, i) => i.toString()}
        renderItem={ListComp}
      />
    </View>
  );
};

export default Home;
