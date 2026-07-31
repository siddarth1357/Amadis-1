import { createRootRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <nav className="bg-gray-900 p-5 flex gap-5 justify-center border-b border-gray-700">
        <Link to="/" className="text-white hover:text-purple-400 no-underline">
          🏠 Home
        </Link>
        <Link to="/feedback" className="text-white hover:text-purple-400 no-underline">
          📝 Give Feedback
        </Link>
      </nav>
      <Outlet />
    </>
  )
}