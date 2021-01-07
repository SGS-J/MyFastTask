export default function LogIn(params) {
   return (
      <>
         <div class="row">
            <div class="col s12 m4">
               <div class="row">
                  <div class="input-field col s12">
                     <i class="material-icons prefix">account_circle</i>
                     <input
                        type="text"
                        class="autocomplete"
                     />
                     <label>Username</label>
                  </div>
               </div>
            </div>
         </div>
         <div class="row">
            <div class="col s12 m4">
               <div class="row">
                  <div class="input-field col s12">
                     <i class="material-icons prefix">vpn_key</i>
                     <input
                        type="text"
                        class="autocomplete"
                     />
                     <label>Password</label>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
