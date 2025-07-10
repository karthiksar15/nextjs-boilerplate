'use client';

import React from 'react';
import config from './config';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';

export default function Page() {
  return (
    <div className="container mx-auto p-4">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-center">My Chatbot App</h1>
      </header>
      <main>
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      </main>
    </div>
  );
}