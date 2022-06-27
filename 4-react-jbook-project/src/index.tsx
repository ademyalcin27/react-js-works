import ReactDOM from 'react-dom';
import 'bulmaswatch/superhero/bulmaswatch.min.css';
import TextEditor from './components/textEditor';
import { Provider } from 'react-redux';
import { store } from './state';


const App = () => {
    
    return (
        <Provider store={store}>
            <div>
                <TextEditor />
            </div>
        </Provider>
    )
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)