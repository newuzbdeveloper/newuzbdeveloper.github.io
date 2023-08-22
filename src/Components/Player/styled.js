import { MOBILE_PLAYER_HEIGHT, PLAYER_HEIGHT } from "Assets/Commons/constants";
import { SubText, Text } from "Components/UI/Typography";
import { device } from "Styles/BreakPoints";
import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondaryBlack};
  position: fixed;
  left: 0;
  bottom: 0;
  height: ${PLAYER_HEIGHT}px;
  z-index: ${({ theme }) => theme.zIndex["30"]};

  ${device.lg} {
    height: ${MOBILE_PLAYER_HEIGHT}px;
  }
`;

export const TrackInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  min-width: 400px;
  padding-right: 15px;
`;

export const TrackImage = styled.img`
  width: 65px;
  height: 65px;
  border-radius: 15px;
`;

export const TrackInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

export const ArtistName = styled(SubText)`
  color: ${({ theme }) => theme.colors.secondaryGray};
  display: -webkit-box;
  overflow: hidden;
  line-clamp: 1;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`;

export const TrackTitle = styled(Text)`
  display: -webkit-box;
  overflow: hidden;
  line-clamp: 1;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`;

export const ControlButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;

export const TrackTimeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-left: 50px;
  width: 100%;
`;

export const TrackTime = styled(SubText)`
  color: ${(props) =>
    props.grey ? props.theme.colors.secondaryGrey : "inherit"};
  width: 80px;
  margin: 0 auto;
`;

export const VolumeControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-left: 200px;
  min-width: 180px;
`;
