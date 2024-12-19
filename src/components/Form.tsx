// import React, { useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 char" }),
  age: z.number({ invalid_type_error: "Age is required" }).min(18),
});

type FormData = z.infer<typeof schema>;
// interface FormData {
//   name: string;
//   age: number;
// }

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  //   const [person, setPerson] = useState({
  //     name: "",
  //     age: "",
  //   });
  //   const nameRef = useRef<HTMLInputElement>(null);
  //   const ageRef = useRef<HTMLInputElement>(null);
  //   const person = { name: "", age: 0 };
  const onSubmit = (data: FieldValues) => console.log(data);
  return (
    // div.mb-3>label.from-label+input.form-control
    <form
      onSubmit={
        handleSubmit(onSubmit)
        // (e) => {
        // e.preventDefault();
        // if (nameRef.current !== null) person.name = nameRef.current.value;
        // if (ageRef.current !== null)
        //   person.age = parseInt(ageRef.current.value);
        // console.log(person);
        //   }
      }
    >
      <div className="mb-3">
        <label htmlFor="name" className="from-label">
          Name
        </label>
        <input
          {...register("name")}
          /*ref={nameRef}*/ id="name"
          type="text"
          className="form-control"
        />
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="age" className="from-label">
          Age
        </label>
        <input
          {...register("age", { valueAsNumber: true })}
          /*ref={ageRef}*/ id="age"
          type="number"
          className="form-control"
        />
        {errors.age && <p className="text-danger">{errors.age.message}</p>}
      </div>
      <button disabled={!isValid} className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
