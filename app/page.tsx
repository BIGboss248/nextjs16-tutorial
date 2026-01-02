import EventCard from "@/components/EventCard"
import ExploreBtn from "@/components/ExploreBtn"
import { events } from "@/lib/constants"

const Home = () => {
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
            events.map((e) =>
              <li key={e.title}>

                <EventCard {...e} />
              </li>
            )
          }
        </ul>

      </div>
    </section>
  )
}

export default Home
