import * as React from "react";
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Quiz from "./components/Quiz";
import Main from "./components/Main";
import Result from "./components/Result";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main />,
    },
    {
      path: "/quiz",
      element: <Quiz />,
    },
    {
      path: "/result",
      element: <Result />,
    },
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
