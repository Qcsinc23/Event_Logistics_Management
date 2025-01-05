import { ID } from 'appwrite';
import { teams } from '../config/appwrite';
export class TeamsService {
    async createTeam(name, roles = []) {
        try {
            return await teams.create(ID.unique(), name, roles);
        }
        catch (error) {
            this.handleError(error);
            throw error;
        }
    }
    async getTeam(teamId) {
        try {
            return await teams.get(teamId);
        }
        catch (error) {
            this.handleError(error);
            throw error;
        }
    }
    async listTeams() {
        try {
            return await teams.list();
        }
        catch (error) {
            this.handleError(error);
            throw error;
        }
    }
    async updateTeam(teamId, name) {
        try {
            return await teams.updateName(teamId, name);
        }
        catch (error) {
            this.handleError(error);
            throw error;
        }
    }
    async deleteTeam(teamId) {
        try {
            await teams.delete(teamId);
            return true;
        }
        catch (error) {
            this.handleError(error);
            throw error;
        }
    }
    // Membership methods
    async createMembership(teamId, email, roles = [], url = 'http://localhost:5173/team-invite') {
        try {
            return await teams.createMembership(teamId, email, roles, url);
        }
        catch (error) {
            this.handleError(error);
            throw error;
        }
    }
    async getMembership(teamId, membershipId) {
        try {
            return await teams.getMembership(teamId, membershipId);
        }
        catch (error) {
            this.handleError(error);
            throw error;
        }
    }
    async listMemberships(teamId) {
        try {
            return await teams.listMemberships(teamId);
        }
        catch (error) {
            this.handleError(error);
            throw error;
        }
    }
    async updateMembership(teamId, membershipId, roles) {
        try {
            return await teams.updateMembership(teamId, membershipId, roles);
        }
        catch (error) {
            this.handleError(error);
            throw error;
        }
    }
    async deleteMembership(teamId, membershipId) {
        try {
            await teams.deleteMembership(teamId, membershipId);
            return true;
        }
        catch (error) {
            this.handleError(error);
            throw error;
        }
    }
    // Utility methods for event team management
    async createEventTeam(eventId, name) {
        const roles = ['admin', 'member'];
        return this.createTeam(`event-${eventId}`, roles);
    }
    async addEventTeamMember(teamId, email, role = 'member') {
        return this.createMembership(teamId, email, [role]);
    }
    handleError(error) {
        console.error('Teams Error:', error);
        const errorMessages = {
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
