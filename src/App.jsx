import Button from './components/button/Button';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <h1>Curso de React</h1>
      <Button color='steelblue'>Click Me!</Button>
      <Button color='#f9f'>Click Me!</Button>
    </>
  );
};

export default App;
