import React from "react";
import Feedback from "@/app/components/feedback/Feedback";
import Header from "../components/Header";
import Comments from "../components/Comments";
import AddComment from "../components/AddComment";

const FeedbackDetail = () => {
  return (
    <div className='flex items-center justify-center h-full mt-20'>
      <div className='container mx-auto w-2/5'>
        <Header />
        <Feedback
          title='Add tags for solutions'
          description='Easier to search for solutions based on a specific stack.'
          category='Enhancement'
          upvote={112}
          commentsCount={2}
          disable
        />
        <Comments />
        <AddComment />
      </div>
    </div>
  );
};

export default FeedbackDetail;
