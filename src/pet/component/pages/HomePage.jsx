import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../list/Header';
import Button from '../ui/Button';
import { AuthContext } from '../AuthContext';

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url('https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'); /* 배경 이미지 URL */
    background-size: cover; /* 화면 전체 덮기 */
    background-position: center; /* 이미지가 가운데에 오도록 설정 */
    background-repeat: no-repeat; /* 이미지 반복 안함 */
    height: 100vh;
    position: relative;
    
    /* 그라데이션 추가 */
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7)); /* 상단에서 하단으로 그라데이션 */
        z-index: 1;
    }
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;
    text-align: center;
    z-index: 2; /* 배경 위에 내용이 보이게 설정 */

    h2 {
        font-size: 2rem;
        margin-bottom: 24px;
        color: #fff; /* 텍스트 색상 흰색 */
    }

    p {
        margin: 16px 0;
        color: #e0e0e0;
    }

    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

function HomePage() {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();


    return (
            <Wrapper>
                <Header />
                <Container>
                    <h2>Pet Rest</h2>
                    <Button title="지역별로 보기" onClick={() => navigate('pet-search')} />
                        　　
                    <Button title="지도로 보기" onClick={() => navigate('pet-map')} />
                        　　
                    {user && (
                    <Button title="리뷰 작성" onClick={() => navigate('pet-review')} />
                )}
                </Container>
            </Wrapper>
    );
}

export default HomePage;
