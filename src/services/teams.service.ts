import { ID } from 'appwrite';
import { teams } from '../config/appwrite';

export class TeamsService {
    async createTeam(name: string, roles: string[] = []) {
        try {
            return await teams.create(
                ID.unique(),
                name,
                roles
            );
        } catch (error) {
            this.handleError(error);
            throw error;
        }
    }

    async getTeam(teamId: string) {
        try {
            return await teams.get(teamId);
        } catch (error) {
            this.handleError(error);
            throw error;
        }
    }

    async listTeams() {
        try {
            return await teams.list();
        } catch (error) {
            this.handleError(error);
            throw error;
        }
    }

    async updateTeam(teamId: string, name: string) {
        try {
            return await teams.updateName(teamId, name);
        } catch (error) {
            this.handleError(error);
            throw error;
        }
    }

    async deleteTeam(teamId: string) {
        try {
            await teams.delete(teamId);
            return true;
        } catch (error) {
            this.handleError(error);
            throw error;
        }
    }

    // Membership methods
    async createMembership(
        teamId: string,
        email: string,
        roles: string[] = [],
        url: string = 'http://localhost:5173/team-invite'
    ) {
        try {
            return await teams.createMembership(
                teamId,
                email,
                roles,
                url
            );
        } catch (error) {
            this.handleError(error);
            throw error;
        }
    }

    async getMembership(teamId: string, membershipId: string) {
        try {
            return await teams.getMembership(
                teamId,
                membershipId
            );
        } catch (error) {
            this.handleError(error);
            throw error;
        }
    }

    async listMemberships(teamId: string) {
        try {
            return await teams.listMemberships(teamId);
        } catch (error) {
            this.handleError(error);
            throw error;
        }
    }

    async updateMembership(
        teamId: string,
        membershipId: string,
        roles: string[]
    ) {
        try {
            return await teams.updateMembership(
                teamId,
                membershipId,
                roles
            );
        } catch (error) {
            this.handleError(error);
            throw error;
        }
    }

    async deleteMembership(teamId: string, membershipId: string) {
        try {
            await teams.deleteMembership(teamId, membershipId);
            return true;
        } catch (error) {
            this.handleError(error);
            throw error;
        }
    }

    // Utility methods for event team management
    async createEventTeam(eventId: string, name: string) {
        const roles = ['admin', 'member'];
        return this.createTeam(`event-${eventId}`, roles);
    }

    async addEventTeamMember(teamId: string, email: string, role: 'admin' | 'member' = 'member') {
        return this.createMembership(teamId, email, Array.isArray(role) ? role : [role]);
    }

    private handleError(error: any) {
        console.error('Teams Error:', error);

        const errorMessages: { [key: string]: string } = {
            'team_not_found': 'The requested team was not found',
            'membership_not_found': 'The requested membership was not found',
            'user_already_member': 'The user is already a member of this team',
            'permission_denied': 'You do not have permission to perform this action',
            'invalid_email': 'The provided email is invalid'
        };

        const message = errorMessages[error.type] || 'An unexpected teams error occurred';

        return {
            message,
            code: error.code,
            type: error.type
        };
    }
}

export const teamsService = new TeamsService();
