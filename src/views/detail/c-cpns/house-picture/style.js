import styled from "styled-components";

export const PictureWrapper = styled.div`
  display: flex;
  height: 600px;
  background-color: #000;

  .left, .right {
    width: 50%;
    height: 100%;

    .item {
      height: 100%;
      overflow: hidden;
      cursor: pointer;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;

        transition: transform 0.3s ease-in;
      }
      
      &:hover {
        img {
          transform: scale(1.1);
        }
      }
    }

    
  }

  .right {
    display: flex;
    flex-wrap: wrap;

    .item {
      width: 50%;
      height: 50%;
      box-sizing: border-box;
      border: 1px solid #000;
    }
  }
`