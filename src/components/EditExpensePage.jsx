import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  }

  onRemoveExpense = () => {
    this.props.removeExpense(this.props.expense);
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.onSubmit}
        />
        <button onClick={this.onRemoveExpense}>Remove</button>
      </div>
    );
  }
}

const mapStoreToProps = (state, props) => ({
  expense: state.expenses.find(expense => expense.id === props.match.params.id),
});

const mapDispatchToProps = dispatch => ({
  editExpense: (id, expense) => dispatch(editExpense(id, expense)),
  removeExpense: expense => dispatch(removeExpense(expense)),
});

export default connect(mapStoreToProps, mapDispatchToProps)(EditExpensePage);
