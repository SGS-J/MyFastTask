import Link from 'next/link';

// document.addEventListener('DOMContentLoaded', function () {
//    const elems = document.querySelectorAll('.sidenav');
//    M.Sidenav.init(elems, options);
// });

export default function Navbar() {
   return (
      <>
         <nav className="amber">
            <div className="container nav-wrapper">
               <Link href="/">
                  <a className="brand-logo">
                     <i className="material-icons">event_note</i>
                     Todos one
                  </a>
               </Link>
               <a href="#" data-target="nav-mobile" class="sidenav-trigger">
                  <i class="material-icons">menu</i>
               </a>

               <ul className="right hide-on-med-and-down">
                  <li>
                     <a>Sass</a>
                  </li>
                  <li>
                     <a>Components</a>
                  </li>
                  <li>
                     <a>JavaScript</a>
                  </li>
               </ul>
            </div>
         </nav>
         <ul class="sidenav" id="nav-mobile">
            <li>
               <a href="sass.html">Sass</a>
            </li>
            <li>
               <a href="badges.html">Components</a>
            </li>
            <li>
               <a href="collapsible.html">Javascript</a>
            </li>
            <li>
               <a href="mobile.html">Mobile</a>
            </li>
         </ul>
      </>
   );
}
