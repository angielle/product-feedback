import Image from "next/image";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Feedback from "./components/feedback/Feedback";

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen mt-20'>
      <div className='container mx-auto'>
        <div className='flex flex-row flex-wrap py-4'>
          <aside className='w-1/5  px-2'>
            <div className='sticky top-0 w-full'>
              <ul className='flex flex-col overflow-hidden'>
                <Sidebar />
              </ul>
            </div>
          </aside>
          <main role='main' className='w-full sm:w-2/3 md:w-3/4 px-2'>
            <Header />
            <Feedback
              title='Add tags for solutions'
              description='Easier to search for solutions based on a specific stack.'
              category='Enhancement'
              upvote={112}
              commentsCount={2}
            />
            <Feedback
              title='Add a dark theme option'
              description='It would help people with light sensitivities and who prefer dark mode.'
              category='Feature'
              upvote={99}
              commentsCount={4}
            />
          </main>
        </div>
      </div>
    </div>
  );
}
