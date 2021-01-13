export default function LogIn(params) {
   return (
      <>
         <div className="row container">
            <form
               style={{
                  marginTop: '5em',
               }}
               className="col s12"
            >
               <div className="row">
                  <div className="input-field col s12 m6 offset-m3">
                     <i class="material-icons prefix">account_circle</i>
                     <input type="text" id="username" className="validate" />
                     <label htmlFor="username">Username</label>
                  </div>
               </div>
               <div className="row">
                  <div className="input-field col s12 m6 offset-m3">
                     <i class="material-icons prefix">vpn_key</i>
                     <input
                        type="password"
                        id="password"
                        className="validate"
                     />
                     <label htmlFor="password">Password</label>
                  </div>
               </div>
               <div className="col s6 offset-s3">
                  <button
                     className="btn waves-effect waves-light"
                     type="submit"
                  >
                     Submit
                     <i class="material-icons right">send</i>
                  </button>
               </div>
            </form>
         </div>
      </>
   );
}
