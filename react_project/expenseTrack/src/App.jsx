import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import expenseData from "./expenseData";
import "./App.css";
import useLocaleStorage from "./hooks/useLocaleStorage";

function App() {
  const [expense, setExpense] = useLocaleStorage('expense',{
    title: "",
    category: "",
    amount: "",
  });

  // const [expenses, setExpenses] = useState(expenseData);
  const [expenses, setExpenses] = useLocaleStorage("expenses", expenseData);
  const [editindRowId, setEditingRowId] = useLocaleStorage("editindRowId",'');

  // const [loacalData, setLocalData] = useLocaleStorage("myNum", [1, 2, 3]);

  // console.log(loacalData);

  return (
    <>
      <main>
        <h1>Track Your Expense</h1>
        <div className="expense-tracker">
          <ExpenseForm
            setExpenses={setExpenses}
            expense={expense}
            setExpense={setExpense}
            editindRowId={editindRowId}
            setEditingRowId={setEditingRowId}
          />
          <ExpenseTable
            expenses={expenses}
            setExpenses={setExpenses}
            setExpense={setExpense}
            setEditingRowId={setEditingRowId}
          />
        </div>
      </main>
    </>
  );
}

export default App;
