import { createRoot } from 'react-dom/client';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { store } from 'app/store';

const root = createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <Suspense fallback="loading">
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Suspense>
    </Provider>
);
