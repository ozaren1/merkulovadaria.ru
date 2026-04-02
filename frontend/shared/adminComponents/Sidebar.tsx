// /components/Sidebar.tsx

'use client'; // Этот компонент будет клиентским для интерактивности

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Users, Settings, LayoutDashboard } from 'lucide-react';
import clsx from 'clsx';

const links = [
    { name: 'Дашборд', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Пользователи', href: '/users', icon: Users },
    { name: 'Настройки', href: '/settings', icon: Settings },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-64 flex-shrink-0 bg-white dark:bg-gray-800 shadow-md">
            <div className="flex items-center justify-center h-16 border-b dark:border-gray-700">
                <Link href="/dashboard" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                    Admin
                </Link>
            </div>
            <nav className="mt-4">
                <ul>
                    {links.map((link) => {
                        const LinkIcon = link.icon;
                        return (
                            <li key={link.name} className="px-4 py-2">
                                <Link
                                    href={link.href}
                                    className={clsx(
                                        'flex items-center p-2 rounded-lg transition-colors',
                                        {
                                            'bg-indigo-600 text-white': pathname === link.href,
                                            'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700': pathname !== link.href,
                                        }
                                    )}
                                >
                                    <LinkIcon className="w-5 h-5 mr-3" />
                                    <span>{link.name}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </aside>
    );
}