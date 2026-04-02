import Image from 'next/image';
import Link from 'next/link';
import axios from "axios";
import { ISlide } from "@@@/shared/types";
import CreateBannerButton from "@@@/shared/adminComponents/CreateBannerButton";
import DeleteBannerButton from "@@@/shared/adminComponents/DeleteBannerButton"; // <-- Импортируем нашу кнопку

// Делаем сам компонент async
export default async function BannersPage() {

    // Запрос перенесен внутрь! Так Next.js правильно отрендерит данные на сервере.
    const slides: ISlide[] = await axios.get('http://backend:4200/api/banner')
        .then((res) => res.data)
        .catch(() => []); // Защита от падения, если бэк недоступен

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            {/* --- Заголовок и кнопка создания --- */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Баннеры</h1>
                    <p className="text-sm text-gray-500 mt-1">Управление рекламными баннерами на сайте</p>
                </div>
                <CreateBannerButton />
            </div>

            {/* --- Таблица --- */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Превью</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Инфо</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Статус</th>
                            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Действия</th>
                        </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                        {slides.map((banner) => (
                            <tr key={banner.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="relative h-16 w-32 rounded-lg overflow-hidden border border-gray-200 bg-gray-100">
                                        <Image
                                            src={banner.pathDesktop}
                                            alt={banner.alt}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="text-sm font-medium text-gray-900">{banner.alt}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {/* Место для статуса */}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <div className="flex items-center justify-end gap-3">
                                        <Link href={`/admin/banners/edit/${banner.id}`} className="text-indigo-600 hover:text-indigo-900 transition-colors p-1" title="Редактировать">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                            </svg>
                                        </Link>

                                        {/* Вставляем нашу новую клиентскую кнопку */}
                                        <DeleteBannerButton id={banner.id} />
                                    </div>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>

                    {slides.length === 0 && (
                        <div className="text-center py-10 text-gray-500">
                            Баннеров пока нет. Создайте первый!
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}