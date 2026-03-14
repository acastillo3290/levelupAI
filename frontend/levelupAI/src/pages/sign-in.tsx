function SignIn() {
  return (
    <>
      <form>
        <input type="text" name="username" placeholder="username" />
        <input type="text" name="password" placeholder="password" />
        <button type="submit">Sign in</button>
      </form>
    </>
  );
}

export default SignIn;
