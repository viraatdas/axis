'use client';

import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const targetDate = new Date('2025-11-21T23:59:59').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return (
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-6">
        <div className="text-center">
          <div className="text-sm font-medium text-primary mb-2">F25 Applications Close In</div>
          <div className="grid grid-cols-4 gap-4">
            {[0, 0, 0, 0].map((_, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-foreground">--</div>
                <div className="text-xs text-muted uppercase tracking-wide">
                  {['Days', 'Hours', 'Mins', 'Secs'][index]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const isExpired = timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0;

  return (
    <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-6">
      <div className="text-center">
        <div className="text-sm font-medium text-primary mb-2">
          {isExpired ? 'F25 Applications Closed' : 'F25 Applications Close In'}
        </div>
        
        {isExpired ? (
          <div className="text-xl font-semibold text-muted">
            Applications for Fall 2025 have closed
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-foreground">{timeLeft.days}</div>
              <div className="text-xs text-muted uppercase tracking-wide">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-foreground">{timeLeft.hours}</div>
              <div className="text-xs text-muted uppercase tracking-wide">Hours</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-foreground">{timeLeft.minutes}</div>
              <div className="text-xs text-muted uppercase tracking-wide">Mins</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-foreground">{timeLeft.seconds}</div>
              <div className="text-xs text-muted uppercase tracking-wide">Secs</div>
            </div>
          </div>
        )}
        
        <div className="mt-4 text-xs text-muted">
          Deadline: November 21, 2025 at 11:59 PM
        </div>
      </div>
    </div>
  );
};

export default Countdown;
