export const COUNT_UP = '@@count/COUNT_UP';
export const COUNT_DOWN = '@@count/COUNT_DOWN';

export const countUp = () => (dispatch) => {
  dispatch({
    type: COUNT_UP
  });
};

export const countDown = () => (dispatch) => {
  dispatch({
    type: COUNT_DOWN
  });
};
