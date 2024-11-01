import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import { useProducts } from "./hooks/useProducts";

// const myColor: MantineColorsTuple = [
//   "#e7feef",
//   "#d4f9e0",
//   "#a9f1c1",
//   "#7beaa0",
//   "#55e384",
//   "#3ddf71",
//   "#2edd68",
//   "#1fc456",
//   "#12ae4b",
//   "#00973d",
// ];

// const theme = createTheme({
//   colors: {
//     myColor,
//   },
// });

function App() {
  const { products, isLoading } = useProducts();

   

  return (
    <>
      <BrowserRouter>
        <MantineProvider defaultColorScheme="dark">
          <Routes>
            <Route path="/" element={<HomePage products={products} isLoading={isLoading} />} />
            <Route path="/product/:id" element={<ProductPage products={products} />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </MantineProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
