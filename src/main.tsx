import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import {Toaster} from "sonner";


ReactDOM.render(
    <BrowserRouter>
        <App />
        <Toaster />
    </BrowserRouter>,
    document.getElementById('root')
);
