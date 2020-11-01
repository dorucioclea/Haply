import React from "react";
import styled from "styled-components";
import Popup from "../shared/Popup";
import AchievementModel from "../../models/AchievementModel";
import { useDispatch, useSelector } from "react-redux";
import { selectColorPrimary, setColorPrimary } from "../../state/settingsSlice";
import { selectAchievements } from "../../state/dataSlice";
import { updateAchievements } from "../../state/loadingSlice";

const PopupContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ColorOptions = styled.div`
  width: 100%;
  display: grid;
  grid-row-gap: 10px;
  align-items: center;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

type ColorOptionProps = {
  selected: boolean;
};

const ColorOption = styled.button`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${(props: ColorOptionProps) =>
    props.selected ? "solid 2px var(--primary)" : "none"};
`;

type ColorProps = {
  color: string;
};

const Color = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props: ColorProps) => props.color};
`;

const UnlockText = styled.div`
  width: 100%;
  text-align: center;
  color: var(--sub);
  font-size: 14px;
  margin-top: 20px;
`;

type Props = {
  open: boolean;
  closePopup: () => void;
};

const ThemePopup = (props: Props) => {
  const dispatch = useDispatch();
  const colorPrimary = useSelector(selectColorPrimary);
  const achievements = useSelector(selectAchievements);
  const unlockedAchievements = achievements.filter(
    (achievement: AchievementModel) =>
      achievement.colorPrimary !== "" && achievement.percentComplete === 1
  );

  return (
    <Popup
      open={props.open}
      content={
        <PopupContent>
          <ColorOptions>
            <ColorOption
              onClick={() => dispatch(setColorPrimary("#4071FE"))}
              selected={"#4071FE" === colorPrimary}
            >
              <Color color={"#4071FE"} />
            </ColorOption>
            {unlockedAchievements.map((achievement: AchievementModel) => (
              <ColorOption
                onClick={() =>
                  dispatch(setColorPrimary(achievement.colorPrimary))
                }
                selected={achievement.colorPrimary === colorPrimary}
              >
                <Color color={achievement.colorPrimary} />
              </ColorOption>
            ))}
          </ColorOptions>
          {unlockedAchievements.length < 4 && (
            <UnlockText>Complete Achievements for more</UnlockText>
          )}
        </PopupContent>
      }
      showButton={true}
      close={() => props.closePopup()}
    />
  );
};

export default ThemePopup;
