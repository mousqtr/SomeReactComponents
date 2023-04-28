import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import EditProfileView from "./EditProfileView";

export default function EditProfile() {
  const history = useHistory();
  const [formData, setFormData] = useState({
    country: "France",
    gender: "Male",
    imageProfile:
      "https://images.pexels.com/photos/533974/pexels-photo-533974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "It defines the alignment along the main axis. It helps distribute extra free space leftover when either all the flex items on a line are inflexible",
    bgColors: [
      {
        color: "#5757a9",
        stop: "47",
      },
      {
        color: "#9a57a9",
        stop: "100",
      },
    ],
    badges: [
      {
        name: "badge0",
        isFavorite: true,
      },
      {
        name: "badge1",
        isFavorite: true,
      },
      {
        name: "badge2",
        isFavorite: true,
      },
      {
        name: "badge3",
        isFavorite: false,
      },
      {
        name: "badge4",
        isFavorite: false,
      },
    ],
    success: [
      {
        name: "success0",
        isFavorite: true,
      },
      {
        name: "success1",
        isFavorite: true,
      },
      {
        name: "success2",
        isFavorite: true,
      },
      {
        name: "success3",
        isFavorite: false,
      },
      {
        name: "success4",
        isFavorite: false,
      },
      {
        name: "success5",
        isFavorite: false,
      },
      {
        name: "success6",
        isFavorite: false,
      },
    ],
  });
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);
  };

  const handleCancel = () => {
    history.push({ pathname: "/" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleChangeImage = (e) => {
    if (e.target.files[0]) {
      const url = URL.createObjectURL(e.target.files[0]);
      setFormData({ ...formData, imageProfile: url });
    }
  };

  const handleDeleteImage = () => {
    setFormData({ ...formData, imageProfile: "" });
  };

  const handleChangeFavorite = (name, index) => {
    const elements = [...formData[name]];
    if (elements[index].isFavorite) {
      elements[index].isFavorite = false;
    } else {
      const nbFavorites = elements.reduce((acc, curr) => {
        if (curr.isFavorite) {
          acc += 1;
        }
        return acc;
      }, 0);
      if (nbFavorites < 3) {
        elements[index].isFavorite = true;
      }
    }
    setFormData({ ...formData, [name]: elements });
  };

  const handleChangeBgColors = (pColors) => {
    setFormData({ ...formData, bgColors: pColors });
  };

  const colorsToString = (pColors) => {
    if (pColors.length > 1) {
      let s = "linear-gradient(90deg, ";
      pColors.forEach((elt, index) => {
        const res = elt.color + " " + elt.stop + "%";
        s +=
          index < pColors.length - 1 && pColors.length > 1 ? res + ", " : res;
      });
      s += ")";
      return s;
    } else {
      return pColors[0].color;
    }
  };

  return (
    <EditProfileView
      formData={formData}
      validated={validated}
      change={handleChange}
      submit={handleSubmit}
      cancel={handleCancel}
      changeImage={handleChangeImage}
      deleteImage={handleDeleteImage}
      changeFavorite={handleChangeFavorite}
      colorsToString={colorsToString}
      changeBgColors={handleChangeBgColors}
    />
  );
}
