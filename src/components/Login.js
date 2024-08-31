import React, { useState } from 'react';
import '../App.css';

const Login = ({ setAuth }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Burada basit bir kontrol örneği veriliyor. Gerçek bir doğrulama için backend entegrasyonu gereklidir.
        if (email === 'test@example.com' && password === 'password') {
            setAuth(true);
        } else {
            setError('Geçersiz e-posta veya şifre.');
        }
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h2>Giriş Yap</h2>
                {error && <div className="error-message">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">E-posta</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Şifre</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="login-button">Giriş Yap</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
