import Link from 'next/link';

export default function Navbar() {
   return (
      <>
         <nav className="amber">
            <div className="container nav-wrapper">
               <Link href="/home">
                  <a className="brand-logo">
                     <i className="material-icons">event_note</i>
                     Todos one
                  </a>
               </Link>
               <a href="#" data-target="nav-mobile" className="sidenav-trigger">
                  <i className="material-icons">menu</i>
               </a>

               <ul className="right hide-on-med-and-down">
                  <Link href="/register">
                     <li>
                        <a>Sign Up</a>
                     </li>
                  </Link>
                  <Link href="/login">
                     <li>
                        <a>Log In</a>
                     </li>
                  </Link>
                  <Link href="/about">
                     <li>
                        <a>About</a>
                     </li>
                  </Link>
               </ul>
            </div>
         </nav>
         <ul className="sidenav" id="nav-mobile">
            <Link href="/register">
               <li>
                  <a>Sign Up</a>
               </li>
            </Link>
            <Link href="/login">
               <li>
                  <a>Log In</a>
               </li>
            </Link>
            <Link href="/about">
               <li>
                  <a>About</a>
               </li>
            </Link>
            <li>
               <a className="sidenav-close" href="#!">Close</a>
            </li>
         </ul>
      </>
   );
}
