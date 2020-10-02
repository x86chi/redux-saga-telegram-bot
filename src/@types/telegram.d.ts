export interface Update {
  update_id: number;
  message: {
    message_id: number;
    from?: From;
    chat: Chat;
    date: number;
    text: string;
  };
}

interface From {
  id: number;
  is_bot: boolean;
  first_name: string;
  username: string;
  language_code: 'en' | 'ko'; // TODO;
}

export interface Chat {
  id: number;
  first_name: string;
  username: string;
  type: 'private' | 'group' | 'supergroup' | 'channel';
}
