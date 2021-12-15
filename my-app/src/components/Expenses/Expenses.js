import React from "react";
import ExpensesFilter from "./ExpenseFilter/ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import { useState } from "react";

const Expenses = (props) => {
  const [newSelectYear, setSelectYear] = useState("2022");
  const onSelectYear = (onSelectYear) => {
    setSelectYear(onSelectYear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter selectValue={newSelectYear} onSelectYear={onSelectYear} />
      {props.items.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
