import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    padding: 12px 24px; /* 더 넉넉한 여백 */
    font-size: 18px; /* 조금 더 큰 텍스트 */
    background: #007bff;
    color: white; /* 흰색 텍스트 */
    border: none; /* 기본 테두리 제거 */
    border-radius: 8px; /* 둥근 테두리 */
    cursor: pointer;
    transition: background-color 0.3s ease; /* 호버 시 색상 변경을 위한 애니메이션 */

    &:hover {
        background-color: #0056b3; /* 호버 시 더 어두운 파란색 */
    }

    &:active {
        background-color: #004085; /* 클릭 시 더 어두운 색상 */
    }
`;

function Button(props) {
    const { title, onClick } = props;
    return (
        <StyledButton onClick={onClick}>{title || "BUTTON"}</StyledButton>
    );
}

export default Button;
