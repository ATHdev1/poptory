import { useParams } from "react-router-dom";
import './CategoryPage.css'
import popups from "../../data/popups.jsx";
import CategoryItemGrid from '../../components/CategoryItemGrid/CategoryItemGrid.jsx'

function CategoryPage(){
    const {category} = useParams();
    const filteredPopups = popups.filter(function(popup){
        return popup.category==category;
    })

    return(
        <div>
            <CategoryItemGrid></CategoryItemGrid>
            <div className="categoryPage-name-wrapper">
                <h3>{category}</h3>
            </div>
        </div>
    )
}

export default CategoryPage;