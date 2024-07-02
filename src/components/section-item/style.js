import styled from 'styled-components'

export const ItemWrapper = styled.div`
  flex-shrink: 0;
  width: ${props => props.itemWidth};
  box-sizing: border-box;
  cursor: pointer;

  .inner {
    padding: 8px;
  }

  .cover {
    position: relative;
    box-sizing: border-box;
    padding: 66.66% 8px 0;
    border-radius: 3px;
    overflow: hidden;

    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }

  .desc {
    margin: 10px 0 5px;
    font-size: 12px;
    font-weight: 700;
    color: #39576a;
  }

  .name {
    font-size: 16px;
    font-weight: 700;

    overflow: hidden;  
    text-overflow: ellipsis; 
    display: -webkit-box; 
    -webkit-line-clamp: 2; 
    -webkit-box-orient: vertical;
  }

  .price {
    margin: 8px 0;
  }

  .bottom {
    display: flex;
    align-items: center;
    font-size: 12px;

    .rate {
      .ant-rate {
        font-size: 10px;
        color: #39576a;

        .ant-rate-star {
          margin-right: 2px;
        }
      }
    }

    .count {
      margin: 0 3px;
    }
  }
`
