export const DECREMENT = 'DECREMENT';
export const decrement = (number = 1) => ({
  type: DECREMENT,
  payload: number,
});
