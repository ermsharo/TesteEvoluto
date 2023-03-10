import styled from "styled-components";
import { User } from "../../types";
import { FaTrashRestore } from "react-icons/fa";
import { Colors } from "../../styles/defaultProps";
import { useAppDispatch } from "../../redux/hooks";
import { restoreUser } from "./../../redux/features/user/userSlice";

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

export default function DeletedCards({ username, email, id }: User) {
  const dispatch = useAppDispatch();

  const restore = (id: string) => {
    dispatch(restoreUser(id));
  };

  return (
    <>
      <TH>{username}</TH>
      <TH>{email}</TH>
      <TH>
        <IconList>
          <IconButton>
            <FaTrashRestore
              onClick={() => {
                restore(id);
              }}
            />
          </IconButton>
        </IconList>
      </TH>
    </>
  );
}
