export interface TextPart {
  type: string;
  text: string;
}

export interface Message {
  id: number;
  type: string;
  date: string;
  from: string;
  text?: string | TextPart[];
  file?: {
    mime_type: string;
    url: string;
    thumbnail?: string;
  };
  photo?: {
    url: string;
  };
  sticker?: {
    emoji: string;
    url: string;
  };
}

export interface ChatData {
  name: string;
  type: string;
  messages: Message[];
} 