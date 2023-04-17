import ChakraContainer from "./components/ChakraContainer";
import Navbar from "./components/Navbar";
import RoutesTree from "./components/RoutesTree";
import { AuthProvider } from "./lib/AuthContext";
import { InputProvider } from "./lib/InputContext";
import { TweetProvider } from "./lib/TweetContext";

const App = () => {
  return (
    <ChakraContainer>
      <AuthProvider>
        <InputProvider>
          <TweetProvider>
            <Navbar />
            <RoutesTree />
          </TweetProvider>
        </InputProvider>
      </AuthProvider>
    </ChakraContainer>
  );
};

export default App;
