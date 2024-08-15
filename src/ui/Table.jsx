import React from "react";
import styled from "styled-components";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

const StyedTable = styled.table`
  border: 1px solid var(--color-grey-200);
  border-radius: 7px;
  font-size: 1.4rem;
  overflow: hidden;
  align-self: flex-start;
`;

export default function Table({ children, columns, data = [], render }) {
  return (
    <StyedTable>
      <thead>
        <TableHeader columns={columns}>{children}</TableHeader>
      </thead>
      <tbody>
        <TableBody data={data} render={render} />
      </tbody>
    </StyedTable>
  );
}
