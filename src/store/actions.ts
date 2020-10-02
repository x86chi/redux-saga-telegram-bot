import { createAction } from '@reduxjs/toolkit';
import { SendMessage } from '../api';

import { Update } from '../@types/telegram';

export const [SEND_MESSAGE, NOT_RECEIVE_NEW_MESSAGE, UPDATE_MESSAGE] = [
  'SEND_MESSAGE',
  'NOT_RECEIVE_NEW_MESSAGE',
  'UPDATE_MESSAGE',
] as const;

const sendMessage = createAction<SendMessage>(SEND_MESSAGE);
const updateMessages = createAction<Update[]>(UPDATE_MESSAGE);
const notReceiveNewMessage = createAction(NOT_RECEIVE_NEW_MESSAGE);

export default {
  sendMessage,
  updateMessages,
  notReceiveNewMessage,
};
