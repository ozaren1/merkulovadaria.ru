"use client"
import {useState} from "react";
import CreateBannerModal from "@@@/shared/adminComponents/CreateBannerModal";

export default function CreateBannerButton() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClickButton = () => setIsOpen(prev => !prev);

    return (
        <>
            <button
                className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg shadow-sm transition-colors"
                onClick={handleClickButton}
            >
                {/* Иконка плюса */}
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Создать новый
            </button>
            {isOpen && (<CreateBannerModal onClose={handleClickButton} isOpen={isOpen} />)}
        </>
    )
}