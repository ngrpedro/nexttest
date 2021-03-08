import { useState } from "react";

export default function AddBill() {
  const [input, setInput] = useState("");

  return (
    <>
      <form className="column is-12">
        <div className="column is-12 is-flex">
          <div className="column is-4">
            <label className="label">Descrição</label>
            <div className="control">
              <input
                className="input"
                type="text"
                onChange={(event) => setInput(event.target.value)}
              />
            </div>
            <label>valor input: {input}</label>
          </div>
          <div className="column is-4">
            <label className="label">Vencimento</label>
            <div className="control">
              <input className="input" type="text" placeholder="DD/MM/AAAA" />
            </div>
          </div>
          <div className="column is-4">
            <label className="label">Valor</label>
            <div className="control">
              <input className="input" type="text" placeholder="R$0,00" />
            </div>
          </div>
        </div>
        <div className="column is-12">
          <button className="button ml-3 isPrimary" type="submit">
            Button
          </button>
        </div>
      </form>
    </>
  );
}
