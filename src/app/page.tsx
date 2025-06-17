"use client";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white flex flex-col">
      <header className="py-8 px-6 text-center">
        <h1 className="text-5xl font-extrabold mb-4">TaskFlow</h1>
        <p className="max-w-xl mx-auto text-lg">A simple and intuitive task management app to boost your productivity.</p>
      </header>
      <main className="flex-grow px-6 max-w-5xl mx-auto">
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-6">Features</h2>
          <ul className="space-y-4 list-disc list-inside text-xl">
            <li>Organize tasks with projects and tags</li>
            <li>Set deadlines and reminders</li>
            <li>Collaborate with your team in real-time</li>
            <li>Track progress with task statuses and priorities</li>
            <li>Responsive design for mobile and desktop</li>
          </ul>
        </section>
      </main>
      <footer className="py-8 px-6 text-center text-sm text-purple-200">
        &copy; {new Date().getFullYear()} TaskFlow. All rights reserved.
      </footer>
    </div>
  );
}

