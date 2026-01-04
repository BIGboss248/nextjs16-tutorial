import EventCard from "@/components/EventCard"
import ExploreBtn from "@/components/ExploreBtn"
import { IEvent } from "@/database/event.model";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const Home = async () => {
  const response = await fetch(`${BASE_URL}/api/events`);
  const data = await response.json();
  const events = data.events ?? [];


  console.log(events);
  return (
    <section>

      <h1 className='text-3xl text-center'>
        The hub for every dev event <br /> you can&apos;t miss
      </h1>
      <p className="text-center mt-5">
        Hacakthons, meetups, and confrences all in one place
      </p>
      <ExploreBtn />
      <div className="mt-20 space-y-7">
        <h3>Featured events</h3>

        <ul className="events">
          {
            events.map((e: IEvent) => (
              <li key={e.title}>

                <EventCard {...e} />
              </li>
            ))
          }
        </ul>

      </div>
    </section>
  )
}

export default Home
