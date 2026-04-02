export interface ISlide {
    id: number;
    internalName: string | null;
    pathMobile: string;
    pathDesktop: string;
    alt: string;
    active: boolean;
    sortOrder: number;
}