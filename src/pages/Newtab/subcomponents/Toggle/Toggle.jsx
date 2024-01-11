import React, { useContext } from 'react';
import { StateContext } from '../../context/StateProvider';
import { icons } from '../../icons';
import './toggle.scss';

const Toggle = () => {
  const [{ components, activeComponents }, dispatch] = useContext(StateContext);
  const toggleComponent = (c, active) => {
    if (active) {
      const i = activeComponents.indexOf(c);

      dispatch({
        type: 'REMOVE_COMPONENT',
        payload: activeComponents.filter((d, idx) => idx !== i),
      });
    } else {
      dispatch({ type: 'ADD_COMPONENT', payload: [...activeComponents, c] });
    }
  };

  return (
    <div className="ascend-toggles">
      {components.map((c, i) => (
        <span
          className={`ascend-toggle ${
            activeComponents.includes(c) ? 'active' : ''
          }`}
          onClick={() => toggleComponent(c, activeComponents.includes(c))}
        >
          {icons[c]}
        </span>
      ))}
    </div>
  );
};

export default Toggle;
