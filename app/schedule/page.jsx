"use client";

import React, { useEffect, useState, useRef } from "react";

const events = [
  { day: "Hétfő", start: "06:00", end: "22:00", title: "Tanulmányok", color: "bg-red-500/80" },
  { day: "Kedd", start: "6:30", end: "14:00", title: "Munka", color: "bg-blue-500/80" },
  { day: "Kedd", start: "17:00", end: "22:00", title: "Kézilabda", color: "bg-yellow-500/80" },
  { day: "Szerda", start: "6:30", end: "14:00", title: "Munka", color: "bg-blue-500/80" },
  { day: "Szerda", start: "15:30", end: "21:00", title: "Tanítás", color: "bg-green-500/80" },
  { day: "Csütörtök", start: "6:00", end: "10:00", title: "Munka", color: "bg-blue-500/80" },
  { day: "Csütörtök", start: "11:00", end: "13:00", title: "Egyetem", color: "bg-orange-500/80" },
  { day: "Csütörtök", start: "17:00", end: "22:00", title: "Kézilabda", color: "bg-yellow-500/80" },
  { day: "Péntek", start: "6:00", end: "10:00", title: "Munka", color: "bg-blue-500/80" },
  { day: "Péntek", start: "11:00", end: "14:00", title: "Egyetem", color: "bg-orange-500/80" },
  { day: "Péntek", start: "15:00", end: "18:00", title: "Tanítás", color: "bg-green-500/80" },


];

const days = ["Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat", "Vasárnap"];
const hours = Array.from({ length: 17 }, (_, i) => `${String(i + 6).padStart(2, "0")}:00`);

const timeToMinutes = (time) => {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
};

const getBorderColor = (bgColor) => {
  if (bgColor) {
    const color = bgColor.split('/')[0].replace('bg-', 'border-');
    return `${color}`;
  }
  return 'border-gray-700';
};

export default function OrarendTable() {
  const [loading, setLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentDayIndex, setCurrentDayIndex] = useState(
    new Date().getDay() === 0 ? 6 : new Date().getDay() - 1
  );
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const tableRef = useRef(null);

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  useEffect(() => {
    const loadingTimer = setTimeout(() => setLoading(false), 500);
    const timeTimer = setInterval(() => setCurrentTime(new Date()), 60000);
    
    // Handle swipe gestures
    const handleTouchStart = (e) => {
      setTouchStart(e.targetTouches[0].clientX);
    };
    
    const handleTouchMove = (e) => {
      setTouchEnd(e.targetTouches[0].clientX);
    };
    
    const handleTouchEnd = () => {
      if (touchStart - touchEnd > 50) {
        // Swipe left
        setCurrentDayIndex((prev) => (prev < days.length - 1 ? prev + 1 : prev));
      }
      
      if (touchStart - touchEnd < -50) {
        // Swipe right
        setCurrentDayIndex((prev) => (prev > 0 ? prev - 1 : prev));
      }
    };

    if (isMobile && tableRef.current) {
      tableRef.current.addEventListener('touchstart', handleTouchStart);
      tableRef.current.addEventListener('touchmove', handleTouchMove);
      tableRef.current.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      clearTimeout(loadingTimer);
      clearInterval(timeTimer);
      if (isMobile && tableRef.current) {
        tableRef.current.removeEventListener('touchstart', handleTouchStart);
        tableRef.current.removeEventListener('touchmove', handleTouchMove);
        tableRef.current.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [touchStart, touchEnd, isMobile]);

  if (loading) {
    return (
      <div className="h-screen w-screen bg-[#1c1c1f] flex items-center justify-center">
        <span className="text-white text-xl">Betöltés...</span>
      </div>
    );
  }

  const firstHour = 6 * 60;
  const cellHeight = 48;
  const headerHeight = 48;
  const now = currentTime.getHours() * 60 + currentTime.getMinutes();
  const timeLineTop = headerHeight + ((now - firstHour) / 60) * cellHeight;

  const renderDayHeaders = () => {
    if (isMobile) {
      return (
        <th 
          className="border border-gray-700 p-2 bg-gray-800 text-accent border-b-2 border-accent"
          colSpan={1}
        >
          {days[currentDayIndex]}
        </th>
      );
    }
    return days.map((day, index) => (
      <th
        key={day}
        className={`border border-gray-700 p-2 bg-gray-800 ${
          currentDayIndex === index ? 'text-accent border-b-2 border-accent' : ''
        }`}
      >
        {day}
      </th>
    ));
  };

  const renderDayColumns = (hour) => {
    if (isMobile) {
      const day = days[currentDayIndex];
      const event = events.find(
        (e) => e.day === day && timeToMinutes(e.start) >= timeToMinutes(hour) && timeToMinutes(e.start) < timeToMinutes(hour) + 60
      );
      
      const isSpanned = events.some(
        (e) => e.day === day && timeToMinutes(e.start) < timeToMinutes(hour) && timeToMinutes(e.end) > timeToMinutes(hour)
      );

      if (isSpanned) {
        return null;
      }

      if (event) {
        const durationMinutes = timeToMinutes(event.end) - timeToMinutes(event.start);
        const rowSpan = Math.ceil(durationMinutes / 60);
        const borderColor = getBorderColor(event.color);

        return (
          <td
            key={`${day}-${hour}`}
            rowSpan={rowSpan}
            className={`relative ${borderColor} border-2`}
          >
            <div className={`absolute inset-0 ${event.color} bg-gradient-to-b from-white/10 to-transparent flex items-center justify-center text-white font-semibold rounded-sm m-0.5`}>
              {event.title}
            </div>
          </td>
        );
      }

      return <td key={`${day}-${hour}`} className="border border-gray-700 p-1"></td>;
    }

    return days.map((day) => {
      const event = events.find(
        (e) => e.day === day && timeToMinutes(e.start) >= timeToMinutes(hour) && timeToMinutes(e.start) < timeToMinutes(hour) + 60
      );
      
      const isSpanned = events.some(
        (e) => e.day === day && timeToMinutes(e.start) < timeToMinutes(hour) && timeToMinutes(e.end) > timeToMinutes(hour)
      );

      if (isSpanned) {
        return null;
      }

      if (event) {
        const durationMinutes = timeToMinutes(event.end) - timeToMinutes(event.start);
        const rowSpan = Math.ceil(durationMinutes / 60);
        const borderColor = getBorderColor(event.color);

        return (
          <td
            key={`${day}-${hour}`}
            rowSpan={rowSpan}
            className={`relative ${borderColor} border-2`}
          >
            <div className={`absolute inset-0 ${event.color} bg-gradient-to-b from-white/10 to-transparent flex items-center justify-center text-white font-semibold rounded-sm m-0.5`}>
              {event.title}
            </div>
          </td>
        );
      }

      return <td key={`${day}-${hour}`} className="border border-gray-700 p-1"></td>;
    });
  };

  return (
    <div className="h-screen w-screen bg-[#1c1c1f] flex flex-col items-center pt-4 overflow-hidden">
      <h1 className="text-3xl font-extrabold mb-4 text-white">Órarend</h1>
      <div 
        className="bg-[#27272c] rounded-xl shadow-xl border-2 border-accent p-4 w-[95vw] max-w-[1200px] h-[calc(100vh-120px)] overflow-auto relative"
        ref={tableRef}
      >
        <table className="border-collapse table-fixed w-full">
          <thead>
            <tr>
              <th className="border border-gray-700 p-2 w-24 bg-gray-800">Óra</th>
              {renderDayHeaders()}
            </tr>
          </thead>
          <tbody>
            {/* Current time indicator */}
            {now >= firstHour && now < firstHour + hours.length * 60 && (
              <tr className="absolute left-0 right-0 z-30 pointer-events-none" style={{ top: `${timeLineTop}px` }}>
                <td colSpan={days.length + 1}>
                  <div className="h-0.5 bg-accent-bright shadow-lg shadow-accent-bright/50" />
                </td>
              </tr>
            )}

            {hours.map((hour) => (
              <tr key={hour} className="h-12 border-b border-gray-700 hover:bg-gray-700/30 transition-colors">
                <td className="border-x border-gray-700 p-1 text-center font-medium bg-gray-800">
                  {hour}
                </td>
                {renderDayColumns(hour)}
              </tr>
            ))}
          </tbody>
        </table>
        {isMobile && (
          <div className="mt-2 text-center text-gray-400 text-sm">
            Balra/jobbra húzással változtathat napot
          </div>
        )}
      </div>
    </div>
  );
}