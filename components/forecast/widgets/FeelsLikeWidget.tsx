import { DEGREE_SYMBOL } from "@/utils/constants";
import { FontAwesome5 } from '@expo/vector-icons';
import React from "react";
import { StyleSheet } from "react-native";
import Widget, { WidgetDimensionsProps } from "./base/Widget";


const FeelsLikeWidget = ({width,height}:WidgetDimensionsProps) => {
  return (
    <Widget width={width} height={height}>
      <Widget.Header
        contentText="Feels Like"
        Icon={FontAwesome5}
        iconProps={{ name: "temperature-high" }}
      />
      <Widget.Body
        contentText={`19${DEGREE_SYMBOL}`}
        contentSize="Large"
        
      ></Widget.Body>
      <Widget.Footer contentText="Similar to the actual temperature." />
    </Widget>
  );
};

export default FeelsLikeWidget;

const styles = StyleSheet.create({});
