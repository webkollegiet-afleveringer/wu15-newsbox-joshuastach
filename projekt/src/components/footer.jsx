import archive from "../assets/feather_bookmark.svg"
import settings from "../assets/feather_settings.svg"
import star from "../assets/feather_star.svg"
import home from "../assets/iconir_home.svg"

export default function Footer() {



    const footerContext = [
        {
            cx: "Home",
            img: { home }
        },
        {
            cx: "Archive",
            img: { archive }
        },
        {
            cx: "Popular",
            img: { star }
        },
        {
            cx: "Settings",
            img: { settings }
        }
    ]

    return (
        <>
        </>
    )
}