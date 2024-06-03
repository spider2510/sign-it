import { Box } from '@mui/material';
import { SignPage } from './SignPage';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return <Box padding={4}>
    <Provider store={store}>
      <SignPage />
    </Provider>
  </Box>
}

export default App;
