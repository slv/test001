import styled from "styled-components";
import { sizes } from "../theme";

export const TodoList = styled.div`
  padding: ${sizes.spacing}px;
  border-radius: ${sizes.spacing}px;
`;

export const TodoLoading = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -50px;
  margin-top: -10px;
  width: 100px;
  height: 20px;
  background: #000;
  animation: Loading-spin infinite 20s linear;

  @keyframes Loading-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
