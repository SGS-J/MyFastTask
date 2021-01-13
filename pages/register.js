import { useReducer } from 'react';

export default function Register(params) {
   const [inputValues, setInputValues] = useReducer(
      (state, newState) => ({ ...state, ...newState }),
      {
         username: '',
         password: '',
         'conf-password': '',
         gender: '',
         birthday: '',
         UIColor: '',
         avatar: '',
      }
   ,[]);

   const changeInputClass = (element, exp) => {
      if (exp) {
         element.classList.remove('invalid');
         element.classList.add('valid');
      } else {
         element.classList.remove('valid');
         element.classList.add('invalid');
      }
   };

   const handleOnChange = event => {
      const { name, value } = event.target;
      setInputValues({ [name]: value });
      verifyInputs(event.target);
   };

   const verifyInputs = element => {
      console.log(inputValues.username);
      switch (element.name) {
         case 'username': {
            changeInputClass(element, /.{3,}/.test(username));
            break;
         }

         case 'password': {
            changeInputClass(element, /.{8,}/.test(password));
            break;
         }

         case 'conf-password': {
            changeInputClass(element, confPassword === password);
            break;
         }
      }
   };

   return (
      <>
         <div className="row container">
            <form
               style={{
                  marginTop: '5em',
               }}
               className="col s12"
            >
               <div className="input-field col s12 m6 offset-m3">
                  <i class="material-icons prefix">account_circle</i>
                  <input
                     name="username"
                     id="username"
                     type="text"
                     className="validate"
                     value={inputValues.username}
                     onChange={handleOnChange}
                     required
                  />
                  <label htmlFor="username">Username</label>
                  <span
                     className="helper-text"
                     data-error="must have at least 3 characters"
                     data-success="right"
                  ></span>
               </div>
               <div className="input-field col s12 m6 offset-m3">
                  <i class="material-icons prefix">vpn_key</i>
                  <input
                     name="password"
                     id="password"
                     type="password"
                     className="validate"
                     onChange={e => handleOnChange(e)}
                     required
                  />
                  <label htmlFor="password">Password</label>
                  <span
                     className="helper-text"
                     data-error="must have at least 8 characters"
                     data-success="right"
                  ></span>
               </div>
               <div className="input-field col s12 m6 offset-m3">
                  <i class="material-icons prefix">vpn_key</i>
                  <input
                     name="conf-password"
                     id="conf-password"
                     type="password"
                     className="validate"
                     onChange={e => handleOnChange(e)}
                     required
                  />
                  <label htmlFor="conf-password">Confirm Password</label>
                  <span
                     className="helper-text"
                     data-error="must match with password as above"
                     data-success="right"
                  ></span>
               </div>
            </form>
         </div>
      </>
   );
}
