


const Login = () => {
    const view = `
    <script>
    function login() {
        alert('LOGIN')
    }

    </script>
    <section class="ftco-section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-7 col-lg-5">
            <div class="login-wrap p-4 p-md-5">
              <div class="col pb-4">
                <img class="img-thumbnail" alt="ESPOL LOGO" src="../../public/logoEspolPNG.png">
              </div>
              <form action="#" class="login-form">
                <div class="col input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">@</span>
                  <input id="username_input" type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
                </div>
                <div class="col input-group mb-3">
                  <span class="input-group-text" id="basic-addon3">Password</span>
                  <input type="password" class="form-control" id="password_input" aria-describedby="basic-addon3">
                </div>
                <div class="form-group">
                  <button onclick="login()" type="submit" class="form-control btn btn-primary rounded submit px-3">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
    return view;
};

export default Login;