interface IUserResponse {
    id: number;
    username: string;
    name: string;
    honor: number;
    clan: string;
    leaderboardPosition: number;
    skills: string[];
    ranks: {
        overall: {
            rank: number;
            name: string;
            color: string;
            score: number;
        };
        languages: any;
    };
    codeChallenges: {
        totalAuthored: number;
        totalCompleted: number;
    };
}

export type { IUserResponse };
