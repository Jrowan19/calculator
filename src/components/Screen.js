import React from 'react';

const Screen = ({ handleChange, numbers }) => {
  return (
    <div className="container rounded mt-3 mx-auto calc">
      <div className="row align-items-end">
        <div className="col">
          <input
            className="form-control "
            readOnly
            type="text"
            placeholder="0"
            name="number"
            value={numbers}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Screen;
