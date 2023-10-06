import React, { memo } from "react";
import PropTypes from "prop-types";
import Counter from "./Counter";
import Icon from "./Icon";

const Player = ({
  name,
  id,
  score,
  changeScore,
  removePlayer,
  isHighScore,
}) => {
  console.log(isHighScore);
  return (
    <div className="player">
      {console.log(name + " rendered")}
      <span className="player-name">
        <button className="remove-player" onClick={() => removePlayer(id)}>
          ✖
        </button>
        <Icon isHighScore={isHighScore} />
        {name}
      </span>

      <Counter score={score} id={id} changeScore={changeScore} />
    </div>
  );
};

const playerPropsAreEqual = (prevProps, nextProps) => {
  return (
    prevProps.score === nextProps.score &&
    prevProps.isHighScore === nextProps.isHighScore
  );
};

Player.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number,
  score: PropTypes.number,
  changeScore: PropTypes.func,
  removePlayer: PropTypes.func,
};

export default memo(Player, playerPropsAreEqual);
