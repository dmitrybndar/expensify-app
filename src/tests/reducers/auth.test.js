import authReducer from '../../reducers/auth';

test('should set uid for login action', () => {
  const action = {
    type: 'LOGIN',
    uid: 'gjfdklgj435345',
  };
  const state = authReducer({}, action);
  expect(state).toEqual({
    uid: action.uid,
  });
});

test('should set uid for login action', () => {
  const action = {
    type: 'LOGOUT',
  };
  const state = authReducer({ uid: 'gjfdklgj435345' }, action);
  expect(state).toEqual({});
});
