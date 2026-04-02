"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
// Замени путь на актуальный для твоего проекта
import ConfirmModal from "@@@/shared/adminComponents/ConfirmModal";
import axios from "axios";
import toast from "react-hot-toast";

export default function DeleteBannerButton({ id }: { id: number }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const router = useRouter();

    const handleDelete = async () => {
        setIsDeleting(true);
        try {
            await axios.delete(`/api/banner/${id}`);

            // После успешного удаления обновляем страницу, чтобы Next.js подтянул новые данные
            router.refresh();
            setIsModalOpen(false);
            toast.success("Баннер успешно удален");
        } catch (error) {
            console.error("Ошибка при удалении баннера:", error);
            toast.error('Ошибка при удалении баннера')
        } finally {
            setIsDeleting(false);
        }
    };

    return (
        <>
            <button
                onClick={() => setIsModalOpen(true)}
                className="text-red-500 hover:text-red-700 transition-colors p-1"
                title="Удалить"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
            </button>

            <ConfirmModal
                isOpen={isModalOpen}
                title="Удалить баннер?"
                message="Вы уверены, что хотите удалить этот баннер? Это действие нельзя отменить."
                onClose={() => setIsModalOpen(false)}
                onConfirm={handleDelete}
                isLoading={isDeleting}
            />
        </>
    );
}