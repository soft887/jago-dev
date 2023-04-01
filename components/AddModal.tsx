import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { SetStateAction } from "react";
import { Ionicons } from "@expo/vector-icons";
import inputData from "../constants/inputData";

type Props = {
  setShowModal: React.Dispatch<SetStateAction<boolean>>;
};

const AddModal = ({ setShowModal }: Props) => {
  const RowInput = ({ item }: any) => (
    <View style={styles.rowInput}>
      <View style={styles.inLabel}>
        <Text>{item.leftText}</Text>
        <TextInput style={styles.textInput} placeholder="" />
      </View>
      <View
        style={[
          styles.inLabel,
          {
            marginLeft: 10,
          },
        ]}
      >
        <Text>{item.righText}</Text>
        <TextInput style={styles.textInput} placeholder="" />
      </View>
    </View>
  );

  return (
    <View style={styles.modal}>
      <View style={styles.modalForm}>
        <View style={styles.title}>
          <Text>项目追加</Text>
          <Pressable onPress={() => setShowModal(false)}>
            <Ionicons name="close" size={30} color="black" />
          </Pressable>
        </View>
        <View style={styles.formInputCont}>
          <FlatList
            data={inputData}
            keyExtractor={(it) => it.leftText + it.righText}
            renderItem={RowInput}
          />
        </View>
        <Pressable onPress={() => setShowModal(false)} style={styles.button}>
          <Text
            style={{
              color: "white",
            }}
          >
            追加
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default AddModal;

const styles = StyleSheet.create({
  modal: {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.4)",
    zIndex: 10,
    paddingTop: 30,
    paddingHorizontal: 10,
  },
  modalForm: {
    backgroundColor: "#fff",
    flexDirection: "column",
    padding: 20,
    borderRadius: 15,
  },
  title: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 2,
    borderBottomColor: "#DADADA",
    width: "100%",
    alignItems: "center",
  },
  formInputCont: {
    flexDirection: "column",
    width: "100%",
    paddingTop: 30,
  },
  rowInput: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  inLabel: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
  },
  textInput: {
    borderColor: "#DADADA",
    borderWidth: 2,
    borderRadius: 10,
    padding: 5,
    paddingHorizontal: 10,
    marginTop: 3,
  },
  button: {
    backgroundColor: "#F8B502",
    paddingVertical: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: 10,
  },
});
