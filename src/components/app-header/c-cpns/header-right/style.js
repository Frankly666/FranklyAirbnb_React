import styled from "styled-components"

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .profile {
    position: relative;
    display: flex;
    width: 77px;
    height: 42px;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 25px;
    background-color: #fff;
    cursor: pointer;

    .btn {
      margin: 0 5px;
    }

    .menu {
      width: 16px;
      height: 16px;
      background-image: url(${require("@/assets/img/common/menu.svg").default});
    }

    .avatar {
      width: 28px;
      height: 28px;
      background-image: url(${require("@/assets/img/common/profile.svg").default});
    }
    
  }

  .btns {
    display: flex;
  }
`
