import { SubText } from "Components/UI/Typography";
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
  height: 130px;
  z-index: ${({ theme }) => theme.zIndex["30"]};
`;

export const TrackInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  min-width: 400px;
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

export const EndOfSong = styled(SubText)`
  color: ${({ theme }) => theme.colors.secondaryGray};
`;

export const VolumeControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-left: 200px;
  min-width: 180px;
`;