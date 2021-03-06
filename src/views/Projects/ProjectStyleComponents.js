import styled from 'styled-components'
import {
  color,
  colorScheme,
  fontSizing,
  flex,
  breakpoints,
} from '../../components/DesignComponents/theme'

export const ProjectListContainer = styled.div`
  ${flex('column', 'center', 'center')}
  margin: 50px 0;
  padding: 20px 10px;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  background: ${color.lightText};
  color: ${color.darkText};
  font-size: ${fontSizing.m};

  h1 {
    font-size: ${fontSizing.l};
    letter-spacing: 0.5rem;
    color: ${color.darkText};
  }

  a {
    text-decoration: none;
    color: ${color.lightText};
  }

  @media ${breakpoints[0]} {
    width: 100%;
    font-size: ${fontSizing.sm};

    h1 {
      font-size: ${fontSizing.ml};
    }
  }
`

export const Preview = styled.div`
  width: 90%;
  min-width: 300px;
  ${flex('row', 'center', 'space-between')}
  margin: 10px 0;
  padding: 10px;
  border: 1px solid ${color.defaultFontColor};
  background: ${color.primaryBgShading};
  cursor: pointer;

  &:hover {
    color: ${color.lightText};
    background: ${colorScheme.defaultFontColor};
  }
`

export const ProjectInfoContainer = styled.div`
  ${flex('column')};
  width: 100%;
  max-width: 600px;
  border-radius: 5px;
  //box-shadow:  10px 10px 5px 0px rgba(0,0,0,0.75);
  background: transparent;
  color: ${color.txt04};

  @media ${breakpoints[0]} {
    width: 100%;
  }

  header {
    width: 100%;
    ${flex('row', 'center', 'space-between')};
    margin: 0;
    padding: 20px;
    padding-bottom: 5px;

    h1 {
      font-size: ${fontSizing.m};
      letter-spacing: 0.10rem;
      color: ${color.accent1};
    }

    input {
      padding: 5px;
      border: 1px solid ${color.secondaryBgShading};
      border-radius: 5px;
      font-size: ${fontSizing.sm};
      color: ${color.darkText};
      background: ${color.lightText};
    }

    .icon-menu {
      flex: 0 0 5%;
      ${flex('row', 'center', 'space-between')};

      i {
          margin: 0 10px;
          font-size: ${fontSizing.xs};
          cursor: pointer;
      }
    }
    
    @media ${breakpoints[0]} {
      padding: 5px;
    }

  }

  .project-info {
    padding: 20px;
    padding-top: 5px;  

    .project-stats {
      ${flex('column')}
      
      & * {
        @media ${breakpoints[0]} {
          font-size: ${fontSizing.xs};
        }
      }

      .stat-category {
        margin: 5px 0;
        color: ${color.secondaryBgShading};
        font-size: ${fontSizing.s};
      }

      .stat-data {
        width: 90%;
        font-size: ${fontSizing.s};
        font-weight: initial;
      }

      .status {
        color: ${color.primary};
      }

      .status-close {
        color: ${color.accent0};
      }

      input, textarea {
        border: 1px solid ${color.secondaryBgShading};
        font-size: ${fontSizing.xs};
      }

    }

    @media ${breakpoints[0]} {
      h3 {
        font-size: ${fontSizing.sm};
      }
    }

  .projectRole {
    width: 100%;
    ${flex('row','center','flex-start')}
    margin: 5px 0;
    padding-left: 10px;
    border: 1px solid ${colorScheme.defaultBorderColor};
    border-radius: 5px;

    div {
      flex: 0 0 33%;
      padding: 5px 0;
      font-size: ${fontSizing.s};
    }

    i {
      flex: 0 0 12%;
      justify-self: 'flex-end';
      font-size: ${fontSizing.xxs};
      border: 1 solid coral;
    }

  }
`

export const StatGroup = styled.div`
  width: 100%;
  margin: 5px 0;
  ${flex('row', 'baseline', 'space-between')}

  .stat-category {


    @media ${breakpoints[1]} {
      flex: 0 0 5%;
    }

    @media ${breakpoints[2]} {
      flex: 0 0 15%;
    }

    @media (min-width: 950px) {
      flex: 0 0 5%;
    }


  }

  .stat-data, textarea, input {
    border-radius: 5px;

    @media ${breakpoints[1]} {
      flex: 0 0 85%;
    }

   textarea, input {
      padding: 5px;
      border: 1px solid ${color.secondaryBgShading};
      border-radius: 5px;
      font-size: ${fontSizing.sm};
      color: ${color.darkText};
      background: ${color.lightText};      
    }

    @media ${breakpoints[2]} {
      flex: 0 0 90%;
    }
  }

  @media ${breakpoints[0]} {
    ${flex('column')}
  }
`

export const ButtonMenu = styled.nav`
  align-self: center;
  width: 80%;
  margin-top: 20px;
  display: ${props => (!props.edit ? 'none' : 'flex')};
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    width: 100px;
    font-size: ${fontSizing.m};
  }

  @media ${breakpoints[0]} {
    button {
      font-size: ${fontSizing.s};
      margin-bottom: 20px;
    }
  }
`
export const SpinnerContainer = styled.div`
  width: 90%;
  ${flex('column', 'center', 'center')};
  background: ${color.primaryBgShading};
  color: ${color.primaryColor};
`
export const TableContainer = styled.div`
  width: 100%;
  ${flex('column', 'center', 'center')}
  
  padding: 20px 10px;
  // box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  background: transparent;
  color: ${color.txt04};
  font-size: ${fontSizing.xs};

 .ReactTable {
   border-radius: 5px;

    & * {
      input, select {
        background: ${color.bg01} !important;
      }
    }
  }

  h1 {
    font-size: ${fontSizing.ml};
    letter-spacing: 0.35rem;
    color: ${color.tx04};
  }

  a {
    text-decoration: none;
    color: ${color.tx04};
  }

  @media ${breakpoints[0]} {
    width: 100%;
    font-size: ${fontSizing.xs};

    h1 {
      font-size: ${fontSizing.sm};
    }
  }


`