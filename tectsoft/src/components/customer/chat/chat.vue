<template>
  <v-card
      width="1500"
      class="mx-auto"
  >

    <v-row>
      <v-col md="3">
        <list-chats></list-chats>
      </v-col>
      <v-col>
        <message-chat></message-chat>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>

import MessageChat from "@/components/customer/chat/messageChat";
import ListChats from "@/components/customer/chat/listChats";

export default {
  name: "Chat",
  components: {ListChats, MessageChat}
}
</script>

<style scoped>
</style>
