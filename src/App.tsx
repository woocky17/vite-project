import { useEffect, useRef, useState } from "react";
// import { produce } from "immer";

// import ListGroup from "./components/ListGroup";
// import Alert from "./components/Alert";
// import Button from "./components/Button";
// import Like from "./components/LikeButton";

// import ExpandableText from "./components/ExpandableText";
// import { FaMagnifyingGlass } from "react-icons/fa6";

// import Form from "./components/Form";
// import ExpenseTracker from "./components/expense-tracker/components/ExpenseForm";
// import ExpenseList from "./components/expense-tracker/components/ExpenseList";
// import ExpenseFilter from "./components/expense-tracker/components/ExpenseFilter";

// import ProductList from "./components/ProductList";
// import axios, { AxiosError, CanceledError } from "axios";
import { CanceledError } from "./services/api-client";
import userService, { User } from "./services/userService";
import useUsers from "./hooks/useUsers";

// const connect = () => console.log("Connecting");
// const disconnect = () => console.log("Disconnecting");

function App() {
  /!* ------------------------------- Managing Component State ------------------------------- */;

  // let item = ["Madrid", "Cataluña", "Valencia", "Alemania", "Japon"];

  // const [alertVisible, setAlertVisible] = useState(false);

  /!* ------------------------------- Managing Component State ------------------------------- */;

  // const [game, setGame] = useState({
  //   id: 1,
  //   player: { name: "David" },
  // });

  // const [pizza, setPizza] = useState({
  //   name: "Pepperoni",
  //   toppings: ["Bacon"],
  // });

  // const [cart, setCart] = useState({
  //   discount: 0.1,
  //   items: [
  //     { id: 1, title: "Product 1", quantity: 1 },
  //     { id: 2, title: "Product 2", quantity: 1 },
  //   ],
  // });

  // const handleClickGame = () => {
  //   setGame({ ...game, player: { ...game.player, name: "Glen" } });
  // };

  // const handleClickPizza = () => {
  //   setPizza({ ...pizza, toppings: [...pizza.toppings, "Mushroom"] });
  // };

  // const handleClickCart = () => {
  //   setCart(
  //     produce((draft) => {
  //       const cart = draft.items.find((cart) => cart.id === 1);
  //       if (cart) cart.quantity = 2;
  //     })
  //   );
  // };

  /!* ------------------------------- Building Forms ------------------------------- */;

  //* const [selectedCategory, setselectedCategory] = useState("");

  //* const [item, setItem] = useState([
  //*   { id: 1, description: "aaa", amount: 10, category: "Utilities" },
  //*   { id: 2, description: "bbb", amount: 10, category: "Utilities" },
  //*  { id: 3, description: "ccc", amount: 10, category: "Utilities" },
  //* ]);

  //* const visibleExpenses = selectedCategory
  //*   ? item.filter((e) => e.category === selectedCategory)
  //*   : item;

  /!* ------------------------------- Connecting to the Backend ------------------------------- */;

  // const ref = useRef<HTMLInputElement>(null);

  //TODO afterRender
  //* useEffect(() => {
  // *  if (ref.current) ref.current.focus();
  //* });

  //* useEffect(() => {
  //*   document.title = "My App";
  //* });

  // const [category, setCategory] = useState("");

  // useEffect(() => {
  //   connect();
  //   return () => disconnect();
  // });

  const { user, error, isLoading, setUser, setError } = useUsers();

  const deleteUser = (users: User) => {
    const originalUser = [...user];
    setUser(user.filter((u) => u.id !== users.id));

    userService.delete(users.id).catch((err) => {
      setError(err.message);
      setUser(originalUser);
    });
  };

  const addUser = () => {
    const originalUser = [...user];
    const newUser = { id: 0, name: "David" };

    setUser([newUser, ...user]);

    userService
      .add(newUser)
      .then(({ data: savedUser }) => setUser([savedUser, ...user]))
      .catch((err) => {
        setError(err.message);
        setUser(originalUser);
      });
  };

  const updateUser = (users: User) => {
    const originalUser = [...user];
    const updatedUser = { ...users, name: "David" };

    setUser(user.map((u) => (u.id === users.id ? updatedUser : u)));

    userService.update(updatedUser).catch((err) => {
      setError(err.message);
      setUser(originalUser);
    });
  };
  return (
    <>
      <div>
        {/* ------------------------------- Building Components ------------------------------- */}

        {/* <ListGroup
        item={item}
        heading="Cities"
        onSelectItem={(item: string) => {
          console.log(item);
        }}
      /> */}

        {/* <Button onClick={() => setAlertVisible(true)}>My Button</Button> */}
      </div>
      {/* {alertVisible === true && (
        <Alert onClose={() => setAlertVisible(false)}>My Alert</Alert>
      )} */}

      {/* ------------------------------- Styling Components  ------------------------------- */}

      {/* <Like onClick={() => console.log("clicked")} /> */}
      {/* <FaMagnifyingGlass color="red" size={50} /> */}

      {/* ------------------------------- Managing Component State ------------------------------- */}

      {/* <h3>Games</h3>
        <p>
          <span>Game:</span> {game.id}
        </p>
        <p>
          <span>Player:</span> {game.player.name}
        </p>

        <button onClick={handleClickGame}>Update</button>
        <br />
        <br />
        <h3>Pizza</h3>
        <p>
          <span>Name:</span> {pizza.name}
        </p>
        <p>
          <span>Toppings:</span> {pizza.toppings.join(", ")}
        </p>

        <button onClick={handleClickPizza}>Update</button>
        <br />
        <br />
        <h3>Cart</h3>
        <p>
          <span>Discount:</span> {cart.discount}
        </p>
        <p>
          <span>Items:</span>{" "}
          {cart.items.map((cart) => cart.quantity).join(", ")}
        </p>

        <button onClick={handleClickCart}>Update</button> */}

      {/* <ExpandableText maxChar={100}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a
        quam magna. Maecenas mauris felis, fringilla sit amet condimentum
        bibendum, facilisis quis erat. Integer a porttitor arcu, a euismod
        mauris. Nunc orci quam, convallis ultrices purus sed, maximus fringilla
        nisl. Duis at venenatis urna. Mauris nulla purus, feugiat ac semper at,
        consequat eget justo. Nulla porttitor at velit eget tristique. Quisque
        tincidunt tellus in imperdiet vehicula. Morbi mattis urna vitae quam
        finibus posuere. Suspendisse sed tellus commodo orci tempus porttitor ac
        vel ex. Nulla cursus egestas egestas. Ut eget vulputate augue, vitae
        egestas quam.
      </ExpandableText> */}

      {/* ------------------------------- Building Forms ------------------------------- */}
      {/* <Form /> */}
      {/* <ExpenseTracker
        onSubmit={(newItem) =>
          setItem([...item, { ...newItem, id: item.length++ }])
        }
      />
      <ExpenseFilter onSelect={(category) => setselectedCategory(category)} />

      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setItem(item.filter((e) => e.id !== id))}
      /> */}

      {/* ------------------------------- Connecting to the Backend ------------------------------- */}

      <>
        {/* <input ref={ref} type="text" className="form-control" /> */}
        {/* <select
          className="form-select"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value=""></option>
          <option value="Clothing">Clothing</option>
          <option value="Household">Household</option>
        </select>
        <ProductList category={category} /> */}
        {error && <p className="text-danger">{error}</p>}
        {isLoading && <div className="spinner-border"></div>}
        <button className="btn btn-primary mb-3" onClick={addUser}>
          Add
        </button>
        <ul className="list-group">
          {user.map((user) => (
            <li
              key={user.id}
              className="d-flex justify-content-between list-group-item"
            >
              {user.name}
              <div>
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => {
                    updateUser(user);
                  }}
                >
                  Update
                </button>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => deleteUser(user)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </>
    </>
  );
}

export default App;
