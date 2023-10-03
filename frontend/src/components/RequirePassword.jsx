import { useState } from 'react'
import '../style/mdp.css'

function RequirePassword({ setRequirePassword, password }) {
    const [inputPassword, setInputPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (inputPassword === password) {
            setRequirePassword(false);
            setError('');
        } else if (inputPassword === '') {
            setError('Entrez un mot de passe');
        } else {
            setError('Mauvais mot de passe');
        }
    }

    const handleChange = (e) => {
        e.preventDefault()
        setError('')
        setInputPassword(e.target.value)
    }

    return (
        <div className="container-mdp">
            <form className="form-mdp" onSubmit={handleSubmit}>
                <label htmlFor="">Mot de passe </label>
                <input type="text" value={inputPassword} onChange={handleChange} />
                <button className="button-mdp" type="submit">Entrez</button>
                {error && <div style={{ color: 'red' }}>{error}</div>}
                
            </form>
        </div>
    )
}

export default RequirePassword
