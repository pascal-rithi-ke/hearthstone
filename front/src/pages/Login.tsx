export default function Login() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const { username, password } = Object.fromEntries(formData.entries());

    fetch("http://localhost:5000/api/user/login", {
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
            <input type="text" id="username" name="username" />
          </div>
          <div>
            <label htmlFor="password">Mot de passe</label>
            <input type="password" id="password" name="password" />
          </div>

          <button type="submit">Se connecter</button>
        </form>
      </div>
    </>
  );
}
