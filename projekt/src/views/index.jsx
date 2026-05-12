import Body from "../components/body"
// import Header from "../components/header"
import "./index.scss"

const icon = [
    {
        headline: "Newsify",
        img: "/newsify_logo 1.svg"
    }
]

export default function Home({ allCategory }) {

    return (
        <>
            {/* <Header>
                {icon.map(icon => <Header icon={icon} />)}
            </Header> */}
            <Body allCategory={allCategory}>

            </Body>

        </>
    )
}