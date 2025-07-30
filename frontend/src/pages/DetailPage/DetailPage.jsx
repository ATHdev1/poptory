import { useParams } from 'react-router-dom';
import './DetailPage.css';

import DetailPage_popupOverview from '../../components/DetailPage_popupOverview/DetailPage_popupOverview.jsx';
import popups from '../../data/popups.jsx';

function DetailPage() {
    const { id } = useParams();
    const [popup] = popups.filter(function (popup) {
        return popup.id == id;
    })
    return (
        <div>
            <DetailPage_popupOverview popup={popup}></DetailPage_popupOverview>
        </div>
    )
}

export default DetailPage;