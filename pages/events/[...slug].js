import { useRouter } from "next/router";
import { getFilteredEvents } from "@/dummy-data";

function FilteredEventsPage(){
    const router = useRouter();
    const filterData = router.query.slug;   
    console.log("filterData::",filterData);

    if(!filterData){
        return <p className='center'>Loading...</p>
    }

    const filteredYear = filterData[0];
    const filteredMonth = filterData[1];

    const numYear = +filteredYear;
    const numMonth = +filteredMonth;

    const filteredEvents = getFilteredEvents();

    if(!filteredEvents || filteredEvents.length === 0) {
        return <p>No events found for the chosen filter!</p>;
    }

    if (
      isNaN(numYear)  ||
      isNaN(numMonth) || 
      numYear > 2030  || 
      numMonth < 1    || 
      numMonth > 12
    ) {
        return <p>Invalid filter. Please adjust your values!</p>;
    }

    return(
        <div>
            <h1>Filtered Events</h1>
        </div>
    )
}

export default FilteredEventsPage;