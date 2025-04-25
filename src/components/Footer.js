import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-white shadow-sm mb-4 dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <Link to="/" className="hover:underline">Moviesmate™</Link>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
                <Link to="https://www.instagram.com/sagarvaishnav_official/" target="_blank" className="hover:underline me-4 md:me-6" rel="noreferrer">Instagram</Link>
            </li>
            <li>
                <Link to="https://www.linkedin.com/in/sagar-vaishnav-877a6621/" target="_blank" className="hover:underline me-4 md:me-6" rel="noreferrer">LinkedIn</Link>
            </li>
            <li>
                <Link to="https://x.com/vsagar_mscit" target="_blank" className="hover:underline me-4 md:me-6" rel="noreferrer">X</Link>
            </li>
            <li>
                <Link to="https://github.com/sagar-vaishnav" target="_blank" className="hover:underline" rel="noreferrer">GitHub</Link>
            </li>
        </ul>
        </div>
    </footer>
  )
}
