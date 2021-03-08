import NavBar from "../../src/components/NavBar";
import Bill from "../../src/components/Bill";
import AddBill from "../../src/components/AddBill";

import db from "../../db";
import { useEffect, useState } from "react";

export default function FirstPost() {
  const [bills, setBills] = useState([]);

  useEffect(() => {
    const getBills = () => {
      let list = db.getBills();
      setBills(list);

      console.log(list);
    };

    getBills();
  }, []);

  return (
    <>
      <NavBar />

      <div className="container">
        <div className="columns is-multiline mt-3">
          <AddBill />

          {bills.map((item, key) => (
            <Bill
              key={key}
              description={item.description}
              amount={item.amount}
              date={item.date}
              status={item.status}
            />
          ))}
        </div>
      </div>
    </>
  );
}
