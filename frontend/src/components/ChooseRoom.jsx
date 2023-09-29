import ReserveImage from '../images/reserve.png'
import ArchiveRoomImage from '../images/salle-archives.png'
import AnalyseRoomImage from '../images/salle-analyse.png'
import ResearchRoomImage from '../images/salle-recherche.png'
import '../style/choose-room.css'

function ChooseRoom({ Link }) {
    return (
        <div className="box">
            <div className="container">
                <div className="row">
                    <div className="img">
                        <Link to="/research-room">
                            <img src={ResearchRoomImage} alt="salle de recherche" />
                        </Link>
                        <div className="btn">
                            <h2>Salle de Recherche</h2>
                            <p>Maître du Jeu</p>
                        </div>
                    </div>

                    <div className="img">
                        <Link to="/analyse-room">
                            <img src={AnalyseRoomImage} alt="salle d'analyse" />
                        </Link>
                        <div className="btn">
                            <h2>Salle d'Analyse</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="img">
                        <Link to="/reserve-room">
                            <img src={ReserveImage} alt="réserve" />
                        </Link>
                        <div className="btn">
                            <h2>Réserve</h2>
                        </div>
                    </div>

                    <div className="img">
                        <Link to="/archieve-room">
                            <img src={ArchiveRoomImage} alt="archives" />
                        </Link>
                        <div className="btn">
                            <h2>Archives</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseRoom
