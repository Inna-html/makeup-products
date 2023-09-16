import styled from 'styled-components';
  
export const Heading = styled.h1`
   text-align: center;
   color: #927c7c;
`;
  
export const Content = styled.div`
   overflowY: scroll;
   height: 2500px;
`;
  
export const Button = styled.div`
   position: fixed; 
   width: 100%;
   right:-80%;
   bottom: 50px;
   height: 20px;
   font-size: 3rem;
   z-index: 1;
   cursor: pointer;
   color: #927c7c;
   
   @media (max-width: 769px) {
   right:-73%;
   }
`
