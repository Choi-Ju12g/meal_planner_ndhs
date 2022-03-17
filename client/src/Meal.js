import styled from "styled-components"

export function Meal(props){


    return(
        <div className="planner_wrap">
            <Title>Next {props.quater} menu</Title>
        </div>
    );
}

const Title = styled.h2`
    border : 10px black solid;
`;

//media query 스타일이 500px미만일때 적용되게 됩니다.
// @media screen and (max-width: 500px) {
//     flex-direction: column;
// }