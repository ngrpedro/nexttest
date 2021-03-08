import { useState } from "react";

interface BillProps {
  description: string;
  amount: string;
  date: string;
  status: false;
}

export default function Bill(bill: BillProps) {
  const [isToggle, setIsToggle] = useState(false);

  function change() {
    let statusClass = isToggle ? "pago" : "aberto";
    return statusClass;
  }

  return (
    <>
      <div
        className={`column is-3 m-5 box ${change()}`}
        onClick={() => {
          setIsToggle(!isToggle);
        }}
      >
        <div className="columns">
          <div className="column is-4 is-flex is-align-items-center">
            <label className="">{bill.description}</label>
          </div>
          <div className="column is-4">
            <label className="">{bill.date}</label>
          </div>
          <div className="column is-4">
            <label className="">{bill.amount}</label>
          </div>
        </div>
      </div>
    </>
  );
}
