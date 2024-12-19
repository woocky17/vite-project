import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import categories from "../categories";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description must be at least 3 char" })
    .max(100),
  amount: z
    .number({ invalid_type_error: "Amount is required" })
    .min(1)
    .max(100_000),
  category: z.enum(categories, {
    errorMap: () => ({ message: "category is required" }),
  }),
});
type FormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: FormData) => void;
}

const ExpenseTracker = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
    >
      <div className="mb-3">
        <label htmlFor="Description" className="from-label">
          Description
        </label>
        <input
          {...register("description")}
          id="Description"
          type="text"
          className="form-control"
        />
      </div>
      {errors.description && (
        <p className="text-danger">{errors.description.message}</p>
      )}
      <div className="mb-3">
        <label htmlFor="Amount" className="from-label">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          id="Amount"
          type="number"
          className="form-control"
        />
      </div>
      {errors.amount && <p className="text-danger">{errors.amount.message}</p>}
      <div className="mb-3">
        <label htmlFor="Category" className="from-label">
          Category
        </label>
        <select
          {...register("category")}
          id="Category"
          className="form-control"
        >
          <option value=""></option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <br />
        <button className="btn btn-primary">Submit</button>
      </div>
    </form>
  );
};

export default ExpenseTracker;
