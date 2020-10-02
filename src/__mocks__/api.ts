import { Update } from '../@types/telegram';
import { SendMessage } from '../api';

const createMessage = (text: string): Update => ({
  update_id: 945306313,
  message: {
    message_id: 1,
    chat: {
      id: 514265933,
      first_name: '팔육칩',
      username: 'x86chi',
      type: 'private',
    },
    date: 1601611484,
    text,
  },
});

function api() {
  return {
    messages: [] as Update[],
    userSentMessage(text: string) {
      this.messages.push(createMessage(text));
    },
    getUpdates() {
      return Promise.resolve(this.messages);
    },
    // eslint-disable-next-line
    sendMessage(props: SendMessage) {},
  };
}

const apiInstance = api();

export default apiInstance;
