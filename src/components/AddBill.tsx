export default function AddBill() {

  const hadleSubmit = (event) => {
      console.log(event.target)
  }

  return (
    <>
        <form className="column is-12" onSubmit={hadleSubmit}>
          <div className="column is-4">
            <label className="label">Descrição</label>
            <div className="control">
              <input className="input" type="text" />
            </div>
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
          <div className="column is-12">
            <button className="button mt-4 isPrimary" type="submit">
              Button
            </button>
          </div>
        </form>
    </>
  );
}
