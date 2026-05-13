import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

const TOTAL_SECONDS = 1 * 60 * 60 + 35 * 60; // 1h35

const CountdownTimer = () => {
  const [seconds, setSeconds] = useState(() => {
    const saved = sessionStorage.getItem("offer_countdown_end");
    if (saved) {
      const remaining = Math.floor((parseInt(saved) - Date.now()) / 1000);
      if (remaining > 0) return remaining;
    }
    const end = Date.now() + TOTAL_SECONDS * 1000;
    sessionStorage.setItem("offer_countdown_end", end.toString());
    return TOTAL_SECONDS;
  });

  useEffect(() => {
    const id = setInterval(() => {
      setSeconds((s) => (s > 0 ? s - 1 : 0));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    <div className="max-w-md mx-auto mb-8 bg-gradient-to-r from-destructive/10 to-accent/20 border-2 border-destructive/40 rounded-2xl p-4 shadow-card">
      <div className="flex items-center justify-center gap-2 text-destructive font-extrabold text-xs md:text-sm uppercase tracking-wider mb-2">
        <Clock className="w-4 h-4 animate-pulse" />
        <span>⏰ Esta oferta expira em:</span>
      </div>
      <div className="flex items-center justify-center gap-2">
        {[
          { v: pad(h), l: "horas" },
          { v: pad(m), l: "min" },
          { v: pad(s), l: "seg" },
        ].map((t, i) => (
          <div key={t.l} className="flex items-center gap-2">
            <div className="bg-primary-dark text-white rounded-lg px-3 py-2 min-w-[56px] text-center shadow-md">
              <div className="text-2xl md:text-3xl font-extrabold tabular-nums leading-none">{t.v}</div>
              <div className="text-[9px] uppercase tracking-wider opacity-80 mt-1">{t.l}</div>
            </div>
            {i < 2 && <span className="text-primary-dark font-extrabold text-2xl">:</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
