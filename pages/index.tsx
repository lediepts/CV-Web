import styled from "styled-components";
import Layout from "../components/Layout/layout";
import Zoom from "react-reveal/Zoom";

const backgroundColor = "#fde";
const Title = styled.h1`
  color: blue;
  font-size: 50px;
`;

export default function Home() {
  return (
    <div className="app">
      <Title>My page</Title>
      <h1 className="hello">Hello</h1>
      <h1 className="hello__part1">Hello2</h1>
      <Zoom>
        <p>Markup that will be revealed on scroll</p>
      </Zoom>
      <Layout />
      <style jsx>{`
        $color: red;
        .hello {
          background-color: ${backgroundColor};
          padding: 100px;
          text-align: center;
          transition: 100ms ease-in background;
          &:hover {
            color: $color;
          }
          &__part1 {
            color: blue;
          }
          @media only screen and (max-width: 480px) {
            font-size: 20px;
          }
        }
      `}</style>
    </div>
  );
}
