import logo from "../assets/newsify_logo1.svg";
import "./category.scss";

export default function Settingcategory({ category, number }) {
    const showCategory = localStorage.getItem(category) || "true"

    function inputHandler(event) {
        console.log(event.target.checked);

        localStorage.setItem(event.target.dataset.category, event.target.checked);
    }

    let numberSwitch = "switch-" + number;

    return (
        <>

            <li className="settings">
                <div className="category">
                    <img src={logo} alt="newsify logo" className="category__logo" />
                    <h4 className="category__headline">
                        {category}
                    </h4>
                    <form action="#" className="settings__container">
                        <div className="switch">
                            <input type="checkbox" id={numberSwitch} data-category={category} onInput={inputHandler} defaultChecked={showCategory === "true"} className="checkbox" />
                            <label htmlFor={numberSwitch} className="switch-label">{category}</label>
                        </div>
                    </form>
                </div>

            </li>
            <div className="inbetweenline"></div>
        </>
    )
}