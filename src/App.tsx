import { MantineProvider } from '@mantine/core';
import { ChatView } from './components/ChatView';
import '@mantine/core/styles.css';

function App() {
  return (
    <MantineProvider>
      <ChatView />
    </MantineProvider>
  );
}

export default App;
