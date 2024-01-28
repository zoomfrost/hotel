import React from "react";

const CBForm = () => {
  return (
    <form className="caform">
      <div className="caform__title">Book a room</div>
      <label htmlFor="name">
        Name<span>*</span>
      </label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="User name"
        required
      />
      <label htmlFor="phone">
        Phone number<span>*</span>
      </label>
      <input
        type="tel"
        name="phone"
        id="phone"
        placeholder="+1 890 335 372"
        pattern="^\++[0-9]{1} [0-9]{3} [0-9]{3} [0-9]{3}"
        title="Format should be +1 804 944 567"
        required
      />
      <label htmlFor="room">
        Service<span>*</span>
      </label>
      <input
        type="text"
        name="room"
        id="room"
        placeholder="Chosen room"
        required
      />
      <label htmlFor="date">
        Date<span>*</span>
      </label>
      <input
        type="text"
        name="date"
        id="date"
        placeholder="DD/MM/YYYY HH:mm"
        pattern="^\d{2}\/\d{2}\/\d{4} \d{2}:\d{2}$"
        title="Format should be DD/MM/YYYY HH:mm"
        required
      />
      <button>Create</button>
    </form>
  );
};

export default CBForm;
