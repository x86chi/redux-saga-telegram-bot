import { call, put } from 'redux-saga/effects';
import { Update } from '../@types/telegram';

import store from '.';
import actions from './actions';

import api from '../api';

export function* echoWorker() {
  while (true) {
    const messages: Update[] = yield call(api.getUpdates);
    if (store.getState().messages.length === messages.length) {
      put(actions.notReceiveNewMessage);
    } else {
      const { message } = messages[messages.length - 1];
      const chatId = message.chat.id;
      const { text } = message;

      yield call(api.sendMessage, { chatId, text });
      store.dispatch(actions.updateMessages(messages));
    }
  }
}

export default function* echoWatcher() {
  yield call(echoWorker);
}
