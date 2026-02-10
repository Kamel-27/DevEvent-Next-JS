"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
interface Props {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
}
const EventCard = ({ title, image, slug, location, date }: Props) => {
  return (
    <Link href={`/events/${slug}`} className="event-card">
      <Image
        src={image}
        alt={title}
        width={410}
        height={300}
        className="poster"
      />
      <div className="flex flex-row gap-2">
        <Image
          src="/icons/pin.svg"
          alt="Location icon"
          width={14}
          height={14}
        />
        <p> {location}</p>
      </div>
      <p className="title">{title}</p>
      <div className="flex flex-row gap-2">
        <Image
          src="/icons/calendar.svg"
          alt="Calendar icon"
          width={14}
          height={14}
        />
        <p> {date}</p>
      </div>
    </Link>
  );
};

export default EventCard;
