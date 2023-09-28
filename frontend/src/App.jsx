import AnalyseRoom from './components/AnalyseRoom'
import ChooseRoom from './components/ChooseRoom'
import ReserveRoom from './components/ReserveRoom'
import ArchiveRoom from './components/ArchieveRoom'
import ResearchRoom from './components/ResearchRoom'
import GameIntro from './components/GameIntro'
import { useState } from 'react'
import { Routes, Route, useNavigate, Link } from 'react-router-dom'

function App() {
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate()

    const closeModal = () => {
        setIsOpen(false)
    }

    return (
        <Routes>
            <Route path="/" element={<GameIntro navigate={navigate} Link={Link} />} />
            <Route path="/choose-room" element={<ChooseRoom Link={Link} />} />
            <Route path="/analyse-room" element={<AnalyseRoom />} />
            <Route path="/research-room" element={<ResearchRoom />} />
            <Route path="/reserve-room" element={<ReserveRoom />} />
            <Route path="/archieve-room" element={<ArchiveRoom />} />
        </Routes>
    )
}

export default App
