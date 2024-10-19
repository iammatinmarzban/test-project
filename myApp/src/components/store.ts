import { create } from "zustand";


export type Gender = "MALE" | "FEMALE";

export type Driver = {
    id: string
    name: {
        firstName: string
        lastName: string
    }
    codeMeli: number
    birthday: string
    pictureUrl: string
    residentialCity: string
    gender: Gender
    status: boolean
}

export type State = {
    drivers: Driver[]
}

// const testDriver: Driver = {
//     id: uuidv4(),
//     name: {
//         firstName: "",
//         lastName: ""
//     },
//     codeMeli: 0,
//     birthday: "",
//     pictureUrl: "",
//     residentialCity: "",
//     gender: "MALE",
//     status: false
// }

export type Actions = {
    addDriver: ({ name, codeMeli, birthday, pictureUrl, residentialCity, gender, status }: Driver
    ) => void
    removeDriver: (id: string) => void
    updateDriver: (id: string) => void

}
export const useStore = create(set => ({
    drivers: [],
    addDriver: ({ name, codeMeli, birthday, pictureUrl, residentialCity, gender, status }: Driver) => {
        set(state => ({
            drivers: [
                ...state.drivers,
                { id: Math.random().toString(), name, codeMeli, birthday, pictureUrl, residentialCity, gender, status }
            ]
        }))
    },
    removeDriver: (id: string) =>
        set(state => ({
            drivers: state.drivers.filter(driver => driver.id !== id)
        }))
    ,
    updateDriver: (id: string) => {
        set(state => ({
            drivers: state.drivers.map(driver =>
                driver.id === id
            )

        }))
    }
}))
