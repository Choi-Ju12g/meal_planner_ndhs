import styled from "styled-components"

export function Plate(props){


    return(
        <div className="planner_wrap">
          <Wrap>
            <Title>Next {props.quater} menu</Title>
          </Wrap>
        </div>
    );
}

const Title = styled.h2`
    border : 10px red solid;
`;

const Wrap = styled.div`
    border-radius: 1rem;
    border: 2px solid black;
    line-height: 1.5;
    
`;

