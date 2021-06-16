import styled from 'styled-components';

export const TableContent = styled.div`
  margin-top: 20px;

  td {
    vertical-align: baseline;
  }

  ul {
    list-style-type: none;

    a {
      color: #3f51b5;
      text-decoration: none;

      &:hover {
        color: #1b2871;
      }
    }
  }
`