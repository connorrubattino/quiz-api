import Navigation from "./components/Navigation";
import { Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Questions from "./views/Questions";
import SignUp from "./views/SignUp";


export default function App() {
    return (
        <>
            <Navigation/>
            <Container>
                <Routes>
                    <Route path='/question/all' element={<Questions/>} />
                    <Route path='/user' element={<SignUp/>} />
                </Routes>
            </Container>

        </>
  )
}