import Settingcategory from "../components/settingCategory";
import "./settings.scss";

export default function Settings({ allCategory }) {






    return (
        <>
            <ul className="setting">
                <div className="inbetweenline"></div>
                {allCategory.map(category => <Settingcategory category={category.headline} number={category.number} key={category + category.number} />)}
            </ul>
        </>
    );
}