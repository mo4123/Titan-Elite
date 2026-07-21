import { useState } from "react";
import { Check, Calendar, Bell, Bookmark } from "lucide-react";
import { SCHEDULE_SESSIONS } from "../data";

export default function Schedule() {
  const [activeDay, setActiveDay] = useState<"mon" | "tue" | "wed" | "thu" | "fri">("mon");
  const [reminders, setReminders] = useState<string[]>([]);

  const days = [
    { label: "Monday", key: "mon" as const },
    { label: "Tuesday", key: "tue" as const },
    { label: "Wednesday", key: "wed" as const },
    { label: "Thursday", key: "thu" as const },
    { label: "Friday", key: "fri" as const },
  ];

  const handleToggleReminder = (classId: string, className: string) => {
    if (reminders.includes(classId)) {
      setReminders(reminders.filter((id) => id !== classId));
      alert(`Reminder cancelled for ${className}.`);
    } else {
      setReminders([...reminders, classId]);
      alert(`Reminder set! You will be notified 15 minutes before ${className} starts.`);
    }
  };

  return (
    <section className="py-24 bg-surface-container-lowest" id="training">
      <div className="max-w-container-max mx-auto space-y-16 px-margin-mobile md:px-margin-desktop">
        {/* Title Block */}
        <div className="text-center space-y-4">
          <p className="text-primary-container font-display font-extrabold text-[11px] tracking-[0.3em] uppercase">
            CALENDAR OF FORCE
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-white font-black tracking-tighter uppercase">
            CHRONO TIMETABLE
          </h2>
          <div className="h-1 w-20 bg-primary-container mx-auto" />
          <p className="text-sm text-on-surface-variant max-w-md mx-auto">
            Book sessions directly, configure reminder profiles, and organize your weekly performance loops.
          </p>
        </div>

        {/* Day selection tabs */}
        <div className="flex flex-wrap justify-center gap-1.5 p-1 bg-surface-container-low border border-outline-variant/20 max-w-xl mx-auto rounded-none">
          {days.map((day) => (
            <button
              key={day.key}
              onClick={() => setActiveDay(day.key)}
              className={`flex-1 min-w-[90px] py-3 text-xs font-display font-bold tracking-widest uppercase transition-standard cursor-pointer ${
                activeDay === day.key
                  ? "bg-primary-container text-white"
                  : "text-on-surface-variant hover:text-white"
              }`}
            >
              {day.label.slice(0, 3)}
            </button>
          ))}
        </div>

        {/* Schedule grid - Desktop layout */}
        <div className="hidden md:block overflow-hidden border border-outline-variant/20 bg-surface-container-lowest">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-outline-variant/35 bg-surface-container-high/40 text-on-surface-variant text-[10px] tracking-[0.2em] font-display font-extrabold uppercase">
                <th className="py-5 px-6">TIME SLOT</th>
                {days.map((day) => (
                  <th key={day.key} className={`py-5 px-6 ${activeDay === day.key ? "text-primary border-x border-outline-variant/15 bg-primary-container/5" : ""}`}>
                    {day.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {SCHEDULE_SESSIONS.map((session, sIdx) => (
                <tr key={session.id} className="border-b border-outline-variant/15 last:border-b-0 hover:bg-surface-container-high/15 transition-colors duration-200">
                  <td className="py-6 px-6 font-mono text-sm text-white font-semibold whitespace-nowrap">
                    {session.time}
                  </td>
                  {days.map((day) => {
                    const classInfo = session[day.key];
                    const sessionKey = `${session.id}-${day.key}`;
                    const hasReminder = reminders.includes(sessionKey);
                    return (
                      <td 
                        key={day.key} 
                        className={`py-6 px-6 relative transition-all duration-300 ${
                          activeDay === day.key ? "border-x border-outline-variant/15 bg-primary-container/[0.01]" : ""
                        }`}
                      >
                        {classInfo ? (
                          <div className="space-y-2 group">
                            <p className="font-display font-black text-sm text-white tracking-tight leading-none group-hover:text-primary transition-colors">
                              {classInfo.name}
                            </p>
                            <div className="flex justify-between items-center gap-2">
                              <span className="text-[10px] text-on-surface-variant font-mono uppercase">
                                {classInfo.room}
                              </span>
                              <button
                                onClick={() => handleToggleReminder(sessionKey, classInfo.name)}
                                className={`p-1.5 rounded-none border transition-standard cursor-pointer ${
                                  hasReminder 
                                    ? "bg-green-500/10 border-green-500/30 text-green-400" 
                                    : "border-outline-variant/20 hover:border-primary-container text-on-surface-variant hover:text-white"
                                }`}
                                title={hasReminder ? "Reminder Set" : "Notify Me"}
                              >
                                <Bell className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        ) : (
                          <span className="text-on-surface-variant/20 font-mono text-xs select-none">—</span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Schedule list - Mobile layout */}
        <div className="block md:hidden space-y-4">
          {SCHEDULE_SESSIONS.map((session) => {
            const classInfo = session[activeDay];
            const sessionKey = `${session.id}-${activeDay}`;
            const hasReminder = reminders.includes(sessionKey);
            return classInfo ? (
              <div 
                key={session.id} 
                className="p-5 bg-surface-container border border-outline-variant/30 flex justify-between items-center gap-4 animate-fade-in"
              >
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono text-primary font-bold">{session.time}</span>
                  <h3 className="font-display font-black text-lg text-white leading-tight uppercase">
                    {classInfo.name}
                  </h3>
                  <p className="text-[10px] text-on-surface-variant uppercase tracking-wider font-medium">
                    {classInfo.room}
                  </p>
                </div>

                <button
                  onClick={() => handleToggleReminder(sessionKey, classInfo.name)}
                  className={`p-3 border transition-standard cursor-pointer ${
                    hasReminder 
                      ? "bg-green-500/15 border-green-500/45 text-green-400" 
                      : "border-outline-variant/30 text-white"
                  }`}
                >
                  <div className="flex items-center gap-1.5 text-[10px] font-display font-bold uppercase tracking-widest">
                    <Bell className="w-4 h-4 shrink-0" />
                    <span>{hasReminder ? "ON" : "ALERT"}</span>
                  </div>
                </button>
              </div>
            ) : null;
          })}
        </div>
      </div>
    </section>
  );
}
