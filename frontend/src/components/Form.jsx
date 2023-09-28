import { useState } from 'react'
import solution from '../secret/solution'

function Form() {
    // Déclaration et initialisation de l'état local pour les noms et quantités des ingrédients saisis
    const [ing1Name, setIng1Name] = useState('')
    const [ing2Name, setIng2Name] = useState('')
    const [ing3Name, setIng3Name] = useState('')
    const [ing4Name, setIng4Name] = useState('')
    const [ing1Qty, setIng1Qty] = useState(0)
    const [ing2Qty, setIng2Qty] = useState(0)
    const [ing3Qty, setIng3Qty] = useState(0)
    const [ing4Qty, setIng4Qty] = useState(0)

    console.log(solution)

    // On met à jour les états des noms et quantités des ingrédients saisis par le joueur

    const handleChangeName1 = (e) => {
        setIng1Name(e.target.value)
    }

    const handleChangeName2 = (e) => {
        setIng2Name(e.target.value)
    }

    const handleChangeName3 = (e) => {
        setIng3Name(e.target.value)
    }

    const handleChangeName4 = (e) => {
        setIng4Name(e.target.value)
    }

    const handleChangeQty1 = (e) => {
        setIng1Qty(Number(e.target.value))
    }

    const handleChangeQty2 = (e) => {
        setIng2Qty(Number(e.target.value))
    }

    const handleChangeQty3 = (e) => {
        setIng3Qty(Number(e.target.value))
    }

    const handleChangeQty4 = (e) => {
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
    const handleSubmit = () => {
        // Comparaison des ingrédients saisis avec ceux de la solution
        const correspondances = request.map((ing, index) => {
            // Utilisation de JSON.stringify pour comparer les objets
            return JSON.stringify(ing) === JSON.stringify(solution.remedy[index])
        })

        // Vérification si toutes les correspondances sont vraies

        correspondances.every(Boolean) ? alert(`mission réussie, l'antidote a été crée`) : alert(`tentative echouée`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Entrez le premier ingrédient</legend>
                <label htmlFor="ing1">Nom</label>
                <input type="text" name="ing1" value={ing1Name} required onChange={handleChangeName1} />
                <label htmlFor="qtyIng1">Quantité</label>
                <input type="number" name="qtyIng1" value={ing1Qty} required onChange={handleChangeQty1} />
            </fieldset>
            <fieldset>
                <legend>Entrez le deuxième ingrédient</legend>
                <label htmlFor="ing2">Nom</label>
                <input type="text" name="ing2" value={ing2Name} required onChange={handleChangeName2} />
                <label htmlFor="qtyIng2">Quantité</label>
                <input type="number" name="qtyIng2" value={ing2Qty} required onChange={handleChangeQty2} />
            </fieldset>
            <fieldset>
                <legend>Entrez le troisième ingrédient</legend>
                <label htmlFor="ing3">Nom</label>
                <input type="text" name="ing3" value={ing3Name} required onChange={handleChangeName3} />
                <label htmlFor="qtyIng3">Quantité</label>
                <input type="number" name="qtyIng3" value={ing3Qty} required onChange={handleChangeQty3} />
            </fieldset>
            <fieldset>
                <legend>Entrez le quatrième ingrédient</legend>
                <label htmlFor="ing4">Nom</label>
                <input type="text" name="ing4" value={ing4Name} required onChange={handleChangeName4} />
                <label htmlFor="qtyIng4">Quantité</label>
                <input type="number" name="qtyIng4" value={ing4Qty} required onChange={handleChangeQty4} />
            </fieldset>
            <input type="submit" value="Fabrication du remède" />
        </form>
    )
}

export default Form

/*

function arraysCheck(solution, remedy) {
    // Check if the arrays have the same length
    if (solution.length !== remedy.length) {
        return false
    }

    // Sort both arrays to ensure consistent order
    const sortedSolution = solution.slice().sort()
    const sortedRemedy = remedy.slice().sort()

    // Iterate through the arrays and compare each object
    for (let i = 0; i < sortedSolution.length; i++) {
        if (!objectsAreEqual(sortedSolution[i], sortedRemedy[i])) {
            return false
        }
    }

    return true
}

function objectsAreEqual(obj1, obj2) {
    // Compare objects based on their properties
    const keys1 = Object.keys(obj1)
    const keys2 = Object.keys(obj2)

    if (keys1.length !== keys2.length) {
        return false
    }

    for (const key of keys1) {
        if (obj1[key] !== obj2[key]) {
            return false
        }
    }

    return true
}

function verifyPassword(passwordUser, passwordSolution){
    if (passwordUser === passwordSolution){
        echo ("Accès autorisé");
    } else {
        echo ("Accès interdit");
    }
}

*/