/*
    User data to use until a login system is put into place
 */

export interface UserType {
    name: string,
    apiKey: string,
    loggedIn: boolean
    email: string
}

export const userData: UserType = {
    apiKey: '8194CFD7-46EC-D149-9717-CB75384D0441457B4B27-9AB0-4F7F-BAE6-9392041669E2',
    email: 'gallica@landfill.local',
    loggedIn: true,
    name: 'Gallica'
}
