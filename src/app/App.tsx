import { BrowserRouter as Router, Link } from 'react-router-dom';
import './styles/index.scss'
import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "app/providers/Router";

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Theme</button>
            <Router>
                <nav>
                    <Link to={"/"}>Main</Link>
                    <Link to={"/about"}>About</Link>
                </nav>
                <AppRouter />
            </Router>
        </div>
    );
}

export default App;