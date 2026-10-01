import styled from "@emotion/styled";

export const TodoListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

export const TodoItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 12px;
  font-size: 18px;
  color: rgb(13, 11, 42);
  background-color: rgb(222, 222, 232);
  border: 2px solid rgb(48, 43, 114);
  border-radius: 8px;
`;

export const DeleteButton = styled.button`
  padding: 8px 12px;
  background-color: rgb(18, 18, 86);
  color: white;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

