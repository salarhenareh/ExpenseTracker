import { useEffect, useState } from "react";
import OverView from "./OverView";
import Transaction from "./Transaction";

const ExpenseApp = () => {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const addTransactionForm = (formValues) => {
    setTransactions([...transactions, { ...formValues, id: Date.now() }]);
  };

  useEffect(() => {
    let exp = 0;
    let inc = 0;
    transactions.forEach((t) => {
      t.type === "expense" ? (exp = exp + parseFloat(t.amount)) : (inc = inc + parseFloat(t.amount));
    });
    setExpense(exp);
    setIncome(inc);
  }, [transactions]);

  return (
    <section className="container">
      <OverView
        income={income}
        expense={expense}
        addTransactionForm={addTransactionForm}
      />
      <Transaction transactions={transactions} />
    </section>
  );
};

export default ExpenseApp;
