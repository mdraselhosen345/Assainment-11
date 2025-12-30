import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { setDoc, doc } from "firebase/firestore";
import React, { useState } from 'react';
import { db } from "../../Firebase/Firebase.init";
import { auth, } from '../../Firebase/Firebase.init';

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [number, setNumber] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

const handleRegister = async (e) => {
  e.preventDefault();
  setError("");
  setLoading(true);

  try {
    
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;

    // 2️⃣ Save name in auth
    await updateProfile(user, {
      displayName: name,
    });

    // 3️⃣ Save extra data in Firestore
    await setDoc(doc(db, "users", user.uid), {
      name: name,
      email: email,
      number: number,
      uid: user.uid,
      createdAt: new Date(),
    });
        alert("Login successful!");
        setLoading(false);

  } catch (err) {
  if (err.code === "auth/email-already-in-use") {
    setError("This email is already registered");
  } else if (err.code === "auth/weak-password") {
    setError("Password should be at least 6 characters");
  } else {
    setError(err.message);
  }
  setLoading(false);
}

};

 return (
    <div>
       <div className="hero bg-[#fa90a0] h-[500px]">
        <div className="hero-content flex-col lg:flex-row-reverse ml-20 gap-20">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-[#3B3B3B]">Register Now</h1>
            <p className="py-6 text-[#525252]">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>

          <div className="card bg-[#faa8b4] w-full max-w-sm shrink-0 shadow-2xl ml-30">
            <div className="card-body">
              <form onSubmit={handleRegister}>
                <fieldset className="fieldset">

                  <label className="label text-black text-lg">Full Name</label>
                  <input 
                    type="text" 
                    className="input text-black text-lg bg-[#f7bfc8]" 
                    placeholder="Full Name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required             
                  />

                  <label className="label text-black text-lg">Email</label>
                  <input 
                    type="email" 
                    className="input text-black text-lg bg-[#f7bfc8]" 
                    placeholder="Email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />

                  <label className="label text-black text-lg">Password</label>
                  <input 
                    type="password" 
                    className="input text-black text-lg bg-[#f7bfc8]" 
                    placeholder="Password"
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    required              
                  />

                  <label className="label text-black text-lg">Number</label>
                  <input 
                    type="text" 
                    className="input text-black text-lg bg-[#f7bfc8]" 
                    placeholder="Number" 
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    required
                  />
                     {error && <p className="text-red-600 mt-2">{error}</p>}
                  {/* <button 
                    type="submit" 
                    className="btn bg-[#d3909a] mt-4 text-black w-full"
                    >
                      Regiter Now
                  </button> */}
                  <button type="submit" disabled={loading} className='btn bg-[#d3909a] mt-4 text-black w-full'>
                       {loading ? "Registering..." : "Register Now"}
                  </button>

                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Register;