import { BrowserView, MobileView } from 'react-device-detect';
import MobilePage from './mobile/MobilePage';
import BrowserPage from './browser/BrowserPage';

function App() {
  return (
    <div className="App">
      <BrowserView>
        <BrowserPage/>
      </BrowserView>
      <MobileView>
        <MobilePage/>
      </MobileView>
    </div>
  );
}

export default App;
