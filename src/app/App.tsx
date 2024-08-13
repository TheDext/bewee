import './styles/index.scss';
import { AppRouter } from './providers/router';
import AppLoader from 'app/appLoader';

const App = () => (
    <AppLoader>
        <AppRouter />
    </AppLoader>
);
export default App;
