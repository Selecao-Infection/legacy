"use client";
import React, { useState } from "react";
import NameEdit from "./NameEdit";
import EmailEdit from "./EmailEdit";
import BioEdit from "./BioEdit";
interface EditPopUpProps {
  isOpen: boolean;
  closeEditPopUp: () => void;
  currentUser: any;
  email: string;
}

const EditPopUp: React.FC<EditPopUpProps> = ({
  isOpen,
  closeEditPopUp,
  currentUser,
  email
}) => {
  const [editPopUp, setEditPopUp] = useState<boolean>(false);
  const [popUp, setPopUp] = useState<string>("");

  const HandleRemovePopUp = () => setEditPopUp(false);
  const handleclosePopUp = (e: { target: { id: string } }) => {
    if (e.target.id === "ModelContainer") {
      closeEditPopUp();
    }
  };

  if (isOpen !== true) return null;
  return (
    <div>
      <div
        id="ModelContainer"
        onClick={() => handleclosePopUp}
        className="fixed inset-0 bg-black flex justify-center items-center bg-opacity-20 backdrop-blur-sm"
      >
        <div className="p-2 bg-[#494649] w-10/12 md:w-1/2 lg:1/3 shadow-inner border-e-emerald-600 rounded-lg py-5">
          <div className="w-full p-3 justify-center items-center">
            <h2
              onClick={() => {
                setPopUp("Name");
                setEditPopUp(true);
              }}
              className="font-semibold py-3 text-center text-[#ebebeb] text-xl cursor-pointer hover:bg-[#ffffff1a]"
              style={{
                fontFamily: "'SF Pro Display Regular', Helvetica, sans-serif",
              }}
            >
              Name
            </h2>
            {popUp === "Name" && (
              <NameEdit
                editPopUp={editPopUp}
                closePopUp={HandleRemovePopUp}
                currentUser={currentUser}
              />
            )}
            <hr />
            <h2
              onClick={() => {
                setPopUp("email");
                setEditPopUp(true);
              }}
              className="font-semibold py-3 text-center text-[#ebebeb] text-xl cursor-pointer hover:bg-[#ffffff1a]"
              style={{
                fontFamily: "'SF Pro Display Regular', Helvetica, sans-serif",
              }}
            >
              Email
            </h2>
            {popUp === "email" && (
              <EmailEdit
                editPopUp={editPopUp}
                closePopUp={HandleRemovePopUp}
                currentUser={currentUser}
                email={email}
              />
            )}
            <hr />
            <h2
              onClick={() => {
                setPopUp("Bio");
                setEditPopUp(true);
              }}
              className="font-semibold py-3 text-center text-[#ebebeb] text-xl cursor-pointer hover:bg-[#ffffff1a]"
              style={{
                fontFamily: "'SF Pro Display Regular', Helvetica, sans-serif",
              }}
            >
              Bio
            </h2>
            {popUp === "Bio" && (
              <BioEdit
                editPopUp={editPopUp}
                closePopUp={HandleRemovePopUp}
                currentUser={currentUser}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPopUp;
