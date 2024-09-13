import { View } from "react-native";
import ListIcon from "../icons/ListIcon";
import MapIcon from "../icons/MapIcon";

export default function TabBarItems() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 32,
      }}
    >
      <MapIcon />
      <ListIcon />
    </View>
  );
}
