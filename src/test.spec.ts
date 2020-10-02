import { call, put } from 'redux-saga/effects';
import { Update } from './@types/telegram';

import actions from './store/actions';
import { echoWorker } from './store/sagas';

import api from './api';

jest.mock('./api');

describe('Echo Worker', async () => {
  const gen = echoWorker();

  let updates: Update[];

  api.userSentMessage('/start');

  test('Get messages', async (done) => {
    const { value } = gen.next();
    expect(value).toStrictEqual(call(api.getUpdates));
    updates = await api.getUpdates();
    done();
  });
  test('Echo message to User', () => {
    const { message } = updates[updates.length - 1];

    const chatId = message.chat.id;
    const { text } = message;
    expect(gen.next().value).toStrictEqual(
      call(api.sendMessage, { chatId, text })
    );
  });

  test('Try Echo message by interval. But not receive new message', () => {
    expect(gen.next().value).toStrictEqual(put(actions.notReceiveNewMessage));
  });
});
