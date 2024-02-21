import { ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import ChatCard from "../../../components/chat/ChatCard";
import ChatHeader from "../../../components/chat/ChatHeader";
import ChatCardOther from "../../../components/chat/ChatCardOther";
import { SafeAreaView } from "react-native-safe-area-context";
import ChatInput from "../../../components/chat/ChatInput";

export default function ChatScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground style={{flex:1}} source={require('../../../assets/images/chat/background.png')}>
      <ChatHeader backPress={() => navigation.goBack()} />
      <ScrollView style={{padding:10}}>
        <ChatCard message="Hey, how are you?" time="10:00 AM" />
        <ChatCardOther message="Hi! I'm good, thanks." time="10:05 AM" />
        <ChatCard message="What's up?" time="10:10 AM" />
        <ChatCardOther message="Not much, just chilling." time="10:15 AM" />
        <ChatCard message="Did you finish the assignment?" time="10:20 AM" />
        <ChatCardOther
          message="No, not yet. I'll finish it by tomorrow."
          time="10:25 AM"
        />
        <ChatCard
          message="Alright, let me know if you need help."
          time="10:30 AM"
        />
        <ChatCardOther message="Sure thing, thanks!" time="10:35 AM" />
        <ChatCard
          message="What do you want to do this weekend?"
          time="10:40 AM"
        />
        <ChatCardOther
          message="I'm thinking of going hiking. Want to join?"
          time="10:45 AM"
        />
        <ChatCard message="Sounds fun! I'm in." time="10:50 AM" />
        <ChatCardOther
          message="Great! Let's plan the details later."
          time="10:55 AM"
        />
        <ChatCard message="Sure, see you then." time="11:00 AM" />
        <ChatCardOther message="Bye!" time="11:05 AM" />
        <ChatCard message="Goodbye!" time="11:10 AM" />
        <ChatCardOther message="Take care!" time="11:15 AM" />
        <ChatCard message="You too!" time="11:20 AM" />
        <ChatCardOther message="Have a great day!" time="11:25 AM" />
        <ChatCard message="You too, bye!" time="11:30 AM" />
        <ChatCardOther message="Bye!" time="11:35 AM" />
      </ScrollView>
        <ChatInput placeholder={"Type your message"} />
        </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
