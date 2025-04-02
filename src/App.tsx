import React, { useState, useEffect } from 'react';
import { MessageForm } from './components/MessageForm';
import { MessageList } from './components/MessageList';
import { Message } from './types';

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [editingMessage, setEditingMessage] = useState<Message | null>(null);

  useEffect(() => {
    // Simulated API call to fetch messages
    const fetchMessages = async () => {
      // TODO: Replace with actual API call
      const mockMessages: Message[] = [
        {
          id: '1',
          username: 'John Doe',
          text: 'This is a sample message to show how the text appears in the message card. The styling has been updated to match the Figma design exactly.',
          createdAt: new Date().toISOString(),
        },
        {
          id: '2',
          username: 'Jane Smith',
          text: 'Another message to demonstrate the consistent spacing and styling between messages.',
          createdAt: new Date(Date.now() - 86400000).toISOString(),
        },
      ];
      setMessages(mockMessages);
    };

    fetchMessages();
  }, []);

  const handleSubmit = async (username: string, text: string) => {
    if (editingMessage) {
      // Update existing message
      const updatedMessage = {
        ...editingMessage,
        username,
        text,
      };
      
      // TODO: Replace with actual API call
      setMessages(messages.map(msg => 
        msg.id === editingMessage.id ? updatedMessage : msg
      ));
      setEditingMessage(null);
    } else {
      // Create new message
      const newMessage: Message = {
        id: Date.now().toString(),
        username,
        text,
        createdAt: new Date().toISOString(),
      };
      
      // TODO: Replace with actual API call
      setMessages([newMessage, ...messages]);
    }
  };

  const handleEdit = (message: Message) => {
    setEditingMessage(message);
  };

  const handleDelete = async (id: string) => {
    // TODO: Replace with actual API call
    setMessages(messages.filter(msg => msg.id !== id));
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Message Board</h1>
      </header>
      
      <MessageForm
        onSubmit={handleSubmit}
        editingMessage={editingMessage}
      />
      
      <MessageList
        messages={messages}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;