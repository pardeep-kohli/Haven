import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { colors } from "../assets/themes/colors";

export default function UploadImage() {
  return (
    <View style={{marginVertical:10}}>
        <Text style={{fontFamily:'Regular',marginBottom:5}}>Upload Image</Text>
    <View
      style={{
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        borderColor:colors.grey,
        
      }}
    >
      <TouchableOpacity>
        <Text style={{ padding: 30,fontFamily:'SemiBold', }}>Choose File</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({});
