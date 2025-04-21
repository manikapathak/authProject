import { auth0 } from "@/lib/auth0";
import './globals.css';

export default async function Home() {
  const session = await auth0.getSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-6">
      {!session ? (
        <div className="text-center space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">Welcome to Our App</h1>
          <p className="text-gray-600">Please sign up or log in to continue</p>
          <div className="space-x-4">
            <a href="/auth/login?screen_hint=signup">
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Sign up
              </button>
            </a>
            <a href="/auth/login">
              <button className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition">
                Log in
              </button>
            </a>
          </div>
        </div>
      ) : (
        <div className="text-center space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Welcome, {session.user.name}!
          </h1>
          <div className="space-x-4">
            <a href="/auth/dashboard">
              <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                Go to Dashboard
              </button>
            </a>
            <a href="/auth/logout">
              <button className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
                Log out
              </button>
            </a>
          </div>
        </div>
      )}
    </main>
  );
}
