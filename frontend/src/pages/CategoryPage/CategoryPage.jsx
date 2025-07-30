import { useParams } from "react-router-dom";
import './CategoryPage.css'

import popups from "../../data/popups.jsx";
import CategoryItemGrid from '../../components/CategoryItemGrid/CategoryItemGrid.jsx';
import PopupCardLarge from '../../components/PopupCardLarge/PopupCardLarge.jsx';

function CategoryPage() {
    const { category } = useParams();
    const filteredPopups = popups.filter(function (popup) {
        return popup.카테고리 == category;
    })

    return (
        <div>
            <CategoryItemGrid></CategoryItemGrid>
            <div className="CategoryPage-name-wrapper">
                <h3>{category}</h3>
            </div>
            <div className="CategoryPage-popupCards-wrapper">
                {filteredPopups.map(function (popup) {
                    return (
                        <PopupCardLarge popup={popup} key={popup.id}></PopupCardLarge>
                    )
                })}
            </div>
        </div>
    )
}

export default CategoryPage;