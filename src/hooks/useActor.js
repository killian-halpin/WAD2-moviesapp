import { useEffect, useState } from "react";
import {getActors} from '../api/tmdb-api'

const useActor = id => {
  const [actor, setActor] = useState(null);
  useEffect(() => {
    getActors(id).then(actor => {
      setActor(actor);
    });
  }, [id]);
  return [actor, setActor];
};

export default useActor;