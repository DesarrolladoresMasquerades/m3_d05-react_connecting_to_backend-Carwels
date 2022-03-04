import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddApartmentPage() {
  const [headline, setHeadline] = useState("");
  const [price, setPrice] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const body = { title: headline, pricePerDay: price };

    axios
      .post(`https://ironbnb-m3.herokuapp.com/apartments`, body)
      .then((response) => {
        setHeadline("");
        setPrice(0);
        navigate("/");
      });
  };


  return (
    <div className="AddApartmentPage">
      <h3>Add New Apartment</h3>

      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          name="headline"
          onChange={(event) => setHeadline(event.target.value)}
          value={headline}
        />

        <label>Price per Day</label>
        <input
          type="number"
          name="pricePerDay"
          onChange={(event) => setPrice(event.target.value)}
          value={price}
        />

        <button type="submit">Create Apartment</button>
      </form>
    </div>
  );
}

export default AddApartmentPage;
