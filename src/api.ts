import { Update } from './@types/telegram';

export interface SendMessage {
  chatId: number;
  text: string;
}

// TODO: connect to telegram API
function api() {
  return {
    messages: [] as Update[],
    // eslint-disable-next-line
    userSentMessage(text: string) {},
    getUpdates() {
      return Promise.resolve(this.messages);
    },
    // eslint-disable-next-line
    sendMessage(props: SendMessage) {},
  };
}

const apiInstance = api();

export default apiInstance;
