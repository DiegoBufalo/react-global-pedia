export interface PlayersData {
    id: number,
    name: string,
    teams: TeamPlayedData[],
    active: boolean,

}

export interface TeamPlayedData {
    id: number,
    team: TeamData,
    startDate: Date,
    endDate?: Date,
    active: boolean, 
}

export interface TeamData {
    id: number,
    name: string,
    creation: Date,
    tournaments: TournamentData[],
    active: boolean,
}

export interface TournamentData {
    id: number,
    name: string,
    startData: Date,
    endData: Date,
    winner: TeamData,
    tier: number,
    country: string,
    mvp: PlayersData,
    lan: boolean,
}

export interface UserData {
    id: number,
    name: string,
    email: string,
    birthdate: Date,
    password: string,
}

export interface ErrorHandler {
    errorMessage: string,
    errorMessages: string[],
}

export interface ToastInfo {
    status: number,
    message: string,
    timestamp: Date,
}