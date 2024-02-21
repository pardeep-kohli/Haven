import { View, Text, StyleSheet } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import React from 'react';
import { colors } from '../assets/themes/colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default function CustomDropdown({ label, data, ...props }) {
  return (
    <View>
      <Text style={styles.labelText}>{label}</Text>
      <View style={{ flexDirection: 'row' }}>
        <SelectDropdown
          data={data}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
          buttonStyle={styles.dropdown}
          buttonTextStyle={styles.textButton}
          rowTextStyle={styles.rowText}
          dropdownStyle={styles.dropdownStyle}
          {...props}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dropdown: {
    borderRadius: 5,
    width: '100%',
    borderWidth: 0.8,
    borderColor: colors.grey,
    backgroundColor: colors.white,
    elevation:2,
    marginBottom:15
  },
  labelText: {
    fontFamily: 'Medium',
    marginBottom: 5,
  },
  textButton: {
    textAlign: 'left',
    fontSize: 14,
    alignSelf: 'center',
    justifyContent: 'center',
    color: colors.accent,
    fontFamily: 'Medium',
    marginLeft: -1,
  },
  rowText: {
    fontSize: wp(3.5),
    alignSelf: 'center',
    justifyContent: 'center',
    color: colors.accent,
    fontFamily: 'Medium',
  },
  dropdownStyle: {
    borderRadius: 10,
  },
});
