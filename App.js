import { registerRootComponent } from "expo";
import { Provider } from "react-redux";
import AuthProvider from "./context/AuthContext";
import Navigation from "./navigation";
import { store } from "./redux/store";
import Toast from "react-native-toast-message";

export default function App() {
  return (
    <>
      <AuthProvider>
        <Provider store={store}>
          <Navigation />
        </Provider>
      </AuthProvider>
      <Toast />
    </>
  );
}

registerRootComponent(App);
