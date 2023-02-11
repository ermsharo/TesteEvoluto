import styled from "styled-components";
import { User } from "../../types";
import RegularCard from "./RegularCard";
import DeletedCard from "./DeletedCars";

export default function InfoCard({ status, username, email, id }: User) {
  if (status)
    return (
      <RegularCard id={id} username={username} status={status} email={email} />
    );
  return (
    <DeletedCard id={id} username={username} status={status} email={email} />
  );
}
