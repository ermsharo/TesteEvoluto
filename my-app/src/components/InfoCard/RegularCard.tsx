import styled from "styled-components";
import { User } from "../../types";
import { FaEdit, FaTrash, FaSave } from "react-icons/fa";
import { Colors } from "../../styles/defaultProps";
import { useState } from "react";
import { EditInput } from "../../styles/generalStyles";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
// import { addNewUser } from "./../redux/features/user/userSlice";
import { removeUser } from "./../../redux/features/user/userSlice";

export const TH = styled.th`
  padding: 0.5rem;
`;

export const IconList = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
`;

export const IconButton = styled.div`
  color: ${Colors.regularColor};
  cursor: pointer;
  :hover {
    color: ${Colors.secundaryfontColor};
  }
`;

export default function RegularCard({ username, email, id }: User) {
  const dispatch = useAppDispatch();

  const [formInputs, setFormInputs] = useState({
    username: username,
    email: email,
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setFormInputs({
      ...formInputs,
      [e.target.name]: value,
    });
  }

  const deleteUser = (id: string) => {
    dispatch(removeUser(id));
  };

  const [editMode, setEditMode] = useState(false);

  return (
    <>
      <TH>
        {!editMode ? (
          formInputs.username
        ) : (
          <EditInput
            type="text"
            placeholder="username"
            name="username"
            onChange={handleChange}
            value={formInputs.username}
            required
          />
        )}
      </TH>
      <TH>
        {!editMode ? (
          formInputs.email
        ) : (
          <EditInput
            type="text"
            onChange={handleChange}
            placeholder="email"
            name="email"
            value={formInputs.email}
            required
          />
        )}
      </TH>
      <TH>
        <IconList>
          {!editMode ? (
            <IconButton
              onClick={() => {
                setEditMode(true);
              }}
            >
              <FaEdit />
            </IconButton>
          ) : (
            <IconButton
              onClick={() => {
                setEditMode(false);
              }}
            >
              <FaSave />
            </IconButton>
          )}

          <IconButton>
            <FaTrash
              onClick={() => {
                deleteUser(id);
              }}
            />
          </IconButton>
        </IconList>
      </TH>
    </>
  );
}
