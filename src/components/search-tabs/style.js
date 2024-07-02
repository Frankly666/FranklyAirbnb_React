import styled from "styled-components";

export const SearchWrapper = styled.div`
  display: flex;
  width: 850px;
  height: 66px;
  border-radius: 32px;
  background-color: #f5f5f5;

  .item {
    flex: 1;
    display: flex;
    align-items: center;

    .info {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 30px;

      .title {
        font-size: 12px;
        font-weight: 800;
        color: #484848;
      }

      .desc {
        margin-top: 5px;
        font-size: 14px;
        color: #666;
      }
    }

    .divider {
      height: 32px;
      width: 1px;
      background-color: #ddd;
    }
  }
`