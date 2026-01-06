import { Suspense } from "react";
import EventDetails from "@/components/EventDetails";
import { notFound } from "next/navigation";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const EventDetailsPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;
    const request = await fetch(`${BASE_URL}/api/events/${slug}`)
    console.log(request);
    const { event: { description, image, overview, date, time, location, agenda, audience, tags } } = await request.json();

    if (!description) return notFound();

    return (
        <section id="event">
            <div className="header">
                <h1>Event Description</h1>
                <p className="mt-2">{description}</p>
            </div>
            <div className="details">
                {/* Left side Event content */}
                <div className="center"></div>
                {/* Right side - booking form */}
                <aside className="booking"></aside>
            </div>
        </section>
    )
}
export default EventDetailsPage