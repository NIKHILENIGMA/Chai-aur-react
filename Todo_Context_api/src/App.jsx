import { useState, useEffect } from "react";
import { TodoProvider } from "./contexts";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItems";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    //console.log(id);
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("[todos]"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;

// import { useState, useEffect } from "react";
// import { TodoProvider } from "./context";
// import "./App.css";
// import TodoForm from "./components/TodoForm";
// import TodoItem from "./components/TodoItems";

// function App() {
//   const [todos, setTodos] = useState([]);

//   const addTodo = (todo) => {
//     setTodos((prev) => [
//       {
//         id: Date.now(),
//         ...todo,
//       },
//       ...prev,
//     ]);
//   };
//   //note: Step1: First we need to find the id

//   //note: Step2: We can use spread operator to get previous todo so we update and send new todo

//   //note: Step3: We can use ForEach loop or map function check that the id which we have and id in prevTodo value

//   //note: Step4: Then we use ternary operator to decide what to do on the of the condition value True or False  Conditon i) if condition is true then pass new todo    Conditon ii) if condition is false then do nothing just pass previous todo

//   const updateTodo = (id, todo) => {
//     setTodos((prev) =>
//       prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
//     );
//   };

//   //note: Step1: First we need to find the id

//   //note: Step2: Then we can use filter function so we can get all the value of todo which is not equal to our id

//   //note: Step3: We can use tenary operator to decide what to do on the of the condition value (True or false)  Conditon i) if condition is true then pass previous todo Condition ii) if conditon is false then pass new todo

//   const deleteTodo = (id) => {
//     setTodos((prev) =>
//       prev.filter((todo) => (todo.id !== id ? todo : prevTodo))
//     );
//   };

//   //note: Step1: First we need to fing the id

//   //note: Step2: Then we use map function so we check prevTodo value === with given id

//   //note: Step3: If condition is true then override initial value of complete which is fale to true, If condition is false then pass prevTodo

//   const toggleComplete = (id) => {
//     setTodos((prev) =>
//       prev.map((prevTodo) =>
//         prevTodo.id === id
//           ? { ...prevTodo, completed: !prevTodo.completed }
//           : prevTodo));
//   };

//   //$ Local storage

//   //note: Values which we will get by getItem it will in string form so using JSON.parse
//   useEffect(() => {
//     const todos = JSON.parse(localStorage.getItem("todos"));

//     if (todos && todos.length > 0) {
//       setTodos(todos);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("todos", JSON.stringify(todos));
//   }, [todos]);

//   return (
//     <TodoProvider
//       value={{ todos, updateTodo, deleteTodo, addTodo, toggleComplete }}
//     >
//       <div className="bg-[#172842] min-h-screen py-8">
//         <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
//           <h1 className="text-2xl font-bold text-center mb-8 mt-2">
//             Manage Your Todos
//           </h1>
//           <div className="mb-4">
//             {/* Todo form goes here */}
//             <TodoForm />
//           </div>
//           <div className="flex flex-wrap gap-y-3">
//             {/*Loop and Add TodoItem here */}
//             {todos.map((todo) => (
//               <div key={todo.id} className=" w-full">
//                 <TodoItem todo={todo} />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </TodoProvider>
//   );
// }

// export default App;
