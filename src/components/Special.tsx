import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Special = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const events = [
    { id: 1, day: "11", month: "MARCH", title: "Kickoff & Hacking", color: "#FCB216" },
    { id: 2, day: "12", month: "MARCH", title: "Mid-Evaluation", color: "#E85D24" },
    { id: 3, day: "13", month: "MARCH", title: "Grand Finale", color: "#D91B57" }
  ];

  return (
    <>
      <style>{`
        .timeline-section {
          background: #0F0F0F;
          padding: 3rem 1rem 5rem;
          font-family: 'Poppins', sans-serif;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* ===== HEADER (Gallery-consistent) ===== */
        .section-header {
          text-align: center;
          margin-bottom: 3.5rem;
        }

        .special-badge {
          display: inline-block;
          padding: 0.5rem 1.2rem;
          background: rgba(231, 88, 41, 0.15);
          border: 1px solid rgba(231, 88, 41, 0.4);
          border-radius: 50px;
          color: #e75829;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
          backdrop-filter: blur(10px);
        }

        .gradient-text {
          background: linear-gradient(90deg, #FCB216 0%, #E85D24 35%, #D91B57 70%, #63205F 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }


        .special-title {
          font-family: 'Poppins', sans-serif;
          font-size: 3.5rem;
          font-weight: 900;
          letter-spacing: -1.5px;
          color: #FFFFFF;
          margin-bottom: 0.8rem;
          line-height: 1.1;
        }

        .special-subtitle {
          font-size: 1rem;
          color: #B0B0B0;
          max-width: 620px;
          margin: 0 auto;
        }

        .timeline-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        @media (min-width: 768px) {
          .timeline-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .glass-card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 12px;
          padding: 2rem 1.5rem;
          text-align: center;
          transition: 0.4s ease;
        }

        .glass-card:hover {
          transform: translateY(-8px);
          background: rgba(255,255,255,0.1);
        }

        .event-month {
          letter-spacing: 4px;
          color: #888;
          margin-bottom: 0.4rem;
        }

        .event-day {
          font-size: 6rem;
          font-weight: 800;
        }

        .card-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        @media (max-width: 768px) {
          .special-title {
            font-size: 2rem;
            letter-spacing: -0.5px;
          }

          .special-subtitle {
            font-size: 0.85rem;
          }
        }

        @media (max-width: 480px) {
          .special-title {
            font-size: 1.6rem;
          }

          .special-subtitle {
            font-size: 0.8rem;
          }
        }

      `}</style>

      <section className="timeline-section">
        <div className="container">
          <div className="section-header" data-aos="fade-down">
            <span className="special-badge">Journey Ahead</span>

            <h2 className="special-title">
              HackOverflow <span className="gradient-text">Begins In</span>
            </h2>

            <p className="special-subtitle">
              The final countdown to three days of innovation, energy, and impact
            </p>
          </div>

          <div className="timeline-grid">
            {events.map((event, index) => (
              <div
                key={event.id}
                className="glass-card"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <div className="event-month">{event.month}</div>
                <div className="event-day" style={{ color: event.color }}>
                  {event.day}
                </div>
                <h4 className="card-title">{event.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Special;
