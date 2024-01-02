import React from "react";
import { useSelector } from "react-redux";
import { DiCodeigniter } from "react-icons/di";
import { AiOutlinePlus } from "react-icons/ai";
import "./DashView.css";
import Card from "../Card/Card";


// useEffect(() => {
//   fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data); // Log the response data to inspect its structure
//       setTickets(data);
//     })
//     .catch((error) => console.error('Error fetching data:', error));
// }, []);

const DashView = () => {
  const { selectedData, user } = useSelector(
    (state) => state.SelectDataReducer
  );



  /*const KanbanBoard = () => {
  // ... previous code ...

  const groupTickets = () => {
    if (displayMode === 'status') {
      // Group by status
      const groupedByStatus = tickets.reduce((groups, ticket) => {
        const status = ticket.status;
        if (!groups[status]) {
          groups[status] = [];
        }
        groups[status].push(ticket);
        return groups;
      }, {});
      return groupedByStatus;
    } else if (displayMode === 'user') {
      // Group by user
      const groupedByUser = tickets.reduce((groups, ticket) => {
        const user = ticket.user;
        if (!groups[user]) {
          groups[user] = [];
        }
        groups[user].push(ticket);
        return groups;
      }, {});
      return groupedByUser;
    } else if (displayMode === 'priority') {
      // Group by priority
      const groupedByPriority = tickets.reduce((groups, ticket) => {
        const priority = ticket.priority;
        if (!groups[priority]) {
          groups[priority] = [];
        }
        groups[priority].push(ticket);
        return groups;
      }, {});
      return groupedByPriority;
    }
  };

  const sortTickets = (groupedTickets) => {
    if (sortOrder === 'priority') {
      // Sort by priority
      for (const key in groupedTickets) {
        groupedTickets[key].sort((a, b) => b.priority - a.priority);
      }
    } else if (sortOrder === 'title') {
      // Sort by title
      for (const key in groupedTickets) {
        groupedTickets[key].sort((a, b) => a.title.localeCompare(b.title));
      }
    }

    return groupedTickets;
  };

  const groupedTickets = groupTickets();
  const sortedAndGroupedTickets = sortTickets(groupedTickets);

  return (
    <div>
     
      <div className="kanban-board">
        {Object.keys(sortedAndGroupedTickets).map((groupKey) => (
          <div key={groupKey}>
            <h2>{groupKey}</h2>
            {sortedAndGroupedTickets[groupKey].map((ticket) => (
              <Ticket key={ticket.id} ticket={ticket} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;*/


  return (
    selectedData && (
      <div className="dashContainer" style={{ justifyContent: "space-evenly" }}>
      

        {selectedData.map((elem, index) => {
          return (
            <>
              <div key={index} className="dashCardContainer">
                <div className="dashCardHeading flex-sb">
                  <div className="leftView">
                    {!user ? (
                      <DiCodeigniter />
                    ) : (
                      <>
                        <div
                          className="imageContainer relative"
                          style={{ width: "15px", height: "15px", display : 'inline-block' }}
                        >
                          
                          <img
                            style={{
                              width: "100%",
                              height: "100%",
                              borderRadius: "50%",
                            }}
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                            alt="UserImage"
                          />
                        </div>
                      </>
                    )}
                    <span>
                      {" "}
                      {elem[index]?.title} {elem[index]?.value?.length}
                    </span>
                  </div>
                  <div className="rightView">
                    <AiOutlinePlus />{" "}
                    <span style={{ letterSpacing: "2px" }}>...</span>
                  </div>
                </div>
                <div className="dashList flex-gap-10">
                  {elem[index]?.value?.map((elem, ind) => {
                    return (
                      <Card id={elem.id} title={elem.title} tag={elem.tag} />
                    );
                  })}
                </div>
              </div>
            </>
          );
        })}
      </div>
    )
  );
};

export default DashView;