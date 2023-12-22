import React, { useState } from "react";

export const ActorsContext = React.createContext(null);

const ActorsContextProvider = (props) => {
  const [actorsFavourites, setActorsFavourites] = useState( [] )

  const addToActorsFavourites = (actor) => {
    let newActorsFavourites = [...actorsFavourites];
    if (!actorsFavourites.includes(actor.id)) {
      newActorsFavourites.push(actor.id);
    }
    setActorsFavourites(newActorsFavourites);
  };

  const removeFromActorsFavourites = (actor) => {
    setActorsFavourites( actorsFavourites.filter(
      (aId) => aId !== actor.id
    ) )
  };

 return (
    <ActorsContext.Provider
      value={{
        actorsFavourites,
        addToActorsFavourites,
        removeFromActorsFavourites,
      }}
    >
      {props.children}
    </ActorsContext.Provider>
  );
};

export default ActorsContextProvider;