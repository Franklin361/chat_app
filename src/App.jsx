import React from 'react'
import { AuthProvider } from './auth/AuthContext';
import { ChatProvider } from './context/chatContext/ChatContext';
import { SocketProvider } from './context/SocketContext';
import { AppRouter } from './router/AppRouter'

const App = () => {
  return (
    <AppState>
      <AppRouter />
    </AppState>
  )
}

const AppState = ({ children }) => {
  return (
    <ChatProvider>
      <AuthProvider>
        <SocketProvider>
          {children}
        </SocketProvider>
      </AuthProvider>
    </ChatProvider>
  )
};

export default App
