import { PayloadAction } from '@reduxjs/toolkit';

import { Store } from '../@types/store';
import { Update } from '../@types/telegram';
import { SEND_MESSAGE } from './actions';

type Action = PayloadAction<Update[]>;

const reducer = (state: Store, action: Action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
