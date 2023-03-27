import FeedBackList from "./FeedBackList.json"
import SingleFeedback from "./SingleFeedback"

type Props ={}

const AllFeedbacks = (props:Props) => {
  return (
    
    <section className="lg:flex flex-wrap gap-x-10 gap-y-6 lg:justify-center">
        {FeedBackList.feedbacks.map((feedback)=>(
            <SingleFeedback
            key={feedback.name}
            imageURL ={feedback.image}
            heading ={feedback.name}
            paragraph={feedback.comment}
            date={feedback.date}
            />
        ))}  

    </section>
    
   
  )
}

export default AllFeedbacks