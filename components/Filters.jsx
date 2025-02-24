"use client";
import { useState } from "react";

const Filters = ({ isOpen, closeFilters, applyFilters }) => {
    const [selectedTheme, setSelectedTheme] = useState("");
    const [selectedActivities, setSelectedActivities] = useState([]);
    const [maxPrice, setMaxPrice] = useState(12500);
    const [startTime, setStartTime] = useState(102);
    const [groupSize, setGroupSize] = useState(40);
    const [selectedVehicle, setSelectedVehicle] = useState(null);
    const [selectedFeatures, setSelectedFeatures] = useState([]);

    if (!isOpen) return null;

    const themes = ["Island Tour", "Land Tour", "Safari"];
    const activities = ["Swimming", "Running", "Elephant Care", "Snorkelling"];
    const vehicles = ["Yacht", "Speedboat", "Safari", "Catamaran", "Speedcatamaran"];
    const features = ["Transfer", "Halal Food", "Vegetarian Food"];

    const toggleSelection = (item, setState) => {
        setState((prev) => (prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]));
    };

    const resetFilters = () => {
        setSelectedTheme("");
        setSelectedActivities([]);
        setMaxPrice(12500);
        setStartTime(102);
        setGroupSize(40);
        setSelectedVehicle(null);
        setSelectedFeatures([]);
    };

    const searchTours = () => {
        applyFilters({
            selectedTheme,
            selectedActivities,
            maxPrice,
            startTime: formatTime(startTime),
            groupSize,
            selectedVehicle,
            selectedFeatures,
        });
        closeFilters();
    };

    const formatTime = (value) => {
        let hours = Math.floor(value / 6);
        let minutes = (value % 6) * 10;
        return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="filters-popup bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg w-[90vw] max-w-[500px] overflow-auto border border-gray-300 dark:border-gray-600 relative">

                {/* SAĞ ÜST KÖŞEDE ÇARPI ✖ BUTONU VAR */}
                <button
                    className="absolute top-4 right-4 text-gray-500 dark:text-white text-3xl font-bold"
                    onClick={closeFilters}
                >
                    ✖
                </button>

                <div className="flex items-center justify-between mb-4">
                    <button className="bg-primary-500 text-white px-4 py-2 rounded-md">TOURS</button>
                </div>

                {/* Location */}
                <div className="mb-4">
                    <label className="block font-semibold dark:text-white">Location</label>
                    <div className="relative">
                        <input type="text" className="w-full p-2 border rounded pl-10 dark:bg-gray-700 dark:text-white dark:border-gray-500" placeholder="Where you wanna visit?" />
                        <span className="absolute left-3 top-3 text-gray-500">🔍</span>
                    </div>
                </div>

                {/* Theme */}
                <div className="mb-4">
                    <label className="block font-semibold dark:text-white">Theme</label>
                    <div className="flex gap-2 flex-wrap">
                        {themes.map((theme) => (
                            <button key={theme} className={`px-3 py-1 rounded-lg text-sm ${selectedTheme === theme ? "bg-primary-500 text-white font-semibold" : "border border-gray-400 dark:border-gray-500 dark:text-white"}`} onClick={() => setSelectedTheme(theme)}>
                                {theme} (43)
                            </button>
                        ))}
                    </div>
                </div>

                {/* Activity */}
                <div className="mb-4">
                    <label className="block font-semibold dark:text-white">Activity</label>
                    <div className="flex gap-2 flex-wrap">
                        {activities.map((activity) => (
                            <button key={activity} className={`px-3 py-1 rounded-lg text-sm ${selectedActivities.includes(activity) ? "bg-primary-500 text-white font-semibold" : "border border-gray-400 dark:border-gray-500 dark:text-white"}`} onClick={() => toggleSelection(activity, setSelectedActivities)}>
                                {activity} (43)
                            </button>
                        ))}
                    </div>
                </div>

                {/* Price */}
                <div className="mb-4">
                    <label className="block font-semibold dark:text-white">Price</label>
                    <div className="flex items-center gap-3">
                        <input type="range" min="0" max="20000" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} className="w-full accent-primary-500" />
                        <input type="number" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} className="w-20 text-center p-1 border rounded dark:bg-gray-700 dark:border-gray-500 dark:text-white" />
                    </div>
                </div>

                {/* Start Time */}
                <div className="mb-4">
                    <label className="block font-semibold dark:text-white">Start Time</label>
                    <div className="flex items-center gap-3">
                        <input type="range" min="0" max="143" step="1" value={startTime} onChange={(e) => setStartTime(Number(e.target.value))} className="w-full accent-primary-500" />
                        <input type="text" value={formatTime(startTime)} onChange={(e) => {
                            const [hours, minutes] = e.target.value.split(":").map(Number);
                            if (!isNaN(hours) && !isNaN(minutes)) {
                                setStartTime(hours * 6 + Math.floor(minutes / 10));
                            }
                        }} className="w-20 text-center p-1 border rounded dark:bg-gray-700 dark:border-gray-500 dark:text-white" />
                    </div>
                </div>

                {/* Vehicle */}
                <div className="mb-4">
                    <label className="block font-semibold dark:text-white">Vehicle</label>
                    <div className="flex gap-2 flex-wrap">
                        {vehicles.map((vehicle) => (
                            <button key={vehicle} className={`px-3 py-1 rounded-lg text-sm ${selectedVehicle === vehicle ? "bg-primary-500 text-white font-semibold" : "border border-gray-400 dark:border-gray-500 dark:text-white"}`} onClick={() => setSelectedVehicle(vehicle)}>
                                {vehicle} (43)
                            </button>
                        ))}
                    </div>
                </div>

                {/* Features */}
                <div className="mb-4">
                    <label className="block font-semibold dark:text-white">Features</label>
                    <div className="flex gap-2 flex-wrap">
                        {features.map((feature) => (
                            <button key={feature} className={`px-3 py-1 rounded-lg text-sm ${selectedFeatures.includes(feature) ? "bg-primary-500 text-white font-semibold" : "border border-gray-400 dark:border-gray-500 dark:text-white"}`} onClick={() => toggleSelection(feature, setSelectedFeatures)}>
                                {feature} (43)
                            </button>
                        ))}
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-between mt-4">
                    <button onClick={resetFilters} className="px-4 py-2 bg-gray-300 dark:bg-gray-600 dark:text-white rounded-lg font-semibold">RESET</button>
                    <button onClick={searchTours} className="px-4 py-2 bg-primary-500 text-white rounded-lg font-semibold">SEARCH</button>
                </div>
            </div>
        </div>
    );
};

export default Filters;