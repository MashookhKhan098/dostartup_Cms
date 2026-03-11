"use client";

import { Bell, CalendarDays } from "lucide-react";
import { useEffect, useState } from "react";

const UPDATES_API =
  "https://cms.dostartup.in/api/content/items/update";

const DUEDATE_API =
  "https://cms.dostartup.in/api/content/items/duedate";

export default function UpdatesAndDueDates() {

  const [updates, setUpdates] = useState<any[]>([]);
  const [dueDates, setDueDates] = useState<any[]>([]);

  useEffect(() => {
    fetchUpdates();
    fetchDueDates();
  }, []);

  async function fetchUpdates() {

    try {

      const res = await fetch(UPDATES_API, {
        cache: "no-store",
      });

      const data = await res.json();

      if (!Array.isArray(data)) return;

      // Sort by publishedDate (latest first)
      const sorted = data.sort(
        (a, b) =>
          new Date(b.publishedDate).getTime() -
          new Date(a.publishedDate).getTime()
      );

      setUpdates(sorted);

    } catch (error) {

      console.error("Updates fetch error:", error);

    }

  }

  async function fetchDueDates() {

    try {

      const res = await fetch(DUEDATE_API, {
        cache: "no-store",
      });

      const data = await res.json();

      if (!Array.isArray(data)) return;

      // Sort by due-date (earliest first)
      const sorted = data.sort(
        (a, b) =>
          new Date(a["due-date"]).getTime() -
          new Date(b["due-date"]).getTime()
      );

      setDueDates(sorted);

    } catch (error) {

      console.error("DueDates fetch error:", error);

    }

  }

  return (

    <section className="bg-white">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-2 gap-6">

          {/* Updates & Alerts */}
          <div className="bg-white border rounded-xl shadow-sm p-6 md:p-8">

            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Bell className="w-5 h-5 text-orange-600" />
              Updates & Alerts
            </h3>

            <div className="space-y-4 max-h-64 overflow-y-auto pr-2">

              {updates.map((item, idx) => (

                <div
                  key={item._id || idx}
                  className="relative pl-4 border-l border-gray-200"
                >

                  <div className="absolute -left-[5px] top-2 w-2 h-2 bg-orange-500 rounded-full"></div>

                  <div className="p-2 hover:bg-orange-50 rounded-lg">

                    {/* IMPORTANT: field name is titile */}
                    <p className="text-orange-600 text-sm font-medium">
                      {item.titile}
                    </p>

                    <p className="text-xs text-gray-500 mt-1">
                      Published on: {item.publishedDate}
                    </p>

                    <span className="inline-block text-[10px] bg-green-100 text-green-700 font-semibold px-2 py-0.5 rounded mt-1">
                      {item.tag}
                    </span>

                  </div>

                </div>

              ))}

            </div>

          </div>


          {/* Due Dates */}
          <div className="bg-white border rounded-xl shadow-sm p-6 md:p-8">

            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <CalendarDays className="w-5 h-5 text-orange-600" />
              Due Dates
            </h3>

            <div className="space-y-4 max-h-64 overflow-y-auto pr-2">

              {dueDates.map((item, idx) => (

                <div
                  key={item._id || idx}
                  className="relative pl-4 border-l border-gray-200"
                >

                  <div className="absolute -left-[5px] top-2 w-2 h-2 bg-orange-500 rounded-full"></div>

                  <div className="p-2 hover:bg-orange-50 rounded-lg">

                    <p className="text-gray-800 text-sm font-medium">
                      {item.title}
                    </p>

                    <p className="text-xs text-gray-500 mt-1">
                      Due Date: {item["due-date"]}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}