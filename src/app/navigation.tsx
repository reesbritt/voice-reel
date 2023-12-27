// Header.tsx
import Link from "next/link";

export const NavHeader: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white py-4 px-6 w-full hidden md:block">
      <nav>
        <ul className="list-none m-0 p-0 flex ">
          <li className="mr-4">
            <Link href="/home">
              <p className="text-white no-underline font-bold">Home</p>
            </Link>
          </li>
          <li className="mr-4">
            <Link href="/home#about">
              <p className="text-white no-underline font-bold">About</p>
            </Link>
          </li>
          <li className="mr-4">
            <Link href="/process">
              <p className="text-white no-underline font-bold">Process</p>
            </Link>
          </li>
          <li className="mr-4">
            <Link href="/packages">
              <p className="text-white no-underline font-bold">Packages</p>
            </Link>
          </li>
          <li>
            <Link href="/home#contact">
              <p className="text-white no-underline font-bold">Contact</p>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
