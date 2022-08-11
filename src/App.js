import { useState } from "react";
import Categories from "./components/Categories";
import Menu from "./components/Menu";
import data from './data'

const App = () => {
    const [catName,setCatName] = useState("All")

    const transferCatName = (e) => {
        setCatName(e);
    }
    return (
        <main>
            <section className="section">
                <div className="title">
                    <h2>our Menu</h2> <div className="underline"></div>
                </div>
                <Categories data={data} transferCatName={transferCatName}/>
                <Menu data={data} catName={catName}/>
            </section>
        </main>
    );
};

export default App;
