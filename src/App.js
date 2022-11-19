import { useState } from "react";
import "./App.css";
import Register from "./component/Register";
import Login from "./component/Login";

import { CometChat } from "@cometchat-pro/chat";
import {
  Box,
  Button,
  Heading,
  Input,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { CometChatUI } from "./cometchat-pro-react-ui-kit/CometChatWorkspace/src/components/CometChatUI";
import { CometChatUserListWithMessages } from "./cometchat-pro-react-ui-kit/CometChatWorkspace/src/components/Users";
import {
  CometChatConversationList,
  CometChatConversationListItem,
} from "./cometchat-pro-react-ui-kit/CometChatWorkspace/src/components/Chats";
import { CometChatGroupListWithMessages } from "./cometchat-pro-react-ui-kit/CometChatWorkspace/src/components/Groups";

function App() {
  const [user, setUser] = useState(null);
  const [phone, setPhone] = useState("");

  // logout
  const logout = () => {
    CometChat.logout().then(
      () => {
        //Logout completed successfully
        console.log("Logout completed successfully");
        setUser(null);
      },
      (error) => {
        //Logout failed with exception
        console.log("Logout failed with exception:", { error });
      }
    );
  };

  return (
    <Box>
      {user ? (
        <section id="chat_body">
          <Button colorScheme="red" onClick={() => logout()}>
            Logout
          </Button>

          <div style={{ width: "95vw", height: "500px" }}>
            {/* <CometChatUserListWithMessages /> */}
            {/* <CometChatGroupListWithMessages /> */}
            {/* <CometChatConversationList /> */}
            <CometChatUI />
          </div>
        </section>
      ) : (
        <section id="auth_forms">
          <Tabs
            isFitted
            variant="enclosed"
            w="30%"
            m="auto"
            boxShadow="dark-lg"
            p="6"
            rounded="md"
            bg="white"
          >
            <TabList mb="1em">
              <Tab>
                <Heading>Register</Heading>
              </Tab>
              <Tab>
                {" "}
                <Heading>Login</Heading>
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Register setUser={setUser} />
              </TabPanel>
              <TabPanel>
                <Login setUser={setUser} />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </section>
      )}
    </Box>
  );
}

export default App;
