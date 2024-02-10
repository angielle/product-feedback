import Image from "next/image";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Feedback from "./components/feedback/Feedback";

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen mt-20'>
      <div className='container mx-auto'>
        <div className='flex sm:flex-col md:flex-col lg:flex-row lg:py-4 flex-wrap'>
          <aside className='sm:w-full md:w-full lg:w-1/5 px-2'>
            <div className='sticky top-0 w-full'>
              <ul className='flex sm:flex-row md:flex-row lg:flex-col overflow-hidden'>
                <Sidebar />
              </ul>
            </div>
          </aside>
          <main role='main' className='sm:w-2/3 md:w-full lg:w-3/4 px-2'>
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
