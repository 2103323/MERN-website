import { useState } from "react";
import { useAuth } from "../store/auth";
export const Contact = () => {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });

  const [userData, setUserData] = useState(true); // get the user data from useAuth
  const { user } = useAuth(); // get the user from useAuth

  if (userData && user) {
    setContact({
      username: user.username,
      email: user.email,
      message: "",
    });
    setUserData(false);
  }

  // lets tackle our handleInput
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };


  // handle fomr getFormSubmissionInfo
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(contact);
  };



  return (
    <>
      <section className="section-contact">
        <div className="contact-content container">
          <h1 className="main-heading">contact us</h1>
        </div>
        {/* contact page main  */}
        <div className="container grid grid-two-cols">
          <div className="contact-img">
            <img src="../../public/support.png" alt="we are always ready to help" />
          </div>

          {/* contact form content actual  */}
          <section className="section-form">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="off"
                  value={contact.username}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="email">email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={contact.email}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="message">message</label>
                <textarea
                  name="message"
                  id="message"
                  autoComplete="off"
                  value={contact.message}
                  onChange={handleInput}
                  required
                  cols="30"
                  rows="6"
                ></textarea>
              </div>

              <div >
                <button type="submit" className="error__button">submit</button>
              </div>
            </form>
          </section>
        </div>

      </section>
    </>
  );
};

// import { useState } from "react";
// import { useAuth } from "../store/auth";

// const defaultContactFormData = {
//   username: "",
//   email: "",
//   message: "",
// };

// // type UserAuth = boolean;
// export const Contact = () => {
//   const [data, setData] = useState(defaultContactFormData);

//   const { user } = useAuth();

//   console.log("frontend user ", user.email);

//   const [userData, setUserData] = useState(true);

//   if (userData && user) {
//     setData({
//       username: user.username,
//       email: user.email,
//       message: "",
//     });
//     setUserData(false);
//   }

//   const handleInput = (e) => {
//     // console.log(e);
//     const name = e.target.name;
//     const value = e.target.value;
//     setData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleContactForm = async (e) => {
//     e.preventDefault();
//   };

//   return (
//     <>
//       <section className="section-contact">
//         <div className="contact-content container">
//           <h1 className="main-heading">contact us</h1>
//         </div>
//         {/* <h1>Contact Page</h1> */}
//         <div className="container grid grid-half-cols">
//           <div className="contact-img">
//             <img src="../../public/register.png" alt="always ready to help you" />
//           </div>

//           <section className="section-form">
//             <form onSubmit={handleContactForm}>
//               <div>
//                 <label htmlFor="username">Username</label>
//                 <input
//                   type="text"
//                   name="username"
//                   id="username"
//                   value={data.username}
//                   onChange={handleInput}
//                   autoCapitalize="off"
//                   required
//                 />
//               </div>

//               <div>
//                 <label htmlFor="email">email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   id="email"
//                   autoComplete="off"
//                   value={data.email}
//                   onChange={handleInput}
//                   required
//                 />
//               </div>

//               <div>
//                 <label htmlFor="message">message</label>
//                 <textarea
//                   name="message"
//                   id="message"
//                   autoComplete="off"
//                   value={data.message}
//                   onChange={handleInput}
//                   required
//                   cols="30"
//                   rows="6"
//                 ></textarea>
//               </div>


//               <div>
//                 <button type="submit" className="error__button"> Submit </button>
//               </div>
//             </form>
//           </section>
//         </div>
//         <section className="mb-3">
//           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3846.147130512058!2d73.97920305000001!3d15.42260835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfba54fee5bafd%3A0x69e94eca83b5d602!2sIndian%20Institute%20Of%20Technology%20Goa!5e0!3m2!1sen!2sin!4v1718885438697!5m2!1sen!2sin"
//             width="100%" height="450"
//             allowfullscreen
//             loading="lazy"
//             referrerpolicy="no-referrer-when-downgrade">
//           </iframe>
//         </section>
//       </section>
//     </>
//   );
// };















