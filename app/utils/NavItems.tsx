import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Blog', path: '/blog' },
  { name: 'Resume', path: '/resume' },
  { name: 'Contact', path: '/contact' },
];

type Props = {
  activeItem: number;
  isMobile: boolean;
};

const NavItems: React.FC<Props> = ({ isMobile }) => {
  const pathname = usePathname();

  return (
    <nav className={isMobile ? 'flex flex-col space-y-4' : 'hidden md:flex space-x-6'}>
      {navItems.map((item, index) => (
        <Link
          href={item.path}
          key={index}
          className={`${
            pathname === item.path
              ? 'text-light-text dark:text-dark-text border-b-2 border-light-accent dark:border-dark-accent'
              : 'text-light-text dark:text-dark-text hover:text-light-buttonPrimaryHover dark:hover:text-dark-buttonPrimaryHover'
          } text-lg font-medium transition duration-300`}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

export default NavItems;
