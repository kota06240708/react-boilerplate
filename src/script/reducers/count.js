import produce from 'immer';
import { COUNT_UP, COUNT_DOWN } from '../actions/count';

const initialState = {
  count: 0
};

export default (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case COUNT_UP:
        draft.count++;
        break;
      case COUNT_DOWN:
        if (state.count <= 0) return;
        draft.count--;
        break;
    }
  });
