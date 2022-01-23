import SpeakersToolbar from "./SpeakersToolbar";
import SpeakersList from "./SpeakersList";
import {SpeakerFilterProvider} from '../context/SpeakerFilterContext';
function Speakers() {

  return (
    <SpeakerFilterProvider startingShowSession={false}>
      <SpeakersToolbar  />
      <SpeakersList  />
    </SpeakerFilterProvider>
  );
}

export default Speakers;
