import "../globals.scss";
import {Toaster} from "react-hot-toast";
export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
        <body>
        {children}
        <Toaster />
        </body>
        </html>
    );
}
