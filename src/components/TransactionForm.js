import { useState } from "react";

const TransactionForm = ({ addTransactionForm, setIsShow }) => {
  const [formValues, setFormValues] = useState({
    type: "expense",
    amount: "",
    desc: "",
  });

  const changeHandler = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addTransactionForm(formValues);
    setIsShow(false);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        name="desc"
        onChange={changeHandler}
        value={formValues.desc}
        placeholder="Describtion"
      />
      <input
        type="number"
        name="amount"
        onChange={changeHandler}
        value={formValues.amount}
        placeholder="Amount"
      />

      <div className="radioBox">
        <input
          type="radio"
          value="expense"
          name="type"
          onChange={changeHandler}
          checked={formValues.type === "expense"}
          id="expense"
        />
        <label htmlFor="expense">Expense</label>

        <input
          type="radio"
          value="income"
          name="type"
          onChange={changeHandler}
          checked={formValues.type === "income"}
          id="income"
        />
        <label htmlFor="income">Income</label>
      </div>
      <button className="btn primary" type="submit">
        Add Transaction
      </button>
    </form>
  );
};

export default TransactionForm;
