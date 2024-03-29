import React, { useState } from 'react';
import styles from "./CookieBanner.module.scss"
import cookieCutter from 'cookie-cutter';

function CookieBanner() {
  //  const [accepted, setAccepted] = useState(cookieCutter.get('cookiesAccepted'));
  const [accepted, setAccepted] = useState("");
    const handleAccept = () => {
      setAccepted(true);
      cookieCutter.set('cookiesAccepted', 'true', { expires: 365 }); // Expires in 1 year
    };
  
    if (accepted) {
      return null; // Don't display the banner if accepted
    }



//     const [accepted, setAccepted] = useState(false);

//   const handleAccept = () => {
//     setAccepted(true);
//     localStorage.setItem('cookiesAccepted', 'true');
//   };

//   if (accepted || localStorage.getItem('cookiesAccepted')) {
//     return null; // Don't display the banner if accepted or previously accepted
//   }


  return (
  
     
    <div className={styles["cookie-container"]}>
         <div className={styles["cookie-content"]}>
         <p>This website uses cookies to enhance your experience and for web analytics purposes. Read our <a href="#">Privacy notice</a> to learn more or <a href="">to change your cookie preferences</a> . By continuing to browse the site, you agree to our use of cookies.</p>
         </div>
         <div className={styles["cookie-button"]}>
         <button type="button" onClick={handleAccept}>
        I agree
      </button>
         </div>
    </div>
  
    
  );
};

export default CookieBanner;
