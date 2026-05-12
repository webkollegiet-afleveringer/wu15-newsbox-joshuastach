
import "./body.scss";
import Popup from "./section-categories-popup/popup";

export default function Body({ allCategory }) {
    // const { data: europeData } = useFetchData('https://api.nytimes.com/svc/news/v3/content/nyt/europe.json?api-key=O9xEMvXebIYYDqsH9CuTH6xhJE8OIFNTLnMRzjRB5nEfJ9r0')
    // const { data: healthData } = useFetchData('https://api.nytimes.com/svc/news/v3/content/nyt/health.json?api-key=O9xEMvXebIYYDqsH9CuTH6xhJE8OIFNTLnMRzjRB5nEfJ9r0')
    // const { data: sportData } = useFetchData('https://api.nytimes.com/svc/news/v3/content/nyt/sport.json?api-key=O9xEMvXebIYYDqsH9CuTH6xhJE8OIFNTLnMRzjRB5nEfJ9r0')
    // const { data: businessData } = useFetchData('https://api.nytimes.com/svc/news/v3/content/nyt/business.json?api-key=O9xEMvXebIYYDqsH9CuTH6xhJE8OIFNTLnMRzjRB5nEfJ9r0')
    // const { data: travelData } = useFetchData('https://api.nytimes.com/svc/news/v3/content/nyt/travel.json?api-key=O9xEMvXebIYYDqsH9CuTH6xhJE8OIFNTLnMRzjRB5nEfJ9r0')
    // console.log(europeData, healthData, sportData, businessData, travelData);




    // const { data } = useFetchData(`${fetchingString}`)




    // let allData = [
    //     europeData,
    //     healthData,
    //     sportData,
    //     businessData,
    //     travelData
    // ]



    return (
        <ul className="according">
            {allCategory.map(category => <Popup category={category} key={category.headline + 1} />)}
        </ul>
    )
}