import MainCarousel from "@@@/shared/components/MainCarousel";
import axios from "axios";


export default async function MainBanner() {

    const slides = await axios.get('http://backend:4200/api/banner').then((res) => res.data)

    return (
        <MainCarousel slides={slides} />
    )
}