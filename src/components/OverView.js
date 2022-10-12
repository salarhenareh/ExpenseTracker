import { useState } from "react";
import TransactionForm from "./TransactionForm";

const OverView = ({ income, expense, addTransactionForm }) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div>
      <div className="topSection">
        <p>Balance: {income - expense}</p>
        <button
          className={`btn ${isShow && "cancel"}`}
          onClick={() => setIsShow(!isShow)}
        >
          {isShow ? "Cancel" : "Add"}
        </button>
      </div>

      {isShow && (
        <TransactionForm
          addTransactionForm={addTransactionForm}
          setIsShow={setIsShow}
        />
      )}

      <div className="resultSection">
        <div className="expenseBox">
          Expense: <span style={{ color: "red" }}>{expense} $</span>
        </div>
        <div className="expenseBox">
          Income: <span>{income} $</span>
        </div>
      </div>
    </div>
  );
};

export default OverView;
