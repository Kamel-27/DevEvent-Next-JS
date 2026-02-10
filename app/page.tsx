import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";
import React from "react";
const evnts = [
  {
    image: "/images/event1.png",
    title: "Event 1",
    slug: "event-1",
    location: "Oslo, Norway",
    date: "2024-08-15",
  },
  {
    image: "/images/event2.png",
    title: "Event 2",
    slug: "event-2",
    location: "London, UK",
    date: "2024-09-10",
  },
  {
    image: "/images/event3.png",
    title: "Event 3",
    slug: "event-3",
    location: "Berlin, Germany",
    date: "2024-10-05",
  },
];
const page = () => {
  return (
    <section>
      <h1 className="text-center">
        The Hub For Every Dev
        <br /> Event You Can't Miss
      </h1>
      <p className="text-center mt-5">
        Hackthoon, Meetups, and confrences, all in one place.
      </p>
      <ExploreBtn />
      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>
        <ul className="events list-none">
          {evnts.map((event) => (
            <li key={event.title}>
              <EventCard
                title={event.title}
                image={event.image}
                slug={event.slug}
                location={event.location}
                date={event.date}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default page;
