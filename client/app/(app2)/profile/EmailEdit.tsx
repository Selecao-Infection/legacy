"use client"
import React, { useState } from 'react';
import axios from 'axios';

interface EmailEditProps {
  editPopUp: boolean;
  closePopUp: () => void;
  currentUser: { id: string};
 email:string
}

const EmailEdit: React.FC<EmailEditProps> = ({ editPopUp, closePopUp, currentUser }) => {
  const [email, setEmail] = useState<string>('');

  const handleClosePopUp = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target.id === 'EmailContainer') {
      closePopUp();
    }
  };

  if (!editPopUp) return null;

  const editEmail = () => {
    const userId = currentUser.id;
    if (!userId) {
      console.error("User ID is missing.");
      return;
    }
    axios
      .put(`http://localhost:4000/api/user/update/${userId}`, {
        email: email
      })
      .then(() => {
        console.log("Email updated!");
      })
      .catch((error) => {
        console.error("Error updating email:", error);
      });
  };

  return (
    <div
      id='EmailContainer'
      onClick={handleClosePopUp}
      className='fixed inset-0 bg-black flex justify-center items-center bg-opacity-20 backdrop-blur-sm'>
      <div className='p-2 bg-[#494649] w-10/12 md:w-1/2 lg:1/3 shadow-inner border-e-emerald-600 rounded-lg py-5'>
        <div className='w-full p-3 justify-center items-center'>
          <h2 className='font-semibold py-3 text-center text-xl text-[#ebebeb]'>
            Update your Email
          </h2>
          <div className='px-4 mt-5 shadow w-auto self-center rounded-lg dark:bg-dark-second'>
            <div className='p-2 border-b border-[#ffffff1a] dark:border-dark-third flex space-x-4'>
              <input
                type="email"
                className='flex-1 bg-[#ffffff1a] rounded-full flex items-center justify-start pl-4 dark:bg-dark-third text-gray-100 text-lg dark:text-dark-txt'
                placeholder='Enter new email...'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='p-2 flex justify-center'>
              <div className='w-1/3 flex space-x-2 justify-center items-center hover:bg-[#ffffff1a] dark:hover:bg-dark-third text-xl sm:text-3xl py-2 rounded-lg cursor-point'>
                <span
                  className='text-xs sm:text-sm font-semibold text-gray-100 dark:text-dark-txt'
                  onClick={()=>{editEmail(), window.location.reload()  }}>
                  Confirm
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailEdit;