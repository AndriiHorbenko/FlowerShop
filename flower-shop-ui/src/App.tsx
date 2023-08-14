import React from "react";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Layout from './components/Layout';
import { NotFoundPage } from './pages/NotFoundPage';
import HomeScreen from './pages/HomeScreen';
import {ProductPage} from "./pages/ProductPage";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/home" element={<HomeScreen />} />
            <Route path="/product" element={<ProductPage/>} />
        </Route>
    )
);

export function App() {
  return (
    <RouterProvider router={router}/>
  );
}


export default App;



// // Глобальний обробник помилок
// window.onerror = function (message, source, lineno, colno, error) {
//   // Обробка помилки тут, наприклад, виведення інформації про помилку в консоль
//   console.error("Глобальна помилка:", message, source, lineno, colno, error);

//   // Оновити сторінку (необов'язково, обережно з використанням)
//   window.location.reload();
// };

// // Глобальний обробник асинхронних помилок
// window.addEventListener("error", (event) => {
//   const error = event.error;
//   // Обробка асинхронної помилки тут, наприклад, виведення інформації про помилку в консоль
//   console.error("Асинхронна помилка:", error);
// });

