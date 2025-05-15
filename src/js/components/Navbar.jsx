
// 2.- Creo el componente (función)
export const Navbar = () => {
  // 3.- Codigo de JS

  const nav = 'Spain 108';

  // 4.- Retorno un solo elemento HTML 
  return (
<nav class="navbar navbar-expand-lg bg-secondary">
  <span class="navbar-text">
        Start Bootstrap
      </span>
  <div class="container">
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Services</a>
        </li>
         <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}