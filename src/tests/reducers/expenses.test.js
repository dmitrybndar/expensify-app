import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const action = {
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  };
  const state = expensesReducer([expenses[0], expenses[1]], action);
  expect(state).toEqual(expenses);
});

test('should edit an expense', () => {
  const updates = {
    descriptiopn: 'new description',
    amount: 500
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[2].id,
    updates
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([
    expenses[0],
    expenses[1],
    { ...expenses[2], ...updates }
  ]);
});

test('should no edit expense if expense not found', () => {
  const updates = {
    descriptiopn: 'new description',
    amount: 500
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});