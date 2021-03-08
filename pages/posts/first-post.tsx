import NavBar from "../../src/components/NavBar";
import Bill from "../../src/components/Bill";
import AddBill from "../../src/components/AddBill";

export default function FirstPost() {
  return (
    <>
      <NavBar />

      <div className="container">
        <div className="columns is-multiline mt-3">
          <AddBill />

          <Bill
            description="Água"
            amount="R$80,00"
            date="10/03/2021"
            status={false}
          />
          <Bill
            description="Aluguel"
            amount="R$650,00"
            date="25/03/2021"
            status={false}
          />
          <Bill
            description="Energia"
            amount="R$650,00"
            date="25/03/2021"
            status={false}
          />
          <Bill
            description="Água"
            amount="R$650,00"
            date="25/03/2021"
            status={false}
          />
          <Bill
            description="Água"
            amount="R$650,00"
            date="25/03/2021"
            status={false}
          />
        </div>
      </div>
    </>
  );
}
