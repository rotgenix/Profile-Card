import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { MdPerson } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";

const App = () => {

  // const [userdata, setUserData] = useState();
  const [img, setImg] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLasName] = useState('');
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [country, setCountry] = useState('')

  useEffect(() => {
    const callAPI = async () => {
      const { data } = await axios.get("https://randomuser.me/api/?page=1&results=1&seed=abc");

      const userdata = data.results[0];
      // setUserData(userdata);

      setFirstName(userdata.name.first);
      setLasName(userdata.name.last);
      setFirstName(userdata.name.first);

      if (userdata.gender === 'female') {
        setGender("Female");
      }

      setEmail(userdata.email);
      setPhone(userdata.phone);
      setCity(userdata.location.city);
      setState(userdata.location.state);
      setCountry(userdata.location.country);
      setImg(userdata.picture.large);

    }
    callAPI();
  }, []);


  return (
    <>

      <div className="profile-card bg-slate-900 h-screen" >
        <div className="profile-card-container  flex items-center justify-center h-screen">

          <div className="card bg-stone-50 flex gap-5 w rounded-lg overflow-hidden" >

            <img className="w-80 object-center" src={img} alt="" />

            <div className="user-details flex flex-col  justify-center gap-5 w-80 px-5">

              <div className="name flex items-center text-xl gap-1 font-semibold">
                <MdPerson />
                <p className=''>{firstName}</p>
                <p>{lastName}</p>
              </div>

              <div className="gender text-lg">{gender}</div>

              <div className="contacts text-lg flex flex-col gap-4">
                <p className='flex items-center gap-4'><FaPhoneAlt />{phone}</p>
                <p className='flex items-center gap-4'><MdOutlineMail />{email}</p>
              </div>

              <div className="address text-lg">
                <p className='flex items-center gap-4'><FaAddressCard />{city}, {state}, {country}</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default App