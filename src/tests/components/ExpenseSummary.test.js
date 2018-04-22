import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render ExpensesSummary correctly with one expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expenseTotal={145}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary correctly with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={23} expenseTotal={3656785678567} />);
  expect(wrapper).toMatchSnapshot();
});

