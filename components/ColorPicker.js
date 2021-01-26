import { GithubPicker } from 'react-color';
import { useState } from 'react';

export default function ColorPicker({color, onChangeHandler}) {
   const [open, setOpen] = useState(false);

   const handleOnClick = () => {
      setOpen(!open);
   };

   const handleClose = () => {
      setOpen(false);
   };

   const picker = (
      <div style={{ position: 'absolute', zIndex: '1000'}} onClick={handleClose}>
         <GithubPicker
            color={color}
            onChangeComplete={onChangeHandler}
         />
      </div>
   );

   return (
      <>
         <button
            style={{ backgroundColor: color, zIndex: '1000' }}
            onClick={handleOnClick}
            className="btn"
         ></button>
         {open ? picker : null}
      </>
   );
}
