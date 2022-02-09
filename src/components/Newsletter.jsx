import { AiOutlineSend } from "react-icons/ai";
import styled from "styled-components";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
font-size: 4rem;
margin-bottom: 1rem;
`;
const Description = styled.div`
font-size: 2rem;
margin-bottom: 1rem;
`;
const InputContainer = styled.div`
width: 50%;
height: 40px;
background-color: white;
display: flex;
justify-content: space-between ;
border: 1px solid lightgrey;
`;
const Input = styled.input`
border: none;
flex: 8;
padding-left: 1rem;
`;
const Button = styled.button`
flex: 1;
border: none;
background-color: teal;
color: white;
font-size: 1.5rem;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely updates for your favorite products.</Description>
      <InputContainer>
        <Input placeholder="Your email"></Input>
        <Button>
          <AiOutlineSend />
        </Button>
      </InputContainer>
    </Container>
  );
};
export default Newsletter;
