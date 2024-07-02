import { memo, useEffect } from 'react'
import { HomeWrapper } from './style'
import TopBanner from "./c-cpns/top-banner"
import HomeSectionV1 from "./c-cpns/home-section-v1"
import HomeSectionV2 from "./c-cpns/home-section-v2"
import HomeSectionV3 from "./c-cpns/home-section-v3"
import HomeLongfor from './c-cpns/home-longfor'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { 
  fetchHomeDiscountAction, 
  fetchHomeHotRecommendAction,
  fetchHomeLongForAction,
  fetchHomeHighScoreAction,
  fetchHomeGoodPriceAction,
  fetchHomePlusAction
} from '../../store/home/actionCreators'
import { changeHeaderConfigAction } from "../../store/features/main"

export default memo(function About() {

  const { discountInfo, hotRecommendInfo, longforInfo, highScoreInfo, goodPriceInfo, plusInfo } = useSelector((state) => ({
    discountInfo: state.home.discountInfo,
    hotRecommendInfo: state.home.hotRecommendInfo,
    longforInfo: state.home.longforInfo,
    highScoreInfo: state.home.highScoreInfo,
    goodPriceInfo: state.home.goodPriceInfo,
    plusInfo: state.home.plusInfo
  }), shallowEqual)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDiscountAction())
    dispatch(fetchHomeHotRecommendAction())
    dispatch(fetchHomeLongForAction())
    dispatch(fetchHomeHighScoreAction())
    dispatch(fetchHomeGoodPriceAction())
    dispatch(fetchHomePlusAction())

    dispatch(changeHeaderConfigAction({ topSearch: true, topFixed: true }))
  }, [dispatch])

  return (
    <HomeWrapper>
      <TopBanner/>
      <div className='content'>
        <HomeSectionV1 infoData={discountInfo}/>
        <HomeSectionV1 infoData={hotRecommendInfo}/>
        <HomeLongfor infoData={longforInfo}/>
        <HomeSectionV2 infoData={highScoreInfo}/>
        <HomeSectionV2 infoData={goodPriceInfo}/>
        <HomeSectionV3 infoData={plusInfo}/>
      </div>
    </HomeWrapper>
  )
})