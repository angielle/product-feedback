import Image from "next/image";
import Feedback from "./components/feedback/Feedback";
import Sidebar from "./components/sidebar/Sidebar";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col mt-20'>
      <div className='container mx-auto'>
        <div className='flex flex-row flex-wrap py-4'>
          <aside className='w-full sm:w-1/3 md:w-1/4 px-2'>
            <div className='sticky top-0 p-4 w-full'>
              <ul className='flex flex-col overflow-hidden'>
                <Sidebar />
              </ul>
            </div>
          </aside>
          <main role='main' className='w-full sm:w-2/3 md:w-3/4 pt-1 px-2'>
            <Feedback
              title='Add tags for solutions'
              description='Easier to search for solutions based on a specific stack'
              category='Enhancement'
              commentsCount={2}
              vote={112}
            />
          </main>
        </div>
      </div>
    </main>
  );
}
