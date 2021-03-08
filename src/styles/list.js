import styled, { css } from 'styled-components';

//style everything that is an <ul>:
//this will eliminate the dots before the name in projects
export const Ul = styled.ul`
    list-style-type: none; 

    ${props => props.primary &&
        css`
            background: red;
    `} 
`

export const Image = styled.img`
    width: 200px;
    height: 200px
`