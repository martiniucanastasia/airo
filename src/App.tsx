import MainLayout from './components/Layout/MainLayout';
import { Map } from './components/Map/Map';
import { withMapContext } from './context/MapContext';

const App = () => {
  return (
    <MainLayout>
      <Map />
    </MainLayout>
  );
};

export default withMapContext(App);
