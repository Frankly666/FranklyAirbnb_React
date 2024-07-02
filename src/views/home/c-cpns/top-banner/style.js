import styled from 'styled-components'

export const BannerWrapper = styled.div`
  position: relative;
  height: 529px;
  background: url(${require("@/assets/img/home/cover_01.jpeg")}) center / cover;
  
  .cover {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0,0,0,.15);
  }
`
