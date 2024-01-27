import Description from "@/components/Description";
import React from "react";
import descrPhoto from "@/public/palace-bridge.jpeg";

const Area = () => {
  const descrArr = [
    {
      photo: descrPhoto,
      heading: "Nearby",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quo iusto velit quis perspiciatis molestiae natus, eius odit, accusamus laboriosam repellat architecto sed ratione sequi debitis? Corrupti fugit adipisci quos?",
    },
    {
      photo: descrPhoto,
      heading: "Nearby",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quo iusto velit quis perspiciatis molestiae natus, eius odit, accusamus laboriosam repellat architecto sed ratione sequi debitis? Corrupti fugit adipisci quos?",
    },
    {
      photo: descrPhoto,
      heading: "Nearby",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quo iusto velit quis perspiciatis molestiae natus, eius odit, accusamus laboriosam repellat architecto sed ratione sequi debitis? Corrupti fugit adipisci quos?",
    },
    {
      photo: descrPhoto,
      heading: "Nearby",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quo iusto velit quis perspiciatis molestiae natus, eius odit, accusamus laboriosam repellat architecto sed ratione sequi debitis? Corrupti fugit adipisci quos?",
    },
  ];
  return (
    <section>
      <Description photos={descrArr} />
    </section>
  );
};

export default Area;
