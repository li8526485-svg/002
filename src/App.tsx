/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import TeamMember from "./pages/TeamMember";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-neutral-200 flex justify-center selection:bg-brand-tomato selection:text-white">
        <div className="w-full max-w-[480px] bg-brand-bg relative shadow-2xl flex flex-col font-sans overflow-x-hidden border-x border-neutral-300">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/member/:id" element={<TeamMember />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}
