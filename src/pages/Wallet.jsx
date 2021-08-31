import React from "react";
import ExpensesForm from "../Components/ExpensesForm";
import Header from "../Components/Header";

class Wallet extends React.Component {
    render() {
      return(
        <div>
          <Header />
          <ExpensesForm />
        </div>
      )
    };
}

export default Wallet;
