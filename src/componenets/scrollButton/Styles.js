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
   left: 5%;
   bottom: 50px;
   height: 20px;
   font-size: 3rem;
   z-index: 1;
   cursor: pointer;
   color: #927c7c;
`

// .up {
//     border: 3px solid #605151;
//     border-radius: 50%;
//     width: 50px;
//     height: 50px;
//     position: fixed;
//     right: 5%;
//     top: 85%;
//     color: #605151;
//     text-shadow: 5px 5px 5px #927c7c;
//     font-size: 40px;
//     font-weight: 900;
//     display: flex;
//     justify-content: center;
//     align-items: center;
// }