import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
import Card from "./Card";
function Expense(props) {
  return (
    <div class="expenses">
      <ExpenseItem
        title={props.allProp[0].title}
        amount={props.allProp[0].amount}
        date={props.allProp[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.allProp[1].title}
        amount={props.allProp[1].amount}
        date={props.allProp[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.allProp[2].title}
        amount={props.allProp[2].amount}
        date={props.allProp[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.allProp[3].title}
        amount={props.allProp[3].amount}
        date={props.allProp[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default Expense;
