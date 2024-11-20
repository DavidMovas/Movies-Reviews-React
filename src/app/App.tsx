import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "app/providers/Router";
import { Navbar } from "widgets/Navbar";
import { useTheme } from "app/providers/ThemeProvider";
import { BrowserRouter as Router } from "react-router-dom";
import './styles/index.scss'

const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Router >
                <Navbar />
                <AppRouter />
            </Router>
        </div>
    );
}

export default App;