import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomePage from "../pages/HomePage";
import AddJobPage from "../pages/AddJobPage";

function AppRouter() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/jobs/new" element={<AddJobPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default AppRouter;
