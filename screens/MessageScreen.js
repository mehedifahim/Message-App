import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function MessageScreen({ route }) {
  const { category, icon, color } = route.params;

  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

useEffect(() => {
  let welcomeMessage = '';
  let replyMessage = '';

  switch (category) {
    case 'Love':
      welcomeMessage = 'Good Evening, Love you...';
      replyMessage = '💖 Love you too!';
      break;
    case 'School':
      welcomeMessage = 'Welcome to School';
      replyMessage = '🏫 Good Morning!';
      break;
    case 'Friends':
      welcomeMessage = 'Good Afternoon Buddy!';
      replyMessage = '😄 Hey buddy!';
      break;
    case 'Family':
      welcomeMessage = 'Welcome to Family';
      replyMessage = '❤️ Miss you all!';
      break;
    case 'Home':
      welcomeMessage = 'Welcome to Home';
      replyMessage = '🛋️ Feels good to be home!';
      break;
    case 'You':
      setMessages([
        { id: '1', text: '✨ You can save your messages here from You', sent: false },
        { id: '2', text: '✅ Great!', sent: true },
      ]);
      return;
    default:
      welcomeMessage = `Welcome to ${category}`;
      replyMessage = 'Hello!';
  }

  setMessages([
    { id: '1', text: welcomeMessage, sent: false },
    { id: '2', text: replyMessage, sent: true },
  ]);
}, [category]);



  const sendMessage = () => {
    if (inputText.trim() === '') return;
    setMessages(prev => [
      ...prev,
      { id: Date.now().toString(), text: inputText, sent: true },
    ]);
    setInputText('');
  };

  const renderItem = ({ item }) => (
    <View
      style={[
        styles.messageBubble,
        item.sent ? styles.sent : styles.received,
      ]}
    >
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={80}
    >
      {/* Header */}
      <View style={[styles.header, { backgroundColor: color }]}>
        <Icon name={icon} size={24} color="#fff" style={styles.headerIcon} />
        <Text style={styles.headerTitle}>{category}</Text>
      </View>

      {/* Messages */}
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.messagesContainer}
      />

      {/* Input */}
      <View style={styles.inputContainer}>
        <TextInput
          value={inputText}
          onChangeText={setInputText}
          placeholder="Type a message"
          style={styles.input}
        />
        <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
          <Text style={styles.sendText}>Send</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5DDD5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 20,
    elevation: 4,
  },
  headerIcon: {
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  messagesContainer: {
    padding: 10,
  },
  messageBubble: {
    maxWidth: '75%',
    borderRadius: 20,
    padding: 10,
    marginVertical: 5,
  },
  sent: {
    backgroundColor: '#DCF8C6',
    alignSelf: 'flex-end',
  },
  received: {
    backgroundColor: '#FFF',
    alignSelf: 'flex-start',
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#CCC',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    fontSize: 16,
    padding: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 25,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#34B7F1',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  sendText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
