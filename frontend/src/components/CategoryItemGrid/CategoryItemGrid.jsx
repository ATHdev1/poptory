import categoryIcons from '../../data/CategoryIcons';
import './CategoryItemGrid.css';

function CategoryIconGrid() {
    return (
        <div className="category-map">
            {categoryIcons.map(function (item, i) {
                const Icon = item.icon;
                return (
                    <div key={i} onClick={() => window.location.href = item.path}>
                        <Icon size={25} />
                    </div>
                );
            })}
        </div>
    );
}

export default CategoryIconGrid;