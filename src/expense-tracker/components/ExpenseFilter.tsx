import categories from "../categories";

interface Props {
  onSelect: (category: string) => void;
}

const ExpenseFilter = ({ onSelect }: Props) => {
  return (
    <select className="from-select" onChange={(e) => onSelect(e.target.value)}>
      <option value="All categories">All categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
