import { Header } from './components/Header';
import { ProfileSidebar } from './components/ProfileSidebar';
import { RecentPosts } from './components/RecentPosts';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="flex">
        {/* Left Sidebar */}
        <div className="hidden lg:block">
          <ProfileSidebar />
        </div>

        {/* Main Content */}
        <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="space-y-8">
            {/* Welcome Section */}
            <div className="text-center lg:text-left">
              <h1 className="text-3xl lg:text-4xl text-gray-900 mb-4">
                Welcome to my digital space
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl">
                I share my journey in software development, building interesting projects, and exploring new technologies. 
                This is where I document my coding adventures and technical insights.
              </p>
            </div>

            {/* Recent Posts */}
            <RecentPosts />
          </div>
        </main>

        {/* Mobile Sidebar - Show profile info on smaller screens */}
        <div className="lg:hidden fixed bottom-4 right-4 z-50">
          <div className="bg-white rounded-full shadow-lg border border-blue-200 p-3">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">AC</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}