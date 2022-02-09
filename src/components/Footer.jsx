import styled from "styled-components";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
import { BiMap, BiMobileAlt } from "react-icons/bi";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const Logo = styled.h1``;
const Description = styled.p`
  margin: 1rem 0;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.h1`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
`;

const Center = styled.div`
  flex: 1;
  padding: 1rem;
`;

const Title = styled.h3`
  margin-bottom: 1.5rem;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 0.5rem;
`;

const Right = styled.div`
  flex: 1;
  padding: 1rem;
`;
const ContactItem = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>KHRA.</Logo>
        <Description>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </Description>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <AiFillFacebook />
          </SocialIcon>
          <SocialIcon color="E4405f">
            <AiFillInstagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <AiFillTwitterCircle />
          </SocialIcon>
          <SocialIcon color="E60023">
            <AiFillLinkedin />
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>WishList</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>

      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <BiMap style={{ marginRight: "0.5rem" }} /> V.P.O Mehlan Tehsil Sunam
          Diss. Sangrur
        </ContactItem>
        <ContactItem>
          <BiMobileAlt style={{ marginRight: "0.5rem" }} />
          +91-9464861458
        </ContactItem>
        <ContactItem>
          <AiOutlineMail style={{ marginRight: "0.5rem" }} />
          honeykhra@gmail.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
