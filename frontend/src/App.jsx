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

    //activité des éléments cliquables de la salle d'archives
    const [isClasseur, setIsClasseur] = useState(false)
    const [isCommode, setIsCommode] = useState(false)

    const navigate = useNavigate()

    const closeModal = () => {
        setIsOpen(false)
        if (isCommode) {
            setIsCommode(false)
        }
        if (isClasseur) {
            setIsClasseur(false)
        }
    }

    return (
        <Routes>
            <Route path="/" element={<GameIntro navigate={navigate} Link={Link} />} />
            <Route path="/choose-room" element={<ChooseRoom Link={Link} />} />
            <Route
                path="/analyse-room"
                element={<AnalyseRoom setIsOpen={setIsOpen} isOpen={isOpen} closeModal={closeModal} />}
            />
            <Route
                path="/research-room"
                element={<ResearchRoom setIsOpen={setIsOpen} isOpen={isOpen} closeModal={closeModal} />}
            />
            <Route
                path="/reserve-room"
                element={<ReserveRoom setIsOpen={setIsOpen} isOpen={isOpen} closeModal={closeModal} />}
            />
            <Route
                path="/archieve-room"
                element={
                    <ArchiveRoom
                        setIsOpen={setIsOpen}
                        isOpen={isOpen}
                        closeModal={closeModal}
                        isClasseur={isClasseur}
                        setIsClasseur={setIsClasseur}
                        isCommode={setIsCommode}
                        setIsCommode={setIsCommode}
                    />
                }
            />
        </Routes>
    )
}

export default App
