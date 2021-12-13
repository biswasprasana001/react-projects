const ExpenseForm = () => {
    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type = 'text' />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type = 'number' min = '0.01' step = '0.01' />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type = 'date' min = '2020-01-01' max = '2021-12-31'/>
                </div>
            </div>
            <div className="new-expense__actions"></div>
            <button type="submit">Add Expense</button>
        </form>
    );
};

export default ExpenseForm;