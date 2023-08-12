import { Route, Routes } from "react-router-dom";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import DepartmentsPage from "./pages/DepartmentsPage/DepartmentsPage";
import PageTemplate from "./pages/PageTemplate/PageTemplate";
import ProductListPage from "./pages/ProductListPage/ProductListPage";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <PageTemplate>
              <InventoryPage />
            </PageTemplate>
          }
        />
        <Route
          path="/departments"
          element={
            <PageTemplate>
              <DepartmentsPage />
            </PageTemplate>
          }
        />
        <Route
          path="/productList"
          element={
            <PageTemplate>
              <ProductListPage />
            </PageTemplate>
          }
        />
      </Routes>
    </>
  );
}

export default App;
