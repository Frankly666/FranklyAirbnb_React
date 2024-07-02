import styled from 'styled-components'

export const TabsWrapper = styled.div`
  position: relative;

  .control {
    position: absolute;
    left: 0;
    height: 68px;
    width: 48px;
    top: 0;
    bottom: 0;
    margin: auto;
    background: linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 70%, rgba(255, 255, 255, 0) 100%);

    &.left {
      .arrow {
        background: #fff url(${require("@/assets/img/icon/arrow-left.svg").default}) center/12px 12px no-repeat;
      }
    }

    &.right {
      left: auto;
      right: 0;
      background: linear-gradient(270deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 17%, rgba(255, 255, 255, 0) 100%);

      .arrow {
        left: auto;
        right: -10px;
        background: #fff url(${require("@/assets/img/icon/arrow-right.svg").default}) center/12px 12px no-repeat;
      }
    }

    .arrow {
      position: absolute;
      width: 28px;
      height: 28px;
      left: -10px;
      top: 0;
      bottom: 0;
      margin: auto 0;
      border-radius: 50%;
      background-color: #f00;
      border: 2px solid transparent;
      box-shadow: rgb(0 0 0 / 14%) 0px 1px 1px 1px;
      cursor: pointer;
    }
  }

  .item {
    flex-basis: 120px;
    flex-shrink: 0;
    box-sizing: border-box;
    padding: 14px 16px;
    margin-right: 16px;
    border-radius: 3px;
    font-size: 17px;
    text-align: center;
    border: 0.5px solid #D8D8D8;
    /* box-shadow: 0px 1px 2px rgb(0 0 0 / 15%); */
    white-space: nowrap;
    cursor: pointer;

    &:last-child {
      margin-right: 0;
    }

    &.active {
      color: #fff;
      background-color: #00848A;
    }
  }
    
`
