import { useState } from 'react'
import solution from '../secret/solution'
import '../style/form.css'
import Success from './Success'

function Form({ setIsOpenSuccess, isOpenSuccess, setIsOpen}) {
    // Déclaration et initialisation de l'état local pour les noms et quantités des ingrédients saisis
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState('')

    const [ing1Name, setIng1Name] = useState('')
    const [ing2Name, setIng2Name] = useState('')
    const [ing3Name, setIng3Name] = useState('')
    const [ing4Name, setIng4Name] = useState('')
    const [ing1Qty, setIng1Qty] = useState(0)
    const [ing2Qty, setIng2Qty] = useState(0)
    const [ing3Qty, setIng3Qty] = useState(0)
    const [ing4Qty, setIng4Qty] = useState(0)

    // On met à jour les états des noms et quantités des ingrédients saisis par le joueur

    const handleChangeName1 = (e) => {
        setError('')
        setIng1Name(e.target.value)
    }

    const handleChangeName2 = (e) => {
        setError('')
        setIng2Name(e.target.value)
    }

    const handleChangeName3 = (e) => {
        setError('')
        setIng3Name(e.target.value)
    }

    const handleChangeName4 = (e) => {
        setError('')
        setIng4Name(e.target.value)
    }

    const handleChangeQty1 = (e) => {
        setError('')
        setIng1Qty(Number(e.target.value))
    }

    const handleChangeQty2 = (e) => {
        setError('')
        setIng2Qty(Number(e.target.value))
    }

    const handleChangeQty3 = (e) => {
        setError('')
        setIng3Qty(Number(e.target.value))
    }

    const handleChangeQty4 = (e) => {
        setError('')
        setIng4Qty(Number(e.target.value))
    }

    // Création des ingrédients sous forme d'objets à partir des états actuels des noms et quantités

    const ing1 = {
        nom: ing1Name,
        qty: ing1Qty
    }
    const ing2 = {
        nom: ing2Name,
        qty: ing2Qty
    }
    const ing3 = {
        nom: ing3Name,
        qty: ing3Qty
    }
    const ing4 = {
        nom: ing4Name,
        qty: ing4Qty
    }

    // Création d'un tableau "request" contenant les ingrédients saisis par l'utilisateur
    const request = [ing1, ing2, ing3, ing4]

    // à l'envoi du formulaire on execute :
    const handleSubmit = (e) => {
        e.preventDefault()

        const onSuccess = () => {
            setSuccess(true)
            setIsOpenSuccess(true)
        }

        // Comparaison des ingrédients saisis avec ceux de la solution
        const correspondances = request.map((ing, index) => {
            // Utilisation de JSON.stringify pour comparer les objets
            return JSON.stringify(ing) === JSON.stringify(solution.remedy[index])
        })

        // Vérification si toutes les correspondances sont vraies

        correspondances.every(Boolean) ? onSuccess() : setError('Mauvaise combinaison, veuillez réessayer')

        /*correspondances.every(Boolean) && setSuccess(true)
        setDisplaySuccess(true)
        setIsOpenSuccess(true)*/
    }

    return (
        <>
            {success && <Success success={success} isOpenSuccess={isOpenSuccess} setIsOpenSuccess={setIsOpenSuccess} setIsOpen={setIsOpen} />}
            <form onSubmit={handleSubmit} className="ingredient-form">
                <fieldset className="container">
                    <div className="form-group">
                        <legend>Entrez le premier ingrédient</legend>
                        <input type="text" name="ing1" value={ing1Name} required onChange={handleChangeName1} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="qtyIng1">Quantité</label>
                        <input type="text" name="qtyIng1" value={ing1Qty} required onChange={handleChangeQty1} />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <legend>Entrez le deuxième ingrédient</legend>

                        <input type="text" name="ing2" value={ing2Name} required onChange={handleChangeName2} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="qtyIng2">Quantité</label>
                        <input type="text" name="qtyIng2" value={ing2Qty} required onChange={handleChangeQty2} />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <legend>Entrez le troisième ingrédient</legend>
                        <input type="text" name="ing3" value={ing3Name} required onChange={handleChangeName3} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="qtyIng3">Quantité</label>
                        <input type="text" name="qtyIng3" value={ing3Qty} required onChange={handleChangeQty3} />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <legend>Entrez le quatrième ingrédient</legend>
                        <input type="text" name="ing4" value={ing4Name} required onChange={handleChangeName4} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="qtyIng4">Quantité</label>
                        <input type="text" name="qtyIng4" value={ing4Qty} required onChange={handleChangeQty4} />
                    </div>
                </fieldset>
                <div className="btn" style={{ display: 'flex', flexDirection: 'column' }}>
                    <input type="submit" value="Fabrication du remède" className="submit-button" />
                    <div style={{ color: 'red' }}>{error}</div>
                </div>
            </form>
        </>
    )
}

export default Form
