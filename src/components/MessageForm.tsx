import React, { useState, useEffect } from 'react';
import { Message } from '../types';

interface MessageFormProps {
  onSubmit: (username: string, text: string) => void;
  editingMessage: Message | null;
}

export function MessageForm({ onSubmit, editingMessage }: MessageFormProps) {
  const [username, setUsername] = useState('');
  const [text, setText] = useState('');

  useEffect(() => {
    if (editingMessage) {
      setUsername(editingMessage.username);
      setText(editingMessage.text);
    } else {
      setUsername('');
      setText('');
    }
  }, [editingMessage]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username.trim() || !text.trim()) return;
    
    onSubmit(username.trim(), text.trim());
    
    if (!editingMessage) {
      setText('');
    }
  };

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What's on your mind?"
          required
        />
      </div>
      
      <button type="submit" className="button">
        {editingMessage ? 'Update Message' : 'Post Message'}
      </button>
    </form>
  );
}