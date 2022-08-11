import classes from "./Categories.module.css";

const Categories = ({ data, transferCatName }) => {
    let uniqueCategories = [
        "All",
        ...new Set(
            data.map((element) => {
                return element.category;
            })
        ),
    ];

    function catHandler(e) {
        const catName = e.target.innerText;
        transferCatName(catName);
    }

    return (
        <div className={classes.categories}>
            {uniqueCategories.map((category) => {
                return (
                    <button
                        type="button"
                        className="filter-btn"
                        key={category}
                        onClick={catHandler}
                    >
                        {category}
                    </button>
                );
            })}
        </div>
    );
};

export default Categories;
