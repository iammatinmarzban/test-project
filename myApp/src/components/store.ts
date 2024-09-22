import { createStore } from "zustand";
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

export type Actions = {
    addDriver: () => void
    removeDriver: (id: string) => void
    updateDriver: (id: string) => void

}





const useStore = createStore<Actions & State>()(set => ({
    drivers: [],
    addDriver: () => { },
    removeDriver: () => { },
    updateDriver: () => { }

}))