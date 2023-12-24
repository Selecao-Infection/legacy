"use client"
import React from 'react'
 
interface EmailEditProps{
    editPopUp: boolean;
    closePopUp: () => void;
    currentUser: { id: string; userName: string }

}

const EmailEdit: React.FC<EmailEditProps> = ({ editPopUp, closePopUp ,currentUser}) => {
    console.log(currentUser,"mel emailedit");
    
  return (
    <div>
      
    </div>
  )
}

export default EmailEdit
