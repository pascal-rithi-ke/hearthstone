export default function Login() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const { username, password } = Object.fromEntries(formData.entries());

    if (!username || !password) return;

    fetch(`${import.meta.env.VITE_API_URL}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    form.reset();
  };

  return (
    <>
      <div>
        <h1>Connexion</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Nom d'utilisateur</label>
            <input
              type="text"
              id="username"
              name="username"
              minLength={3}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              id="password"
              name="password"
              minLength={6}
              autoComplete="current-password"
              required
            />
          </div>

          <button type="submit">Se connecter</button>
        </form>
      </div>
    </>
  );
}
