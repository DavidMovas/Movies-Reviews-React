import { BrowserRouter as Router } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "app/providers/Router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { Modal } from "shared/ui/Modal/Modal";
import { useTheme } from "app/providers/ThemeProvider";
import React, { Suspense, useState } from "react";
import './styles/index.scss'


const App = () => {
    const {theme} = useTheme();

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback='Loading...'>
                <Router >
                    <Navbar />
                    <button onClick={() => setIsOpen(true)}>Open Modal</button>
                    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, atque consequuntur cumque delectus doloremque dolores eaque eius eligendi enim eos esse est et eveniet exercitationem expedita facere fugiat harum hic id illo illum ipsam ipsum iste iure laboriosam laudantium libero magnam magni maiores maxime minima minus modi molestiae molestias mollitia natus nemo neque nesciunt non nostrum nulla numquam odio odit omnis optio pariatur perferendis perspiciatis placeat porro possimus praesentium quae quaerat quam quasi qui quia quisquam quo quos ratione recusandae reiciendis rem repellat reprehenderit repudiandae rerum saepe sapiente sed similique sint sit soluta sunt suscipit tempora temporibus tenetur totam ullam unde vel velit veniam voluptas voluptate voluptatem voluptatibus voluptatum?
                    </Modal>
                    <div className="content-page">
                        <Sidebar />
                        <AppRouter />
                    </div>
                </Router>
            </Suspense>
        </div>
    );
}

export default App;