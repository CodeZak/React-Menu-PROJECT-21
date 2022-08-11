import classes from "./Menu.module.css";

const Menu = ({ data, catName }) => {
    let filteredData;
    if (catName === "All") {
        filteredData = data;
    } else {
        filteredData = data.filter((e) => {
            return e.category === catName;
        });
    }

    return (
        <div className={classes.menu}>
            {filteredData.map((element) => {
                const { id, title, category, price, img, desc } = element;
                return (
                    <article key={id} category={category}>
                        <div className={classes.picture}>
                            <img src={img} alt="" />
                        </div>
                        <div className={classes.article__head}>
                            <div className={classes.article__title}>
                                {title}
                            </div>
                            <span className={classes.article__price}>
                                {price}
                            </span>
                        </div>
                        <div className={classes.article__description}>
                            {desc}
                        </div>
                    </article>
                );
            })}
        </div>
    );
};

export default Menu;
