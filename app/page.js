"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Filters from "@/components/Filters";
import TourCard from "@/components/TourCard";
import { tours } from "@/utils/data";

export default function Home() {
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Dark mode state'ini localStorage ile yönet
  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white`}>
      <Navbar openFilters={() => setFiltersOpen(true)} toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <Filters isOpen={filtersOpen} closeFilters={() => setFiltersOpen(false)} />
      <main className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-[1300px] mx-auto gap-6">
        {tours.length > 0 ? (
          tours.map((tour) => <TourCard key={tour.id} tour={tour} />)
        ) : (
          <p className="text-center col-span-full text-gray-500">Bu kategoride tur bulunamadı.</p>
        )}
      </main>
    </div>
  );
}