import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { DashboardPage } from "../components/pages/Dashboard.page";
import { HomePage } from "../components/pages/Home.page";
import { Footer } from "../components/single-types/Footer";
import { Header } from "../components/single-types/Header";
declare const window: { ethereum: any };

const IndexPage = () => {
  return (
    <main className="flex h-screen flex-col justify-between">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p className="bg-lime-200">There's nothing here!</p>
              </main>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
};

export default IndexPage;

// user already exists erroru aynen

// todo grid yer ac contact form
// todo same username issue
// todo grid item lerin section style paddinglere dikkat after: ile sag uste tooltip gibi
// todo quiz card style
// todo contract hook bitir
// todo event emit
// todo animation
// todo checkbox icine svg
// todo usercard ui improve
// todo wait metamask confirm
