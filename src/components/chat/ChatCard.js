import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import { colors } from '../../assets/themes/colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const ChatCard = ({ message, time }) => {
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <View style={styles.messageContainer}>
        <Text style={styles.messageText}>{message}</Text>
        <Text style={styles.timeText}>{time}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    // marginRight: 10, 
    minHeight: 40, 
    alignSelf:"flex-end"
  },
  messageContainer: {
    position: 'relative',
    maxWidth: '95%', 
    backgroundColor: colors.accent, 
    padding: 10,
    borderRadius: 10,
  },
  messageText: {
    fontSize: wp(3.5),
    fontFamily:'Medium',
    color:colors.white
  },
  timeText: {
    fontSize: 12,
     
    // position: 'absolute',
    // bottom: 5,
    // right: 10,
    alignSelf:'flex-end',
    fontFamily:'Regular',
    color:colors.white
  },
});

export default ChatCard;
