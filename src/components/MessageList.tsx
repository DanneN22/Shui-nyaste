import React from 'react';
import { Message } from '../types';
import { Pencil, Trash2 } from 'lucide-react';

interface MessageListProps {
  messages: Message[];
  onEdit: (message: Message) => void;
  onDelete: (id: string) => void;
}

export function MessageList({ messages, onEdit, onDelete }: MessageListProps) {
  return (
    <div className="messages">
      {messages.map((message) => (
        <div key={message.id} className="message">
          <div className="message-header">
            <div className="message-info">
              <span className="message-username">{message.username}</span>
              <span className="message-date">
                {new Date(message.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </div>
            <div className="message-actions">
              <button
                className="button edit"
                onClick={() => onEdit(message)}
                aria-label="Edit message"
              >
                <Pencil size={20} />
              </button>
              <button
                className="button delete"
                onClick={() => onDelete(message.id)}
                aria-label="Delete message"
              >
                <Trash2 size={20} />
              </button>
            </div>
          </div>
          <p className="message-text">{message.text}</p>
        </div>
      ))}
    </div>
  );
}