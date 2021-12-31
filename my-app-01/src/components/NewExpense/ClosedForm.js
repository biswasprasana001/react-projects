import "./ClosedForm.css";

const ClosedForm = (props) => {
  const buttonHandler = () => {
    props.switch(true);
  };
  return (
    <div className="new-expense">
      <button onClick={buttonHandler}>Add Expense</button>
    </div>
  );
};

export default ClosedForm;
