import { Provider } from "react-redux";
import Navigation from "./navigation";
import { store } from "./redux/store";
import AuthProvider from "./context/AuthContext";
import { registerRootComponent } from 'expo';

export default function App() {
  return (
    <AuthProvider>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </AuthProvider>
  );
}

registerRootComponent(App);