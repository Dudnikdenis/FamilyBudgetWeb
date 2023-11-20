import './App.css';
import { useMediaQuery } from 'react-responsive'
import Main from './component/Main/Main';
import MainMobile from './componentMobile/Main/MainMobile';

function App() {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1224px)"
  });

  const isMobile = useMediaQuery({
    query: "(max-width: 786px)"
  });
  return (
<>
{isDesktop&&<Main/>}
{isMobile&&<MainMobile/>}
</>
  );
}

export default App;