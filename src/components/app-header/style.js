import styled from "styled-components"

export const AppHeaderWrapper = styled.div`
  background-color: rgba(255,255,255,0);
  transition: all 200ms ease;

  &.notTop {
    background-color: rgba(255,255,255,1);
  }

  &.notsearch {
    .search-area {
      height: 0;
    }
  }

  &.fixed {
    position: fixed;
    z-index: 99;
    left: 0;
    right: 0;
    top: 0;
  }

  .search-area {
    transition: height 250ms linear;
    height: 100px;
  }

  .header-bottom {
    width: 100%;
    height: 1px;
    background-color: #eee;
  }
`

export const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 24px;
  color: ${props => props.theme.color};
`

export const HeaderLeft = styled.div`
  flex: 1;
`
