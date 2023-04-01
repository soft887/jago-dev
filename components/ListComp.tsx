import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ListComp = () => {
  return (
    <View style={styles.liCont}>
      <View style={styles.upperTile}>
        <View style={styles.left}>
          <View style={styles.status}></View>
          <Text>海贝</Text>
        </View>
        <Text>压力测试20</Text>
        <Text>郝红叶</Text>
      </View>
      <View style={styles.lowerTile}>
        <Text>华北 - 河北 - 石家庄</Text>
        <Text>2023-03-11 10:04</Text>
      </View>
    </View>
  );
};

export default ListComp;

const styles = StyleSheet.create({
  liCont: {
    flexDirection: "column",
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 10,
    position: "relative",
    padding: 10,
    marginTop: 5,
  },
  upperTile: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 2,
    borderBottomColor: "#DADADA",
    paddingVertical: 5,
  },
  left: {
    flexDirection: "row",
  },
  status: {
    width: 5,
    height: 5,
    backgroundColor: "#0f0",
    borderRadius: 50,
    marginRight: 5,
  },
  lowerTile: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
  },
});
