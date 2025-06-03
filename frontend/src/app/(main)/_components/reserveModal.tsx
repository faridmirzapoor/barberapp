"use client";
import { useEffect } from "react";

export default function ReserveModal({
  isOpen,
  onClose,
  barberName = "امیرعباس ستاکی",
  times = [
    "۱۰:۰۰",
    "۱۱:۳۰",
    "۱۳:۰۰",
    "۱۵:۰۰",
    "۱۶:۳۰",
    "۱۸:۰۰",
    "۱۹:۳۰",
  ],
  onReserve = () => {},
  selectedTime,
  setSelectedTime,
}) {
  useEffect(() => {
    const onKeyDown = (e) => { if (e.key === "Escape") onClose(); };
    if (isOpen) document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black/30 z-50 flex items-center justify-center"
      onClick={onClose} // این مهم است
    >
      <div
        className="bg-white rounded-2xl p-5 w-[90vw] max-w-xs md:max-w-md shadow-2xl animate-fade-in"
        onClick={e => e.stopPropagation()} // کلیک داخل modal نباید بسته شود
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-3">
          <div className="font-bold text-[#363062] text-base md:text-lg">
            رزرو وقت با {barberName}
          </div>
          <button
            onClick={onClose}
            tabIndex={-1}
            className="text-gray-500 hover:text-red-500 transition"
            aria-label="بستن"
          >
            ×
          </button>
        </div>

        <div>
          <div className="text-gray-700 mb-1 text-sm">انتخاب ساعت:</div>
          <div className="flex flex-wrap gap-2">
            {times.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`px-3 py-1 rounded-lg border text-sm transition
                  ${selectedTime === time
                    ? "bg-[#363062] text-white border-[#363062]"
                    : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-indigo-50"}`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        <button
          disabled={!selectedTime}
          onClick={() => { onReserve(selectedTime); onClose(); }}
          className={`w-full mt-5 py-2 rounded-lg font-bold transition
            ${selectedTime
              ? "bg-[#363062] text-white hover:bg-indigo-800"
              : "bg-gray-300 text-gray-400 cursor-not-allowed"}`}
        >
          رزرو {selectedTime ? `ساعت ${selectedTime}` : ""}
        </button>
      </div>
    </div>
  );
}
