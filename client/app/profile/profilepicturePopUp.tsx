import React from 'react'

interface ProfilePicturePopUpProps {
  handleClosePoP: () => void;
}

const ProfilePicturePopUp: React.FC<ProfilePicturePopUpProps> = ({ handleClosePoP ,}) => {
  return (
    <div
    id='ProfilePicturesPopUp'
    onClick={handleClosePoP}
    className='fixed inset-0 bg-black flex justify-center items-center bg-opacity-20 backdrop-blur-sm  overflow-y-auto'>
   
      <div
        className='w-full p-3 justify-center items-center'>
        <React.Fragment>
        <div className="px-4 mt-5 shadow w-auto self-center rounded-lg dark:bg-dark-second">
            <div className="p-2 border-b border-[#ffffff1a] dark:border-dark-third flex space-x-4">
            <img className='flex  h-[500px] mt-10 rounded-md p-1' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPKKCRYdlQpWv277oSb7NgSUNCj03REe-yUQ&usqp=CAU" alt=""  />
            <img src="" alt="" />
            </div>
        </div>
    </React.Fragment>
  </div>
      </div>
  );
};

export default ProfilePicturePopUp;