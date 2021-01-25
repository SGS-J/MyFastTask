import { useState } from 'react';

export default function Register(params) {
   const [inputValues, setInputValues] = useState({
      username: '',
      password: '',
      'conf-password': '',
      gender: '',
      birthday: '',
      UIColor: '',
      avatar: '',
   });

   const handleOnChange = event => {
      const { name, value } = event.target;
      setInputValues({ ...inputValues, [name]: value });
   };

   const handleBlurConfPassword = event => {
      const element = event.target;
      const value = element.value;
      if (value === inputValues.password) {
         element.classList.remove('invalid');
         element.classList.add('valid');
      } else {
         element.classList.remove('valid');
         element.classList.add('invalid');
      }
   };

   return (
      <>
         <form
            style={{
               marginTop: '5em',
            }}
            className="row container"
         >
            <div className="input-field col s12 m6 offset-m3">
               <i className="material-icons prefix">account_circle</i>
               <input
                  name="username"
                  id="username"
                  type="text"
                  className="validate"
                  value={inputValues.username}
                  onChange={handleOnChange}
                  pattern=".{3,}"
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
               <i className="material-icons prefix">vpn_key</i>
               <input
                  name="password"
                  id="password"
                  type="password"
                  className="validate"
                  value={inputValues.password}
                  onChange={handleOnChange}
                  pattern=".{8,}"
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
               <i className="material-icons prefix">vpn_key</i>
               <input
                  name="conf-password"
                  id="conf-password"
                  type="password"
                  className="validate"
                  value={inputValues['conf-password']}
                  onChange={handleOnChange}
                  onBlur={handleBlurConfPassword}
                  required
               />
               <label htmlFor="conf-password">Confirm Password</label>
               <span
                  className="helper-text"
                  data-error="must match with password as above"
                  data-success="right"
               ></span>
            </div>
            <div className="input-field col s12 m6 offset-m3">
               <select name="gender" id="gender" onChange={handleOnChange}>
                  <option value="" defaultValue>
                     Choose your option
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="">Prefer not to say</option>
               </select>
               <label htmlFor="gender">Gender</label>
            </div>
            <div className="input-field col s12 m6 offset-m3">
               <input
                  name="birthday"
                  id="birthday"
                  type="text"
                  className="datepicker"
               />
               <label htmlFor="birthday">Birthdate</label>
            </div>
         </form>
      </>
   );
}
