import { useEffect, useState } from "react";

const Transaction = (props) => {
  const [serachItem, setSearchItem] = useState("");
  const [filteredTnx, setFilteredTnx] = useState(props.transactions);

  const filterTransactions = (search) => {
    if (!search || search === "") {
      setFilteredTnx(props.transactions);
      return;
    }
    const filtered = props.transactions.filter((t) =>
      t.desc.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredTnx(filtered);
  };

  const searchHandler = (e) => {
    setSearchItem(e.target.value);
    filterTransactions(e.target.value);
    console.log(props);
    console.log(props.transactions);
  };

  useEffect(() => {
    filterTransactions(serachItem);
  }, [props.transactions]);

  if(!props.transactions.length) return <h3>add some transaction</h3>

  return (
    <section>
      <input
        className="search"
        type="text"
        value={serachItem}
        onChange={searchHandler}
        placeholder="search for transactions"
      />
      {filteredTnx.length
        ? filteredTnx.map((t) => (
            <div
              className="transaction"
              key={t.id}
              style={{ borderRight: t.type === "expense" && "4px solid red" }}
            >
              <span>{t.desc}</span>
              <span>${t.amount}</span>
            </div>
          ))
        : "no item matchs"}
    </section>
  );
};

export default Transaction;
