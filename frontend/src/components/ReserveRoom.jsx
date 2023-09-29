import ReserveImage from '../images/reserve.png'
import { ImageMap } from '@qiuz/react-image-map'
import '../style/room.css'

function ReserveRoom() {
    const mapArea = [
        {/*Boite a droite*/
        width:'8.90909090909091%',
        height:'23.35135135135135%',
        left:'46.96969696969697%',
        top:'54.59459459459459%'},
        {/*Etagere a gauche*/
        width:'8.90909090909091%',
        height:'23.35135135135135%',
        left:'36.96969696969697%',
        top:'54.324324324324316%'}
    ]

    const onMapClick = (area, index) => {
        console.log(area, index)
    }

    return (
        <div>
            <ImageMap className="usage-map" src={ReserveImage} map={mapArea} onMapClick={onMapClick}/>
            <h2 id="room-title">Salle de reserve</h2>
        </div>
    )
}

export default ReserveRoom
