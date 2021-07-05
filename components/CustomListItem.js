import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import { StatusBar } from "expo-status-bar";

const CustomListItem = ({ id, chatName, enterChat }) => {
  return (
    <ListItem>
      <StatusBar style="light" />
      <Avatar
        rounded
        source={{ uri: "https://jpimg.com.br/uploads/2019/11/jungkook.jpg" }}
      />
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: "800" }}>
          Youtube Chat
        </ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          Mensagem aqui blabla
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default CustomListItem;

const styles = StyleSheet.create({});
