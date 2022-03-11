import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { HomePage } from "../components/pages/Home.page";
import { Footer } from "../components/single-types/Footer";
import { Header } from "../components/single-types/Header";
import { usePollContract } from "../hooks/usePollContract";

declare const window: { ethereum: any };

const IndexPage = () => {
  const { addUser, allUsers, isWalletConnected, addQuiz, allQuizes } =
    usePollContract();
  return (
    <main className="flex h-screen flex-col justify-between">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/dashboard"
            element={<div className="bg-lime-200">arda</div>}
          />
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

// todo contract hook bitir
// todo animation
// todo checkbox icine svg
// todo dashboard
