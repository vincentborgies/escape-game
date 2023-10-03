import { useState } from 'react'

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
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Mot de passe : </label>
            <input type="text" value={inputPassword} onChange={handleChange} />
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <button type="submit">Entrez</button>
        </form>
    )
}

export default RequirePassword
