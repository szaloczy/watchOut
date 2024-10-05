import { Box, useColorModeValue } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import CreatePage from "./pages/CreatePage";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Watches from "./pages/Watches";
import NewsPage from "./pages/NewsPage";
import BlogPage from "./pages/BlogPage";


function App() {

  return (
       <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
        <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />}> </Route>
            <Route path="/create" element={<CreatePage />}></Route>
            <Route path="/watches" element={<Watches/>}> </Route>
            <Route path="/news" element={<NewsPage/>}></Route>
            <Route path="/blog" element={<BlogPage/>}></Route>
          </Routes>
       </Box> 
  );
}

export default App
