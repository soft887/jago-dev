import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "#F2F2F2",
  },
  navCont: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    height: 60,
    paddingHorizontal: 10
  },
  banner: {
    width: "100%",
    height: 25,
    backgroundColor: "#012864",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  searchCont: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginTop: 10,
  },
  search: {
    width: "100%",
    flex: 1,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    marginHorizontal: 3,
  },
  searchInput: {
    width: "100%",
    flex: 1,
    height: 40,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    borderWidth: 0,
    borderColor: "transparent",
  },
  plusButton: {
    width: 40,
    height: 40,
    backgroundColor: "#012864",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
