import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [allUsersData, setAllUsersData] = useState([
        { id: 1, fullName: "John Doe", firstName: "John", lastName: "Doe", email: "john@example.com", role: "Admin" },
        { id: 2, fullName: "Jane Smith", firstName: "Jane", lastName: "Smith", email: "jane@example.com", role: "Editor" },
        { id: 3, fullName: "Sam Wilson", firstName: "Sam", lastName: "Wilson", email: "sam@example.com", role: "Viewer" },
        { id: 4, fullName: "Sara Connor", firstName: "Sara", lastName: "Connor", email: "sara@example.com", role: "Editor" },
        { id: 5, fullName: "Michael Brown", firstName: "Michael", lastName: "Brown", email: "michael@example.com", role: "Admin" },
        { id: 6, fullName: "Emily Davis", firstName: "Emily", lastName: "Davis", email: "emily@example.com", role: "Viewer" },
        { id: 7, fullName: "Chris Johnson", firstName: "Chris", lastName: "Johnson", email: "chris@example.com", role: "Editor" },
        { id: 8, fullName: "Olivia Taylor", firstName: "Olivia", lastName: "Taylor", email: "olivia@example.com", role: "Viewer" },
        { id: 9, fullName: "Daniel Lee", firstName: "Daniel", lastName: "Lee", email: "daniel@example.com", role: "Admin" },
        { id: 10, fullName: "Sophia Martinez", firstName: "Sophia", lastName: "Martinez", email: "sophia@example.com", role: "Editor" },
        { id: 11, fullName: "Ethan White", firstName: "Ethan", lastName: "White", email: "ethan@example.com", role: "Viewer" },
        { id: 12, fullName: "Isabella Moore", firstName: "Isabella", lastName: "Moore", email: "isabella@example.com", role: "Admin" },
        { id: 13, fullName: "James Harris", firstName: "James", lastName: "Harris", email: "james@example.com", role: "Editor" },
        { id: 14, fullName: "Mia Clark", firstName: "Mia", lastName: "Clark", email: "mia@example.com", role: "Viewer" },
        { id: 15, fullName: "Lucas Lewis", firstName: "Lucas", lastName: "Lewis", email: "lucas@example.com", role: "Admin" },
        { id: 16, fullName: "Ava Walker", firstName: "Ava", lastName: "Walker", email: "ava@example.com", role: "Editor" },
        { id: 17, fullName: "Benjamin Hall", firstName: "Benjamin", lastName: "Hall", email: "benjamin@example.com", role: "Viewer" },
        { id: 18, fullName: "Charlotte Allen", firstName: "Charlotte", lastName: "Allen", email: "charlotte@example.com", role: "Editor" },
        { id: 19, fullName: "Henry Young", firstName: "Henry", lastName: "Young", email: "henry@example.com", role: "Admin" },
        { id: 20, fullName: "Amelia King", firstName: "Amelia", lastName: "King", email: "amelia@example.com", role: "Viewer" },
    ])

    useEffect(() => {
        const storedData = localStorage.getItem('userData');
        if (storedData) {
            setAllUsersData(JSON.parse(storedData));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('userData', JSON.stringify(allUsersData));
    }, [allUsersData]);

    const updatedUserList = (data) => {
        setAllUsersData(data)
    }

    return (
        <UserContext.Provider value={{ allUsersData, setAllUsersData, updatedUserList }}>
            {children}
        </UserContext.Provider>
    )
}

