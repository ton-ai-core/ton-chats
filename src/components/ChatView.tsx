import { useEffect, useState } from 'react';
import { Box, Container, Paper, Text, Stack, UnstyledButton } from '@mantine/core';
import dayjs from 'dayjs';
import { Message, ChatData, TextPart } from '../types/message';

const renderTextContent = (text: string | TextPart[]) => {
  if (typeof text === 'string') {
    return text;
  }
  return text.map((part, index) => {
    if (part.type === 'text') {
      return <span key={index}>{part.text}</span>;
    }
    if (part.type === 'link') {
      return <a key={index} href={part.text} target="_blank" rel="noopener noreferrer">{part.text}</a>;
    }
    if (part.type === 'mention') {
      return <span key={index} style={{ color: '#1e88e5' }}>{part.text}</span>;
    }
    return <span key={index}>{part.text}</span>;
  });
};

const isMessageEmpty = (message: Message): boolean => {
  return !message.text && !message.photo && !message.sticker && !message.file;
};

export function ChatView() {
  const [chatData, setChatData] = useState<ChatData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/ChatExport_2025-02-08/result.json')
      .then(response => response.json())
      .then(data => {
        // Фильтруем пустые сообщения и сортируем по дате в обратном порядке
        const sortedMessages = [...data.messages]
          .filter(msg => !isMessageEmpty(msg))
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        
        setChatData({
          ...data,
          messages: sortedMessages
        });
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading chat data:', error);
        setLoading(false);
      });
  }, []);

  const handleMessageClick = (messageId: number) => {
    window.open(`https://t.me/tactlang/${messageId}`, '_blank');
  };

  if (loading) {
    return <Text>Загрузка чата...</Text>;
  }

  if (!chatData) {
    return <Text>Ошибка загрузки данных</Text>;
  }

  return (
    <Container size="md">
      <Paper shadow="sm" p="md" mt="md">
        <Text fw={700} size="xl" mb="md">{chatData.name}</Text>
        <Stack gap="md">
          {chatData.messages.map((message: Message) => (
            <UnstyledButton
              key={message.id}
              onClick={() => handleMessageClick(message.id)}
              style={{ width: '100%', cursor: 'pointer' }}
            >
              <Box
                style={{
                  padding: '1rem',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '8px',
                  transition: 'background-color 0.2s',
                  '&:hover': {
                    backgroundColor: '#e9ecef',
                  }
                }}
              >
                <Text fw={500} size="sm" c="blue">{message.from}</Text>
                <Text size="xs" c="dimmed">{dayjs(message.date).format('DD.MM.YYYY HH:mm')}</Text>
                {message.text && (
                  <Text mt="xs">
                    {renderTextContent(message.text)}
                  </Text>
                )}
                {message.photo && (
                  <Box mt="xs">
                    <img src={message.photo.url} alt="Photo" style={{ maxWidth: '100%', borderRadius: '4px' }} />
                  </Box>
                )}
                {message.sticker && (
                  <Box mt="xs">
                    <img src={message.sticker.url} alt={message.sticker.emoji} style={{ width: '128px' }} />
                  </Box>
                )}
                {message.file && (
                  <Box mt="xs">
                    <a 
                      href={message.file.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Скачать файл ({message.file.mime_type})
                    </a>
                  </Box>
                )}
              </Box>
            </UnstyledButton>
          ))}
        </Stack>
      </Paper>
    </Container>
  );
} 