import withAuth from './withAuth'
function SpeakerAdd({ eventYear, insertRecord, loggedInUser }) {
  if(!loggedInUser || loggedInUser.length ===0) return null;
  return (
    <a href="#" className="addSes">
      <i
        onClick={(e) => {
          e.preventDefault();
          const firstLast = window.prompt("Enter first and last name:", "");
          const [first, last] = firstLast.split(" ");
          insertRecord({
            id: "99999",
            first,
            last,
            bio: "Bio not entered yet",
            sessions: [
              {
                id: "88888",
                title: `New Session For ${first}`,
                room: {
                  name: "Main Ball Room",
                },
                eventYear,
              },
            ],
          });
        }}
      >
        +
      </i>
    </a>
  );
}

export default withAuth(SpeakerAdd);
