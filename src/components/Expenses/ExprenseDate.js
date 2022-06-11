import "./ExprenseDate.css";

function ExpenseDate(prop) {
  const month = prop.date.toLocaleString("en-US", { month: "long" });
  const day = prop.date.toLocaleString("en-US", { day: "2-digit" });
  const year = prop.date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}
export default ExpenseDate;
